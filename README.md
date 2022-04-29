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


### Functional Component **Hooks** 🦋

| prefix | body                                                                                | description                                |
|--------|-------------------------------------------------------------------------------------|--------------------------------------------|
| `us`   | `const [state, setState] = useState(initialState)`                                  | **u**se**S**tate                           |
| `ue`   | `useEffect(() => { /* side effects */ }, []);`                                      | asynchronously, **u**se**E**ffect          |
| `uec`  | `useEffect(() => { /* side effects */ return () => { /* cleanup  */ } }, [])`       | **u**se**E**ffect **C**leanup              |
| `uc`   | `const context = useContext(context)`                                               | **u**se**C**ontext                         |
| `ur`   | `const [state, dispatch] = useReducer(reducer, initializerArg, initializer)`        | **u**se**R**educer                         |
| `ucb`  | `let memoizedCallback = useCallback(() => { fn() }, [deps])`                        | **u**se**C**allback                        |
| `um`   | `let memoizedValue = useMemo(() => {}, [deps])`                                     | **u**se**M**emo                            |
| `ure`  | `const ref = useRef(initialValue)`                                                  | **u**se**R**ef                             |
| `uih`  | `useImperativeHandle(ref, () => { handler }, [deps])`                               | **u**se**I**mperative**H**andle            |
| `udv`  | `useDebugValue(value)`                                                              | **u**se**D**ebug**V**alue                  |
| `ule`  | `useLayoutEffect(() => { /* side effects */ return () => { /* cleanup  */ } }, [])` | synchronously, **u**se**L**ayout**E**ffect |


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
