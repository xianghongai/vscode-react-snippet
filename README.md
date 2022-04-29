<p>
  <h1 align="center">React Snippet (Visual Studio Code)</h1>
</p>

<p align="center">
  <a href="https://github.com/xianghongai/vscode-react-snippet">
    <img src="https://img.shields.io/github/repo-size/xianghongai/vscode-react-snippet?style=plastic&color=4ac51c">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=nicholashsiang.vscode-react-snippet">
    <img src="https://vsmarketplacebadge.apphb.com/version-short/nicholashsiang.vscode-react-snippet.svg?style=plastic&color=61dafb">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=nicholashsiang.vscode-react-snippet">
    <img src="https://vsmarketplacebadge.apphb.com/installs-short/nicholashsiang.vscode-react-snippet.svg?style=plastic&color=4ac51c">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=nicholashsiang.vscode-react-snippet">
    <img src="https://vsmarketplacebadge.apphb.com/rating-short/nicholashsiang.vscode-react-snippet.svg?style=plastic&color=4ac51c">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=nicholashsiang.vscode-react-snippet">
    <img src="https://img.shields.io/github/license/xianghongai/vscode-react-snippet?maxAge=2592000&style=plastic&color=4ac51c">
  </a>
</p>

![Screenshot](https://raw.githubusercontent.com/caringrun/assets/master/vscode-react-snippet.gif)

## Version

The major corresponds to the official generation.

## React Router

If you need Router please install the separate [React Router Snippets](https://marketplace.visualstudio.com/items?itemName=NicholasHsiang.vscode-react-router-snippets) extension and choose the appropriate version..

## Snippets

- Import
- Hooks
- Class Component - State/Props
- Class Component - Lifecycle
- Functional Component - Hooks
- Functional Component
- Class Component
- Class Pure Component
- Function Memo Component
- Ref/Context
- PropTypes
- Chore

### Import 🦢

| prefix    | body                                                                                             | description                                                  |
|-----------|--------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| `imr`     | <code>import React from 'react'</code>                                                           | **im**port **R**eact                                         |
| `imrus`   | <code>import React, { useState } from 'react'</code>                                             | **im**port **R**eact **us**eState                            |
| `imruu`   | <code>import React, { useState, useEffect } from 'react'</code>                                  | **im**port **R**eact **u**seState **u**seEffect              |
| `imrd`    | <code>import ReactDOM from 'react-dom'</code>                                                    | **im**port **R**eact**D**OM                                  |
| `imrc`    | <code>import React, { Component } from 'react'</code>                                            | **im**port **R**eact **C**omponent                           |
| `imrcpt`  | <code>import React, { Component } from 'react',<br>import PropTypes from 'prop-types'</code>     | **im**port **R**eact **C**omponent **P**rop**T**ypes         |
| `imrpc`   | <code>import React, { PureComponent } from 'react'</code>                                        | **im**port **R**eact **P**ure**C**omponent                   |
| `imrpcpt` | <code>import React, { PureComponent } from 'react',<br>import PropTypes from 'prop-types'</code> | **im**port **R**eact **P**ure**C**omponent **P**rop**T**ypes |
| `imrm`    | <code>import React, { memo } from 'react'</code>                                                 | **im**port **R**eact **m**emo                                |
| `imrmpt`  | <code>import React, { memo } from 'react',<br>import PropTypes from 'prop-types'</code>          | **im**port **R**eact **m**emo **P**rop**T**ypes              |
| `impt`    | <code>import PropTypes from 'prop-types'</code>                                                  | **im**port **P**rop**T**ypes                                 |


### Hooks 🦋

**u**se**S**tate (`us`/`useState`/`hooks.useState`) →

```jsx
const [state, setstate] = useState(initialState)
```

**u**se**E**ffect (`ue`/`useEffect`/`hooks.useEffect`) →

```jsx
useEffect(() => {

}, [])
```

**u**se**E**ffect **C**leanup (`uec`/`hooks.useEffect.Cleanup`) →

```jsx
useEffect(() => {


  return () => {

  }
}, [])
```

**u**se**R**ef (`ure`/`useRef`/`hooks.useRef`) →

```jsx
const ref = useRef(initialValue)
```

**u**se**C**ontext (`uc`/`useContext`/`hooks.useContext`) →

```jsx
const featureContext = useContext(FeatureContext)
```

**u**se**R**educer (`ur`/`useReducer`/`hooks.useReducer`) →

```jsx
const [state, dispatch] = useReducer(reducer, initializerArg)
```

**u**se**C**allback (`ucb`/`useCallback`/`hooks.useCallback`) →

```jsx
let memoizedCallback = useCallback(() => {
  fn(deps)
}, [deps])
```

**u**se**M**emo (`um`/`useMemo`/`hooks.useMemo`) →

```jsx
let memoizedValue = useMemo(() => computeExpensiveValue(deps), [deps])
```

**u**se**I**mperative**H**andle (`uih`/`useImperativeHandle`/`hooks.useImperativeHandle`) →

```jsx
// exposed components
import React, { useRef, useImperativeHandle, forwardRef } from 'react'

function Button(props, ref) {
  const buttonRef = useRef()

  useImperativeHandle(ref, () => ({
    exposedProperty: () => {
      console.log(`event in Button`)
    },
  }))

  return (
    <button ref={buttonRef} {...props}>
      Button
    </button>
  )
}


export default forwardRef(Button)


// parent components
import React, { useRef } from 'react'
import Button from './Button'

function Form() {
  const buttonRef = useRef(null)

  const handleClick = () => {
    console.log(Object.keys(buttonRef.current))
    console.log('event in Form')
    buttonRef.current.exposedProperty()
  }

  return (
    <>
      <Button onClick={handleClick} ref={buttonRef} />
    </>
  )
}
```

**u**se**D**ebug**V**alue (`udv`/`useDebugValue`/`hooks.useDebugValue`) →

```jsx
useDebugValue(value)
```

**u**se**L**ayout**E**ffect (`ule`/`useLayoutEffect`/`hooks.useLayoutEffect`) →

```jsx
useLayoutEffect(() => {
  // side effects


  // cleanup
  return () => {

  }
}, [])
```

**u**se**I**d (`uid`/`useId`/`hooks.useId`) →

```jsx
const id = useId();
```

**u**se**D**eferred**V**alue (`udv`/`useDeferredValue`/`hooks.useDeferredValue`) →

```jsx
const [deferredValue] = useDeferredValue(value)
```

**u**se**I**nsertion**E**ffect (`uie`/`useInsertionEffect`/`hooks.useInsertionEffect`) →

```jsx
useInsertionEffect(() => {

}, [])
```

**u**se**S**ync**E**xternal**S**tore (`uses`/`useSyncExternalStore`/`hooks.useSyncExternalStore`) →

```jsx
const state = useSyncExternalStore(subscribe, getSnapshot)
```

**u**se**T**ransition (`ut`/`useTransition`/`hooks.useTransition`) →

```jsx
const [isPending, startTransition] = useTransition()
```




### Class Component **State/Props** 🐟

| prefix  | body                                             | description                                         |
|---------|--------------------------------------------------|-----------------------------------------------------|
| `dtp`   | `const { } = this.props`                         | **d**estruct **t**his.**p**rops                     |
| `dts`   | `const { } = this.state`                         | **d**estruct **t**his.**s**tate                     |
| `rst`   | `state = { }`                                    | **r**eact **st**ate                                 |
| `tss`   | `this.setState({})`                              | **t**his.**s**et**S**tate with object               |
| `tssfn` | `this.setState((state, props) => { return { }})` | **t**his.**s**et**S**tate with **f**u**n**ction     |
| `tp`    | `this.props.propertyName`                        | **t**his.**p**rops property name                    |
| `ts`    | `this.state.propertyName`                        | **t**his.**s**tate property name                    |
| `bfn`   | `this.methodName = this.methodName.bind(this)`   | **b**ind a **f**u**n**ction to a component instance |

### Functional Component 🌿

- `rfc` - Create **R**eact **F**unctional **C**omponent
- `rfce` - Create **R**eact **F**unctional **C**omponent and **e**xport
- `rfced` - Create **R**eact **F**unctional **C**omponent and **e**xport it by **d**efault
- `rfcpt` - Create **R**eact **F**unctional **C**omponent with **P**rop**T**ypes

```javascript
// rfce  ↵
export function FileNamePascalCase() {
  return (
    <></>
  )
}
```

```javascript
// rfcpt  ↵
import React from 'react'
import PropTypes from 'prop-types'

function FileNamePascalCase(props) {
  return (
    <>  </>
  )
}

FileNamePascalCase.propTypes = {  }

export default FileNamePascalCase
```

### Class Component 🥀

- `rcc` - Create **R**eact **C**lass **C**omponent and export it by default
- `rccpt` - Create **R**eact **C**lass **C**omponent with **P**rop**T**ypes and export it by default
- `rccl` - Create **R**eact **C**lass **C**omponent (all **L**ifecycle)

```javascript
// rcc  ↵
import React, { Component } from 'react'

export default class FileNamePascalCase extends Component {
  constructor(props) {
    super(props)

    this.state = {  }

    this.handleEvent = this.handleEvent.bind(this)
  }

  componentDidMount() {  }

  componentDidUpdate(prevProps, prevState, snapshot) { if (prevState.name !== this.state.name) { this.handler() } }

  componentWillUnmount() {  }

  // Prototype methods, Bind in Constructor (ES2015)
  handleEvent() {}

  // Class Properties (Stage 3 Proposal)
  handler = () => { this.setState() }

  render() {
    return (
      <></>
    )
  }
}
```

### Class Component **Lifecycle** 🐠

| prefix        | body                                                                                                                                                       |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `constructor` | <code><strong>constructor</strong>(props) { super(props); this.state = { }; this.handleEvent = this.handleEvent.bind(this) }</code>                        |
| `cdm`         | <code><strong>c</strong>omponent<strong>D</strong>id<strong>M</strong>ount(){ }</code>                                                                     |
| `cdu`         | <code><strong>c</strong>omponent<strong>D</strong>id<strong>U</strong>pdate(prevProps, prevState){ ... }</code>                                            |
| `cwu`         | <code><strong>c</strong>omponent<strong>W</strong>ill<strong>Un</strong>mount(){ }</code>                                                                  |
| `gdsfp`       | <code>static <strong>g</strong>et<strong>D</strong>erived<strong>S</strong>tate<strong>F</strong>rom<strong>P</strong>rops(nextProps, prevState){ }</code> |
| `gdsfe`       | <code>static <strong>g</strong>et<strong>D</strong>erived<strong>S</strong>tate<strong>F</strong>rom<strong>E</strong>rror(error){ }</code>                |
| `gsbu`        | <code><strong>g</strong>et<strong>S</strong>napshot<strong>B</strong>efore<strong>U</strong>pdate(prevProps, prevState){ }</code>                          |
| `scu`         | <code><strong>s</strong>hould<strong>C</strong>omponent<strong>U</strong>pdate(nextProps, nextState, nextContext){ }</code>                                |
| `render`      | <code><strong>render</strong>(){ return <></> }</code>                                                                                                     |
| `cwm`         | <code>UNSAFE\_<strong>c</strong>omponent<strong>W</strong>ill<strong>M</strong>ount(){ }                                                                   |
| `cwrp`        | <code>UNSAFE\_<strong>c</strong>omponent<strong>W</strong>ill<strong>R</strong>eceive<strong>P</strong>rops(nextProps, nextContext){ }                     |
| `cwup`        | <code>UNSAFE\_<strong>c</strong>omponent<strong>W</strong>ill<strong>U</strong>pdate(nextProps, nextState, nextContext){ }                                 |

### Class Pure Component 🐙

- `rpc` - Create <code><strong>R</strong>eact.<strong>P</strong>ure<strong>C</strong>omponent</code> and export it by default, it's works with class-based components
- `rpcpt` - Create <code><strong>R</strong>eact.<strong>P</strong>ure<strong>C</strong>omponent</code> with **P**rop**T**ypes and export it by default, it's works with class-based components

```javascript
// rpc  ↵
import React, { PureComponent } from 'react'

export default class FileNamePascalCase extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {  }

    this.handleEvent = this.handleEvent.bind(this)
  }

  componentDidMount() {  }

  render() {
    return (
      <></>
    )
  }
}
```

### Function Memo Component 🌵

- `rmc` - Create <strong>R</strong>eact.<strong>m</strong>emo <strong>C</strong>omponent and export it by default, it's works with functional components
- `rmcpt` - Create <strong>R</strong>eact.<strong>m</strong>emo <strong>C</strong>omponent with **P**rop**T**ypes and export it by default, it's works with functional components

```javascript
// rmc  ↵
import React, { memo } from 'react'

export default memo(function FileNamePascalCase(props) {
  return (
    <></>
  )
})
```


### Ref/Context 🌾

| prefix    | body                                                    | description                                         |
|-----------|---------------------------------------------------------|-----------------------------------------------------|
| `ref`     | `this.refName = React.createRef()`                      | Create **ref** statement used inside constructor    |
| `fref`    | `const ref = React.forwardRef((props, ref) => ( ... ))` | **F**orward **ref** statement used inside component |
| `context` | `const contextName = React.createContext()`             | Create React **context**                            |

### PropTypes 🍂

| prefix                    | body                                                                                     |
|---------------------------|------------------------------------------------------------------------------------------|
| `pt.array`                | `PropTypes.array,`                                                                       |
| `pt.array.required`       | `PropTypes.array.isRequired,`                                                            |
| `pt.bool`                 | `PropTypes.bool,`                                                                        |
| `pt.bool.required`        | `PropTypes.bool.isRequired,`                                                             |
| `pt.func`                 | `PropTypes.func,`                                                                        |
| `pt.func.required`        | `PropTypes.func.isRequired,`                                                             |
| `pt.number`               | `PropTypes.number,`                                                                      |
| `pt.number.required`      | `PropTypes.number.isRequired,`                                                           |
| `pt.object`               | `PropTypes.object,`                                                                      |
| `pt.object.required`      | `PropTypes.object.isRequired,`                                                           |
| `pt.string`               | `PropTypes.string,`                                                                      |
| `pt.string.required`      | `PropTypes.string.isRequired,`                                                           |
| `pt.symbol`               | `PropTypes.symbol,`                                                                      |
| `pt.symbol.required`      | `PropTypes.symbol.isRequired,`                                                           |
| `pt.any`                  | `PropTypes.any,`                                                                         |
| `pt.any.required`         | `PropTypes.any.isRequired,`                                                              |
| `pt.arrayOf`              | `PropTypes.arrayOf(),`                                                                   |
| `pt.arrayOf.required`     | `PropTypes.arrayOf().isRequired,`                                                        |
| `pt.element`              | `PropTypes.element,`                                                                     |
| `pt.element.required`     | `PropTypes.element.isRequired,`                                                          |
| `pt.elementType`          | `PropTypes.elementType,`                                                                 |
| `pt.elementType.required` | `PropTypes.elementType.isRequired,`                                                      |
| `pt.instanceOf`           | `PropTypes.instanceOf(Constructor),`                                                     |
| `pt.instanceOf.required`  | `PropTypes.instanceOf(Constructor).isRequired,`                                          |
| `pt.node`                 | `PropTypes.node,`                                                                        |
| `pt.node.required`        | `PropTypes.node.isRequired,`                                                             |
| `pt.objectOf`             | `PropTypes.objectOf(),`                                                                  |
| `pt.objectOf.required`    | `PropTypes.objectOf().isRequired,`                                                       |
| `pt.oneOf`                | `PropTypes.oneOf(value),`                                                                |
| `pt.oneOf.required`       | `PropTypes.oneOf(value).isRequired,`                                                     |
| `pt.oneOfType`            | `PropTypes.oneOfType([]),`                                                               |
| `pt.oneOfType.required`   | `PropTypes.oneOfType([]).isRequired,`                                                    |
| `pt.shape`                | `PropTypes.shape({}),`                                                                   |
| `pt.shape.required`       | `PropTypes.shape({}).isRequired,`                                                        |
| `pt.exact`                | `PropTypes.exact({}),`                                                                   |
| `pt.exact.required`       | `PropTypes.exact({}).isRequired,`                                                        |
| `pt.custom`               | `function (props, propName, componentName) {}`                                           |
| `pt.custom.array`         | `PropTypes.arrayOf(function (propValue, key, componentName, location, propFullName) {})` |
| `pt.checkPropTypes`       | `PropTypes.checkPropTypes(MyComponent.propTypes, props, 'prop', 'MyComponent')`          |
| `pt.resetWarningCache`    | `PropTypes.resetWarningCache()`                                                          |
| `PT.defaultProps`         | `static defaultProps = {}`                                                               |


### Chore

- `hoc` - HOC Component

🤞

## License

MIT License
