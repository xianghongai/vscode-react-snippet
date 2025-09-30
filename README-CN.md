<p>
  <h1 align="center">React Snippet (Visual Studio Code)</h1>
</p>

<p align="center">
  <a href="https://github.com/xianghongai/vscode-react-snippet">
    <img src="https://img.shields.io/github/repo-size/xianghongai/vscode-react-snippet?color=4ac51c&style=plastic&?cacheSeconds=3600">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=nicholashsiang.vscode-react-snippet">
    <img src="https://img.shields.io/visual-studio-marketplace/v/nicholashsiang.vscode-react-snippet?color=%234ac51c&style=plastic&?cacheSeconds=3600">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=nicholashsiang.vscode-react-snippet">
    <img src="https://img.shields.io/visual-studio-marketplace/d/nicholashsiang.vscode-react-snippet?color=4ac51c&style=plastic&?cacheSeconds=3600">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=nicholashsiang.vscode-react-snippet">
    <img src="https://img.shields.io/visual-studio-marketplace/r/nicholashsiang.vscode-react-snippet?color=4ac51c&style=plastic&?cacheSeconds=3600">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=nicholashsiang.vscode-react-snippet">
    <img src="https://img.shields.io/github/license/xianghongai/vscode-react-snippet?color=4ac51c&style=plastic&?cacheSeconds=3600">
  </a>
</p>

![Screenshot](https://raw.githubusercontent.com/caringrun/assets/master/vscode-react-snippet.gif)

## 设计说明

React 支持 Hooks 之后 Functional Programming 范式性，React 库结构性代码不多，尤其是 React Compiler 之后，无需再手动使用 `useMemo`，`useCallback`，和 `React.memo`，模板代码少之又少了。

因此，这个代码片段扩展仅包含下面三部分内容：

1、函数式组件

2、常用 Hooks

3、常用 API

## Snippets

### 函数式组件

`fc` - React <strong><u style="color: red;">F</u></strong>unctional <strong><u style="color: red;">C</u></strong>omponent (TypeScript)

```typescript
export interface FeatureProps {

}

export default function Feature(props: FeatureProps) {


  return (

  );
}
```

`rfc` - <strong><u style="color: red;">R</u></strong>eact <strong><u style="color: red;">F</u></strong>unctional <strong><u style="color: red;">C</u></strong>omponent (TypeScript)

```typescript
interface FeatureProps {

}

function Feature(props: FeatureProps) {


  return (

  );
}
```

`fc` - React <strong><u style="color: red;">F</u></strong>unctional <strong><u style="color: red;">C</u></strong>omponent

```javascript
export default function Feature(props) {


  return (

  );
}
```

`rfc` - <strong><u style="color: red;">R</u></strong>eact <strong><u style="color: red;">F</u></strong>unctional <strong><u style="color: red;">C</u></strong>omponent (TypeScript)

```javascript
function Feature(props) {


  return (

  );
}
```

### 常用 Hooks

- `useCallback` - <strong><u style="color: red;">u</u></strong>se<strong><u style="color: red;">C</u></strong>allback

```javascript
const handler = useCallback((param) => {
  
}, [dependencies]);
```

- State Hook
  - `useState`
  - `useReducer`
- Context Hook
  - `useContext`
- Ref Hook
  - `useRef`
  - `useImperativeHandle`
- Effect Hook
  - `useEffect`
  - `useLayoutEffect`
- Performance Hook
  - `useMemo`
  - `useCallback`
  - `useTransition`
  - `useDeferredValue`
- Other Hook
  - `useActionState`
  - `useSyncExternalStore`
  - `useOptimistic`
- Form Hooks
  - `useFormStatus`

### 常用 API

`memo`

```typescript
import { memo } from 'react';

export interface FeatureProps {

}

const Feature = memo(function Feature(props: FeatureProps) {


  return (

  );
});

export default Feature;
```

- React API
  - `lazy`
  - `memo`
  - `createContext`
  - `startTransition`
- React DOM API
  - `createPortal`
- Client React DOM API
  - `createRoot`

## 相关 Snippets

如果您需要 `react-router`，请安装 [React Router Snippets](https://marketplace.visualstudio.com/items?itemName=NicholasHsiang.vscode-react-router-snippets)；

如果您需要 `zustand` + `immer`，请安装 [Zustand + Immer](https://marketplace.visualstudio.com/items?itemName=NicholasHsiang.vscode-zustand-immer-snippets)。

## License

MIT License
