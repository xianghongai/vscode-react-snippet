# React Snippet (Visual Studio Code)

## Snippets

- Import
- Functional Component
- Memo Component
- Hooks
- Class Component
- PureComponent
- this.state/this.props
- Lifecycle
- Ref/Context
- React Router v5
- React Router v6
- PropTypes


### Import

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


### Class Component **State/Props**

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


### Class Component **Lifecycle** ⏳

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


### Functional Component **Hooks**

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


### Functional Component

- `rfc` - Create **R**eact **F**unctional **C**omponent
- `rfce` - Create **R**eact **F**unctional **C**omponent and **e**xport
- `rfced` - Create **R**eact **F**unctional **C**omponent and **e**xport it by **d**efault
- `rfcpt` - Create **R**eact **F**unctional **C**omponent with **P**rop**T**ypes
- `rafc` - Create **R**eact **A**rrow **F**unction **C**omponent
- `rafcpt` - Create **R**eact **A**rrow **F**unction **C**omponent with **P**rop**T**ypes

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


### Class Component

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


### Class Pure Component

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


### Function Memo Component

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


### Ref/Context

| prefix    | body                                                    | description                                         |
|-----------|---------------------------------------------------------|-----------------------------------------------------|
| `ref`     | `this.refName = React.createRef()`                      | Create **ref** statement used inside constructor    |
| `fref`    | `const ref = React.forwardRef((props, ref) => ( ... ))` | **F**orward **ref** statement used inside component |
| `context` | `const contextName = React.createContext()`             | Create React **context**                            |


### React Router V6

| prefix        | body                                                                                     | description                                                          |
|---------------|------------------------------------------------------------------------------------------|----------------------------------------------------------------------|
| `imrrr`       | `import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'`              | **im**port React **R**outer `<BrowserRouter>`, `<Routes>`, `<Route>` |
| `imbr`        | `import { BrowserRouter as Router } from 'react-router-dom'`                             | **im**port React **R**outer `<BrowserRouter>`                        |
| `imhr`        | `import { HashRouter as Router } from 'react-router-dom'`                                | **im**port React **R**outer `<HashRouter>`                           |
| `immr`        | `import { MemoryRouter as Router } from 'react-router-dom'`                              | **im**port React **R**outer `<MemoryRouter>`                         |
| `imnr`        | `import { NativeRouter as Router } from 'react-router-dom'`                              | **im**port React **R**outer `<NativeRouter>`                         |
| `imrr`        | `import { Routes, Route } from 'react-router-dom'`                                       | **im**port React **R**outer `<Routes>`, `<Route>`                    |
| `imrl`        | `import { Link } from 'react-router-dom'`                                                | **im**port React **R**outer `<Link>`                                 |
| `imrnl`       | `import { NavLink } from 'react-router-dom'`                                             | **im**port React **R**outer `<NavLink>`                              |
| `imrn`        | `import { Navigate } from 'react-router-dom'`                                            | **im**port React **R**outer `<Navigate>`                             |
| `imro`        | `import { Outlet } from 'react-router-dom'`                                              | **im**port React **R**outer `<Outlet>`                               |
| `imrul`       | `import { useLocation } from 'react-router-dom'`                                         | **im**port React **R**outer **u**se**L**ocation                      |
| `imrun`       | `import { useNavigate } from 'react-router-dom'`                                         | **im**port React **R**outer **u**se**N**avigate                      |
| `imrup`       | `import { useParams } from 'react-router-dom'`                                           | **im**port React **R**outer **u**se**P**arams                        |
| `imrupr`      | `import { usePrompt } from 'react-router-dom'`                                           | **im**port React **R**outer **u**se**P**rompt                        |
| `imrur`       | `import { useRoutes } from 'react-router-dom'`                                           | **im**port React **R**outer **u**se**R**outes                        |
| `imrusp`      | `import { useSearchParams } from 'react-router-dom'`                                     | **im**port React **R**outer **u**se**S**earch**P**arams              |
| `rl`, `link`  | `<Link to={path}>{name}</Link>`                                                          | React **R**outer `<Link>`                                            |
| `rnl`, `nl`   | `<NavLink to={path} end>{name}</NavLink>`                                                | React **R**outer `<NavLink>`                                         |
| `rr`, `route` | `<Route path={componentConst.route} element={<Component />} />`                          | React **R**outer `<Route>`                                           |
| `rul`         | `let location = useLocation();` ... `handleNavActionStyle(location);`                    | React **R**outer **u**se**L**ocation                                 |
| `run`         | `let navigate = useNavigate();` ...  `navigate(path, { replace: true })`                 | React **R**outer **u**se**N**avigate                                 |
| `rup`         | `const {id} = useParams()`                                                               | React **R**outer **u**se**P**arams                                   |
| `rupr`        | `usePrompt('Are you sure you want to leave?', formData != null)}`                        | React **R**outer **u**se**P**rompt                                   |
| `rur`         | `let routes = useRoutes([ {path, element, children?} ])`                                 | React **R**outer **u**se**R**outes                                   |
| `rusp`        | `let [searchParams, setSearchParams] = useSearchParams()`, ... `setSearchParams(params)` | React **R**outer **u**se**S**earch**P**arams                         |

### React Router V5
| prefix       | body                                                                                                       | description                                                          |
|--------------|------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|
| `imrrsr`     | `import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'`                                | **im**port React **R**outer `<BrowserRouter>`, `<Switch>`, `<Route>` |
| `imrsr`      | `import { Switch, Route } from 'react-router-dom'`                                                         | **im**port React **R**outer `<Switch>`, `<Route>`                    |
| `imrwr`      | `import { withRouter } from 'react-router'`                                                                | **im**port React **R**outer **w**ith**R**outer                       |
| `imruh`      | `import { useHistory } from 'react-router-dom'`                                                            | **im**port React **R**outer **u**se**H**istory                       |
| `imrurm`     | `import { useRouteMatch } from 'react-router-dom'`                                                         | **im**port React **R**outer **u**se**R**outeMatch                    |
| `rsr`        | `<Switch><Route path="path"> ... </Route></Switch>`                                                        | React **R**outer `<Switch>`, `<Route>`                               |
| `rr(legacy)` | `<Route path={componentConst.route} element={<Component />} />`                                            | React **R**outer `<Route>`                                           |
| `redirect`   | `<Redirect from="/users/:id" to="/users/profile/:id" />`                                                   | React **R**outer `<Redirect>`                                        |
| `ruh`        | `const history = useHistory() ... history.push("path")`                                                    | React **R**outer **u**se**H**istory                                  |
| `rurm`       | <code>const match = useRouteMatch() ...  &lt;Link to={`${match.url}/me`}&gt;My Profile&lt;/Link&gt;</code> | React **R**outer **u**se**R**outeMatch                               |


### PropTypes

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

---

TODO: redux, react-native, May be split into separate packages
