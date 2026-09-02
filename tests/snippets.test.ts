/**
 * 校验片段源的格式与片段语法——只测「片段」这一侧。
 *
 * 检查的是：源文件是合法 JSON、每条片段的字段齐备且类型正确、`scope` 落在已知语言里、
 * body 里的 `${…}` 成对闭合、片段名不重复。这些都是片段源自身的缺陷，
 * 写错了 VS Code 会静默丢弃或静默投放到错误的语言，靠肉眼很难发现。
 *
 * **不检查**展开后的代码在 JS / TS / JSX / Vue 里是否可解析。片段具体的逻辑与场景应用
 * 由开发者负责，在扩展开发宿主窗口（F5）里验收插入效果、Tab 顺序和最终光标位置——
 * 绿色构建不等于编辑器验收。
 *
 * 这份文件在所有片段仓库中逐字节相同，靠 `SOURCES` 通配自适应各仓库的目录结构。
 *
 * 类型仅作文档用途——Vitest 会剥离类型，没有任何环节做类型检查。
 */
import { globSync, readFileSync } from 'node:fs';
import { expect, test } from 'vitest';

const SOURCES = 'src/**/*.json';

/**
 * `scope` 里允许出现的语言 id，取所有片段仓库的并集。
 *
 * 本仓库注册的是不带 `language` 的 `.code-snippets`，投放范围完全由 `scope` 决定，
 * 拼错一个语言 id 不会报错，只会让该片段再也不出现——所以这里用白名单而不是放行任意字符串。
 */
const LANGUAGES = new Set([
  'css',
  'html',
  'javascript',
  'javascriptreact',
  'json',
  'jsonc',
  'less',
  'markdown',
  'scss',
  'typescript',
  'typescriptreact',
  'vue',
]);

/** 一条片段允许出现的键。多余的键多半是拼写错误（`scopes` / `discription`）。 */
const KEYS = new Set(['prefix', 'body', 'description', 'scope', 'isFileTemplate']);

/**
 * body 里每个 `${` 都要能找到配对的 `}`。
 *
 * 只有 `${` 开启一层：裸 `{` 在片段语法里就是普通字符，不参与配对。占位符内部写箭头函数体时
 * 「开花括号不转义、闭花括号转义」（`${1:() => {\n\t$2\n\}}`）是本仓库长期在用的合法写法，
 * 把裸 `{` 也计入嵌套会把它们全部误判成未闭合。需要转义的只有 `$`、`}`、`\` 三者。
 *
 * 多出来的 `}` 不报错——它在片段语法里同样是普通字符，只有缺失的 `}` 才会吞掉后续内容。
 */
function checkPlaceholders(body: string): string | undefined {
  const open: number[] = [];

  for (let index = 0; index < body.length; index += 1) {
    const char = body[index];

    if (char === '\\') {
      index += 1;
    } else if (char === '$' && body[index + 1] === '{') {
      open.push(index);
      index += 1;
    } else if (char === '}') {
      open.pop();
    }
  }

  return open.length ? `unclosed \${…} at offset ${open[0]}` : undefined;
}

function checkPrefix(prefix: unknown): string | undefined {
  if (typeof prefix !== 'string' && !Array.isArray(prefix)) {
    return '"prefix" must be a string or an array of strings';
  }

  const list = Array.isArray(prefix) ? prefix : [prefix];

  if (!list.length) {
    return '"prefix" is empty';
  }

  for (const item of list) {
    if (typeof item !== 'string') {
      return '"prefix" contains a non-string entry';
    }
    if (!item.trim()) {
      return '"prefix" contains an empty entry';
    }
    if (item !== item.trim()) {
      return `"prefix" entry has surrounding whitespace: ${JSON.stringify(item)}`;
    }
  }

  return undefined;
}

function checkBody(body: unknown): string | undefined {
  if (typeof body !== 'string' && !Array.isArray(body)) {
    return '"body" must be a string or an array of strings';
  }

  const lines = Array.isArray(body) ? body : [body];

  if (!lines.length) {
    return '"body" is empty';
  }
  if (lines.some((line) => typeof line !== 'string')) {
    return '"body" contains a non-string line';
  }
  if (!lines.join('').trim()) {
    return '"body" is empty';
  }

  return checkPlaceholders(lines.join('\n'));
}

function checkScope(scope: unknown): string | undefined {
  if (typeof scope !== 'string' || !scope.trim()) {
    return '"scope" is required and must be a non-empty string';
  }

  const seen = new Set<string>();

  for (const entry of scope.split(',')) {
    const language = entry.trim();

    if (!language) {
      return `"scope" has an empty entry: ${JSON.stringify(scope)}`;
    }
    if (!LANGUAGES.has(language)) {
      return `"scope" names an unknown language id: ${JSON.stringify(language)}`;
    }
    if (seen.has(language)) {
      return `"scope" repeats ${JSON.stringify(language)}`;
    }

    seen.add(language);
  }

  return undefined;
}

/** 收集一条片段的全部问题，而不是遇到第一个就返回——一次跑完能看到完整清单。 */
function checkSnippet(name: string, snippet: Record<string, unknown>): string[] {
  const problems: string[] = [];
  const unknown = Object.keys(snippet).filter((key) => !KEYS.has(key));

  if (unknown.length) {
    problems.push(`unknown key(s): ${unknown.join(', ')}`);
  }

  for (const problem of [checkPrefix(snippet.prefix), checkBody(snippet.body), checkScope(snippet.scope)]) {
    if (problem) {
      problems.push(problem);
    }
  }

  if ('description' in snippet && typeof snippet.description !== 'string') {
    problems.push('"description" must be a string');
  }
  if ('isFileTemplate' in snippet && typeof snippet.isFileTemplate !== 'boolean') {
    problems.push('"isFileTemplate" must be a boolean');
  }

  return problems.map((problem) => `${JSON.stringify(name)}: ${problem}`);
}

const files = globSync(SOURCES).sort();

test('sources were found', () => {
  expect(files.length).toBeGreaterThan(0);
});

for (const file of files) {
  test(file, () => {
    // 在测试内部解析：源文件损坏时报告成这一个文件的失败，而不是让整个套件在收集阶段崩掉。
    const contents: unknown = JSON.parse(readFileSync(file, 'utf8'));

    if (contents === null || typeof contents !== 'object' || Array.isArray(contents)) {
      throw new Error(`${file}: the top level must be an object of snippets`);
    }

    const problems: string[] = [];

    for (const [name, snippet] of Object.entries(contents)) {
      if (!name.trim()) {
        problems.push('a snippet name is empty');
      } else if (snippet === null || typeof snippet !== 'object' || Array.isArray(snippet)) {
        problems.push(`${JSON.stringify(name)}: must be an object`);
      } else {
        problems.push(...checkSnippet(name, snippet as Record<string, unknown>));
      }
    }

    if (problems.length) {
      throw new Error(`${file}\n${problems.map((problem) => `  ${problem}`).join('\n')}`);
    }
  });
}

// VS Code 靠名称识别片段，`prefix` 只是触发词，因此前缀可以自由重复。
// 真正的隐患是名称重复：合并时后读到的会覆盖先读到的，片段就此静默消失。
test('snippet names are unique across sources', () => {
  const origin = new Map<string, string>();
  const collisions: string[] = [];

  for (const file of files) {
    for (const name of Object.keys(JSON.parse(readFileSync(file, 'utf8')) as Record<string, unknown>)) {
      if (origin.has(name)) {
        collisions.push(`  ${JSON.stringify(name)}\n    ${origin.get(name)}\n    ${file}`);
      } else {
        origin.set(name, file);
      }
    }
  }

  if (collisions.length) {
    throw new Error(`Duplicate snippet name, these would be silently dropped:\n${collisions.join('\n')}`);
  }
});
