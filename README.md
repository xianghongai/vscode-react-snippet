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

[中文 README](./README-CN.md)

## Design Notes

Due to the React Hooks 'Functional Programming' paradigm, there is not much structural code. Especially with the React Compiler, you no longer need to manually reach for `useMemo`, `useCallback`, or `React.memo`, so there is very little template code remaining.

Therefore, this snippet extension only includes the following three parts:

1. Functional components
2. Common Hooks
3. Common APIs

## Snippets

### (1). Functional Components

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

`rfc` - <strong><u style="color: red;">R</u></strong>eact <strong><u style="color: red;">F</u></strong>unctional <strong><u style="color: red;">C</u></strong>omponent

```javascript
function Feature(props) {


  return (

  );
}
```

- Functional Component
- React API
  - `<Activity>`
  - `<Profiler>`
  - `<Suspense>`

### (2). Hooks

`useCallback` - <strong><u style="color: red;">u</u></strong>se<strong><u style="color: red;">C</u></strong>allback >>

```javascript
const handler = useCallback((param) => {}, [dependencies]);
```

- State Hooks
  - `useState`
  - `useReducer`
- Context Hook
  - `useContext`
- Ref Hooks
  - `useRef`
  - `useImperativeHandle`
- Effect Hooks
  - `useEffect`
  - `useLayoutEffect`
  - `useInsertionEffect`
  - `useEffectEvent`
- Performance Hooks
  - `useMemo`
  - `useCallback`
  - `useTransition`
  - `useDeferredValue`
- Other Hooks
  - `useActionState`
  - `useSyncExternalStore`
  - `useOptimistic`
- Form Hooks
  - `useFormStatus`

### (3). APIs

`memo` >>

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

## Related Snippets

If you need `react-router`, please install [React Router Snippets](https://marketplace.visualstudio.com/items?itemName=NicholasHsiang.vscode-react-router-snippets).

If you need `zustand` + `immer`, please install [Zustand + Immer Snippets](https://marketplace.visualstudio.com/items?itemName=NicholasHsiang.vscode-zustand-immer-snippets).

## License

MIT License
