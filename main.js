/**
 * Merge the per-topic snippet sources under `src/` into the flat
 * `snippets/<name>.json` files that `contributes.snippets` in package.json points at.
 *
 * Keeping the sources split by topic is what makes them editable; VS Code, however,
 * only reads one file per language, hence this build step.
 *
 * Run via `pnpm run prebuild`. pnpm runs it automatically before `build`,
 * so `vsce package` always ships freshly generated snippets.
 */
import fs from 'node:fs';
import { glob } from 'glob';

/** Where the merged files are written. Must match `contributes.snippets` in package.json. */
const outputPath = './snippets/';

/* ------------------------------------------------------------------ *
 * REPO-SPECIFIC CONFIG — the only part that differs between the       *
 * snippet repositories. Everything below it is shared verbatim.       *
 * ------------------------------------------------------------------ */

/**
 * One entry per generated file: every JSON matched by `path` is merged into
 * `snippets/<filename>.json`. `path` is a glob, or an array of globs when a
 * single output is assembled from several patterns — glob de-duplicates, so
 * overlapping patterns are safe.
 */
const options = [
  {
    path: ['src/**/!(*.tsx|*-tsx).json', 'src/**/*-jsx.json'],
    filename: 'jsx',
  },
  {
    path: ['src/**/!(*.jsx|*-jsx).json', 'src/**/*-tsx.json'],
    filename: 'tsx',
  },
];

/* ------------------------------------------------------------------ *
 * SHARED CORE                                                         *
 * ------------------------------------------------------------------ */

/**
 * Merge the snippet objects of `files` into a single object.
 *
 * VS Code identifies a snippet by its *name* (the top-level key); `prefix` is
 * merely what you type to trigger it. So two snippets may share a prefix —
 * VS Code then offers them as separate candidates labelled by name, which these
 * repos rely on for variants of one API (`import-ref` from `vue` vs from a plugin,
 * for instance). Sharing a *name* is a different matter: `output[name] = snippet`
 * lets the later file silently overwrite the earlier one and a snippet vanishes
 * from the build without a trace. That is what `collisions` catches.
 */
function collect(files) {
  const output = {};
  /** name -> the file that first defined it, so a collision can name both sides. */
  const origin = new Map();
  const collisions = [];

  files.forEach((file) => {
    const contents = JSON.parse(fs.readFileSync(file, 'utf8'));

    Object.entries(contents).forEach(([name, snippet]) => {
      if (origin.has(name)) {
        collisions.push(`  "${name}"\n    ${origin.get(name)}\n    ${file}`);
      } else {
        origin.set(name, file);
      }

      output[name] = snippet;
    });
  });

  return { output, collisions, total: origin.size };
}

/** Build one `snippets/<filename>.json` from `files`. */
function handler(files, filename) {
  const { output, collisions, total } = collect(files);

  // Fail loudly rather than shipping a build that is quietly missing snippets.
  if (collisions.length) {
    console.error(
      `\n${filename}.json: duplicate snippet name, these would be silently dropped:\n${collisions.join('\n')}\n`,
    );
    process.exitCode = 1;
    return;
  }

  fs.existsSync(outputPath) || fs.mkdirSync(outputPath, { recursive: true });
  fs.writeFileSync(
    `${outputPath}${filename}.json`,
    `${JSON.stringify(output, null, 4)}\n`,
  );

  console.log(`${filename}.json: ${total} snippets from ${files.length} files`);
}

async function init() {
  for (const { path, filename } of options) {
    // Sort so the merge order — and therefore the output — is reproducible;
    // glob makes no ordering guarantee of its own.
    const files = (await glob(path)).sort();
    handler(files, filename);
  }

  if (process.exitCode) {
    console.log('Failed! :(');
    return;
  }

  console.log('Complete! :)');
}

init().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
