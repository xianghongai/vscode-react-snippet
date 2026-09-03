# React Snippet (Visual Studio Code)

<p>
  <a href="https://github.com/xianghongai/vscode-react-snippet">
    <img src="https://img.shields.io/github/repo-size/xianghongai/vscode-react-snippet?color=4ac51c&style=plastic" alt="Repo Size">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=nicholashsiang.vscode-react-snippet">
    <img src="https://vsmarketplacebadges.dev/version/nicholashsiang.vscode-react-snippet.svg?style=plastic&color=4ac51c" alt="Visual Studio Marketplace Version">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=nicholashsiang.vscode-react-snippet">
    <img src="https://vsmarketplacebadges.dev/downloads-short/nicholashsiang.vscode-react-snippet.svg?style=plastic&color=4ac51c" alt="Downloads">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=nicholashsiang.vscode-react-snippet">
    <img src="https://vsmarketplacebadges.dev/rating-short/nicholashsiang.vscode-react-snippet.svg?style=plastic&color=4ac51c" alt="Rating">
  </a>
  <a href="https://github.com/xianghongai/vscode-react-snippet/blob/HEAD/LICENSE">
    <img src="https://img.shields.io/github/license/xianghongai/vscode-react-snippet?color=4ac51c&style=plastic" alt="License">
  </a>
</p>

![Screenshot](https://raw.githubusercontent.com/caringrun/assets/master/vscode-react-snippet.gif)

[中文 README](./README.zh-CN.md)

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

`fc-ref` - React <strong><u style="color: red;">F</u></strong>unctional <strong><u style="color: red;">C</u></strong>omponent with <strong><u style="color: red;">R</u></strong>ef (TypeScript)

Since React 19, `ref` is available as a regular prop, `forwardRef` is no longer needed.

```typescript
import type { Ref } from 'react';

export interface FeatureProps {
  ref?: Ref<HTMLDivElement>;

}

export default function Feature({ ref, ...props }: FeatureProps) {


  return (

  );
}
```

- Functional Component
- React API
  - `<Activity>`
  - `<Profiler>`
  - `<Suspense>`
  - `<StrictMode>`

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
  - `ref` callback cleanup
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
  - `useId`
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
  - `flushSync`
  - `preload`
  - `preinit`
  - `preloadModule`
  - `preinitModule`
  - `preconnect`
  - `prefetchDNS`
- Client React DOM API
  - `createRoot`
  - `hydrateRoot`

## Related Snippets

If you need `react-router`, please install [React Router Snippets](https://marketplace.visualstudio.com/items?itemName=NicholasHsiang.vscode-react-router-snippets).

## License

MIT License
