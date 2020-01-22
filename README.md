# React Snippet (Visual Studio Code)

## Snippets

Note: All the snippets include the final semicolon `;`

- Import
- Functional Component
- Class Component
- Class Pure Component
- Function Memo Component
- Hooks
- State/Props
- Lifecycle
- Ref/Context
- PropTypes
- React Router

### Import

| prefix   | body                                                                                                 | description                                              |
| -------- | ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `imr`    | <code>"import React from 'react';"</code>                                                            | **im**port **R**eact                                     |
| `imrus`  | <code>"import React, { useState } from 'react';"</code>                                              | **im**port **R**eact **us**eState                        |
| `imruu`  | <code>"import React, { useState, useEffect } from 'react';"</code>                                   | **im**port **R**eact **u**seState **u**seEffect          |
| `imrd`   | <code>"import ReactDOM from 'react-dom';"</code>                                                     | **im**port **R**eact**D**OM                              |
| `imrc`   | <code>"import React, { Component } from 'react';"</code>                                             | **im**port **R**eact **C**omponent                       |
| `imrcp`  | <code>"import React, { Component } from 'react'",<br>"import PropTypes from 'prop-types'"</code>     | **im**port **R**eact **C**omponent **P**ropTypes         |
| `imrpc`  | <code>"import React, { PureComponent } from 'react'"</code>                                          | **im**port **R**eact **P**ure**C**omponent               |
| `imrpcp` | <code>"import React, { PureComponent } from 'react'",<br>"import PropTypes from 'prop-types'"</code> | **im**port **R**eact **P**ure**C**omponent **P**ropTypes |
| `imrm`   | <code>"import React, { memo } from 'react'"</code>                                                   | **im**port **R**eact **m**emo                            |
| `imrmp`  | <code>"import React, { memo } from 'react'",<br>"import PropTypes from 'prop-types'"</code>          | **im**port **R**eact **m**emo **P**ropTypes              |
| `impt`   | <code>"import PropTypes from 'prop-types'"</code>                                                    | **im**port **P**rop**T**ypes                             |

### Functional Component

- `rfc`, Creates a **R**eact **F**unctional **C**omponent

```jsx
function ReactComponent() {
  return <div></div>;
}

export default ReactComponent;
```

- `rfcd`, Creates a **R**eact **F**unctional **C**omponent, **D**efault export

```jsx javascript
export default function ReactComponent() {
  return <div></div>;
}
```

- `rfcp`, Creates a **R**eact **F**unctional **C**omponent with **P**ropTypes

```jsx javascript
import React from 'react';
import PropTypes from 'prop-types';

function ReactComponent(props) {
  return <div></div>;
}

ReactComponent.propTypes = {};

export default ReactComponent;
```

- `rafc`, Creates a **R**eact **A**rrow **F**unction **C**omponent

```jsx javascript
const ReactComponent = () => {
  return <div></div>;
};

export default ReactComponent;
```

- `rafcp`, Creates a **R**eact **A**rrow **F**unction **C**omponent with **P**ropTypes

```jsx javascript
import React from 'react';
import PropTypes from 'prop-types';

const ReactComponent = props => {
  return <div></div>;
};

ReactComponent.propTypes = {};

export default ReactComponent;
```

- `hoc`，**HOC** Component

```jsx javascript
import React from 'react';
import PropTypes from 'prop-types';

export default WrappedComponent => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.propTypes = {};

  return hocComponent;
};
```

### Class Component

- `rcc`, Create **R**eact **C**lass **c**omponent

```jsx javascript
class ReactComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <div></div>;
  }
}

export default ReactComponent;
```

- `rccd`, Create **R**eact **C**lass **C**ompoment, **D**efault export

```jsx javascript
export default class ReactComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <div></div>;
  }
}
```

- `rccl`, Create React class component(lifecycle)

```jsx javascript
import React, { Component } from 'react';

class ReactComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  static getDerivedStateFromProps() { } // rarely used

  shouldComponentUpdate(nextProps, nextState) { } // rarely used

  render() { return (); }

  componentDidMount() { }

  getSnapshotBeforeUpdate(prevProps, prevState) { } // rarely used

  componentDidUpdate(prevProps, prevState, snapshot) { }

  componentWillUnmount() { }

  static getDerivedStateFromError(error) { }

  componentDidCatch(error, info) { }
}

export default ReactComponent
```

- `rccp`, Create **R**eact **C**lass **c**omponent with **P**ropTypes

```jsx javascript
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ReactComponent extends Component {
  static propTypes = {};

  render() {
    return <div></div>;
  }
}

export default ReactComponent;
```

- `rccpd`, Create **R**eact **C**lass **C**ompoment with **P**ropTypes, **D**efault export

```jsx javascript
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ReactComponent extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return <div></div>;
  }
}
```

### Class Pure Component

- `rcpcd`, Create **R**eact **C**lass **P**ure**C**omponent, **D**efault export

```jsx javascript
import React, { PureComponent } from 'react';

export default class ReactComponent extends PureComponent {
  render() {
    return <div></div>;
  }
}
```

- `rcpc`, Create **R**eact **C**lass **P**ure**C**omponent

```jsx javascript
import React, { PureComponent } from 'react';

class ReactComponent extends PureComponent {
  render() {
    return <div></div>;
  }
}

export default ReactComponent;
```

- `rcpcpd`, Create **R**eact **C**lass **P**ure**C**omponent with **P**ropTypes, **D**efault export

```jsx javascript
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ReactComponent extends PureComponent {
  static propTypes = {};

  render() {
    return <div></div>;
  }
}
```

### Function Memo Component

- `rmcd`, Create **R**eact **F**unction **M**emo **C**omponent, **D**efault export

```jsx javascript
import React, { memo } from 'react';

export default memo(function ReactComponent() {
  return <div></div>;
});
```

- `rmcp`, Create **R**eact **F**unction **M**emo **C**omponent with **P**ropTypes

```jsx javascript
import React, { memo } from 'react';
import PropTypes from 'prop-types';

const ReactComponent = memo(function ReactComponent(props) {
  return <div></div>;
});

ReactComponent.propTypes = {};

export default ReactComponent;
```

### Hooks

| prefix                         | body                                                                | description                                      |
| ------------------------------ | ------------------------------------------------------------------- | ------------------------------------------------ |
| [`useState`, `us`, `rus`]      | `const [state, setState] = useState(initialState)`                  | **R**eact **u**se**S**tate Hook                  |
| [`useEffect`, `ue`, `rue`]     | `useEffect(() => { }, []);`                                         | **R**eact **u**se**E**ffect Hook Without Cleanup |
| `uec`                          | `useEffect(() => { return () => { cleanUpEffect }; }, []);`         | **u**se**E**ffect **C**leanup                    |
| [`useContext`, `uc`]           | `const context = useContext(contextValue)`                          |                                                  |
| [`useReducer`, `ur`]           | `const [state, dispatch] = useReducer(reducer, initialState, init)` |                                                  |
| [`useCallback`, `ucb`]         | `useCallback( () => { callback }, [input], )`                       |                                                  |
| [`useMemo`, `um`]              | `useMemo(() => function, input)`                                    |                                                  |
| [`useRef`, `ure`]              | `const ref = useRef(initialValue)`                                  |                                                  |
| [`useImperativeHandle`, `uih`] | `useImperativeHandle( ref, () => { handler }, [input], )`           |                                                  |
| [`useDebugValue`, `udv`]       | `useDebugValue(value)`                                              |                                                  |
| [`useLayoutEffect`, `ule`]     | `useLayoutEffect(() => { return () => { effect }, [input] })`       |                                                  |

### State/Props

| prefix      | body                                                    | description                               |
| ----------- | ------------------------------------------------------- | ----------------------------------------- |
| `cp`        | `const { } = this.props`                                | **c**onst destruct**P**rops               |
| `cs`        | `const { } = this.state`                                | **c**onst destruct**S**tate               |
| `rconst`    | `constructor(props) { super(props); this.state = { } }` | **r**eact **c**lass c**onst**ructor       |
| `rst`       | `state = { }`                                           | **r**eact **st**ate                       |
| `sst`       | `this.setState({})`                                     | Component **s**et **st**ate with object   |
| `sstf`      | `this.setState((state, props) => { return { }})`        | Component **s**et **st**ate with **f**unc |
| `props`     | `this.props.`                                           | Component **props**                       |
| `state`     | `this.state.`                                           | Component **state**                       |
| `tmb`, `bd` | `this.methodName = this.methodName.bind(this)`          | **t**his.**m**ethod.**b**ind              |

### Lifecycle

| prefix   | body                                                                                                                                            |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `cwm`    | <code><strong>c</strong>omponent<strong>W</strong>ill<strong>M</strong>ount()</code>                                                            |
| `cwmu`   | <code>UNSAFE\_<strong>c</strong>omponent<strong>W</strong>ill<strong>M</strong>ount() // <strong>U</strong>NSAFE</code>                         |
| `cdm`    | <code><strong>c</strong>omponent<strong>D</strong>id<strong>M</strong>ount()</code>                                                             |
| `cwrp`   | <code><strong>c</strong>omponent<strong>W</strong>ill<strong>R</strong>eceive<strong>P</strong>rops()</code>                                    |
| `cwrpu`  | <code>UNSAFE\_<strong>c</strong>omponent<strong>W</strong>ill<strong>R</strong>eceive<strong>P</strong>rops() // <strong>U</strong>NSAFE</code> |
| `scu`    | <code><strong>s</strong>hould<strong>C</strong>omponent<strong>U</strong>pdate()</code>                                                         |
| `cwu`    | <code><strong>c</strong>omponent<strong>W</strong>ill<strong>U</strong>pdate()</code>                                                           |
| `cwuu`   | <code>UNSAFE\_<strong>c</strong>omponent<strong>W</strong>ill<strong>U</strong>pdate() // <strong>U</strong>NSAFE</code>                        |
| `cdu`    | <code><strong>c</strong>omponent<strong>D</strong>id<strong>U</strong>pdate()</code>                                                            |
| `cwun`   | <code><strong>c</strong>omponent<strong>W</strong>ill<strong>Un</strong>mount()</code>                                                          |
| `gdsfp`  | <code><strong>g</strong>et<strong>D</strong>erived<strong>S</strong>tate<strong>F</strong>rom<strong>P</strong>rops()</code>                    |
| `gsbu`   | <code><strong>g</strong>et<strong>S</strong>napshot<strong>B</strong>efore<strong>U</strong>pdate()</code>                                      |
| `render` | <code><strong>render</strong>()</code>                                                                                                          |

### Ref/Context

| prefix    | body                                        | description                                         |
| --------- | ------------------------------------------- | --------------------------------------------------- |
| `ref`     | `this.refName = React.createRef()`          | Create **ref** statement used inside constructor    |
| `reff`    | `const ref = React.createRef()`             | **F**orward **ref** statement used inside component |
| `context` | `const contextName = React.createContext()` | Create React **context**                            |

### PropTypes

| prefix   | body                                                                                                                                  |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `pta`    | <code><strong>P</strong>rop<strong>T</strong>ypes.<strong>a</strong>rray,</code>                                                      |
| `ptar`   | <code><strong>P</strong>rop<strong>T</strong>ypes.<strong>a</strong>rray.is<strong>R</strong>equired,</code>                          |
| `ptb`    | <code><strong>P</strong>rop<strong>T</strong>ypes.<strong>b</strong>ool,</code>                                                       |
| `ptbr`   | <code><strong>P</strong>rop<strong>T</strong>ypes.<strong>b</strong>ool.is<strong>R</strong>equired,</code>                           |
| `ptf`    | <code><strong>P</strong>rop<strong>T</strong>ypes.<strong>f</strong>unc,</code>                                                       |
| `ptfr`   | <code><strong>P</strong>rop<strong>T</strong>ypes.<strong>f</strong>unc.is<strong>R</strong>equired,</code>                           |
| `ptn`    | <code><strong>P</strong>rop<strong>T</strong>ypes.<strong>n</strong>umber,</code>                                                     |
| `ptnr`   | <code><strong>P</strong>rop<strong>T</strong>ypes.<strong>n</strong>umber.is<strong>R</strong>equired,</code>                         |
| `pto`    | <code><strong>P</strong>rop<strong>T</strong>ypes.<strong>o</strong>bject,</code>                                                     |
| `ptor`   | <code><strong>P</strong>rop<strong>T</strong>ypes.<strong>o</strong>bject.is<strong>R</strong>equired,</code>                         |
| `pts`    | <code><strong>P</strong>rop<strong>T</strong>ypes.<strong>s</strong>tring,</code>                                                     |
| `ptsr`   | <code><strong>P</strong>rop<strong>T</strong>ypes.<strong>s</strong>tring.is<strong>R</strong>equired,</code>                         |
| `ptnd`   | <code><strong>P</strong>rop<strong>T</strong>ypes.<strong>n</strong>o<strong>d</strong>e,</code>                                      |
| `ptndr`  | <code><strong>P</strong>rop<strong>T</strong>ypes.<strong>n</strong>o<strong>d</strong>e.is<strong>R</strong>equired,</code>          |
| `ptel`   | <code><strong>P</strong>rop<strong>T</strong>ypes.<strong>el</strong>ement,</code>                                                    |
| `ptelr`  | <code><strong>P</strong>rop<strong>T</strong>ypes.<strong>el</strong>ement.is<strong>R</strong>equired,</code>                        |
| `pti`    | <code><strong>P</strong>rop<strong>T</strong>ypes.<strong>i</strong>nstanceOf(),</code>                                               |
| `ptir`   | <code><strong>P</strong>rop<strong>T</strong>ypes.<strong>i</strong>nstanceOf().is<strong>R</strong>equired,</code>                   |
| `pte`    | <code><strong>P</strong>rop<strong>T</strong>ypes.on<strong>e</strong>Of([]),</code>                                                  |
| `pter`   | <code><strong>P</strong>rop<strong>T</strong>ypes.on<strong>e</strong>Of([]).is<strong>R</strong>equired,</code>                      |
| `ptet`   | <code><strong>P</strong>rop<strong>T</strong>ypes.on<strong>e</strong>Of<strong>T</strong>ype([]),</code>                             |
| `ptetr`  | <code><strong>P</strong>rop<strong>T</strong>ypes.on<strong>e</strong>Of<strong>T</strong>ype([]).is<strong>R</strong>equired,</code> |
| `ptao`   | <code><strong>P</strong>rop<strong>T</strong>ypes.<strong>a</strong>rray<strong>O</strong>f(),</code>                                 |
| `ptaor`  | <code><strong>P</strong>rop<strong>T</strong>ypes.<strong>a</strong>rray<strong>O</strong>f().is<strong>R</strong>equired,</code>     |
| `ptoo`   | <code><strong>P</strong>rop<strong>T</strong>ypes.<strong>o</strong>bject<strong>O</strong>f(),</code>                                |
| `ptoor`  | <code><strong>P</strong>rop<strong>T</strong>ypes.<strong>o</strong>bject<strong>O</strong>f().is<strong>R</strong>equired,</code>    |
| `ptsh`   | <code><strong>P</strong>rop<strong>T</strong>ypes.<strong>sh</strong>ape({}),</code>                                                  |
| `ptshr`  | <code><strong>P</strong>rop<strong>T</strong>ypes.<strong>sh</strong>ape({}).is<strong>R</strong>equired,</code>                      |
| `ptypes` | <code>static <strong>p</strong>rop<strong>Types</strong> = {}</code>                                                                  |
| `ptany`  | <code><strong>P</strong>rop<strong>T</strong>ypes.<strong>any</strong>,</code>                                                        |

### React Router

| prefix            | body                                                                         | description                                                        |
| ----------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| `imrrsr`          | `import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';` | **im**port React-**R**outer Browser**R**outer/**S**witch/**R**oute |
| `imrsr`           | `import { Switch, Route } from 'react-router-dom';`                          | **im**port React-**R**outer **S**witch & **R**oute                 |
| `imrl`            | `import { Link } from 'react-router-dom';`                                   | **im**port React-**R**outer **L**ink                               |
| `imrnl`           | `import { NavLink } from 'react-router-dom';`                                | **im**port React-**R**outer **N**avLink                            |
| `imrwr`           | `import { withRouter } from "react-router";`                                 | **im**port React-**R**outer **w**ith**R**outer                     |
| `imruh`           | `import { useHistory } from 'react-router-dom';`                             | **im**port React-**R**outer **u**se**H**istory                     |
| `ruh`             | `const history = useHistory();`                                              | React-**R**outer **u**se**H**istory                                |
| `imrul`           | `import { useLocation } from 'react-router-dom';`                            | **im**port React-**R**outer **u**se**L**ocation                    |
| `rul`             | `const location = useLocation();`                                            | React-**R**outer **u**se**L**ocation                               |
| `imrup`           | `import { useParams } from 'react-router-dom';`                              | **im**port React-**R**outer **u**se**P**arams                      |
| `rup`             | `const id = useParams();`                                                    | React-**R**outer **u**se**P**arams                                 |
| `imrurm`          | `import { useRouteMatch } from 'react-router-dom';`                          | **im**port React-**R**outer **u**se**R**oute**M**atch              |
| `rurm`            | `const match = useRouteMatch();`                                             | React-**R**outer **u**se**R**oute**M**atch                         |
| `rr`              | `<Route ...><Component /></Route>`                                           | React-**R**outer **R**oute                                         |
| `rsr`             | `<Switch><Route ...><Component /></Route>`                                   | React-**R**outer **S**witch&**R**oute                              |
| `rl`, `link`      | `<Link ...>...`                                                                  | React-**R**outer **L**ink                                          |
| `rnl`, `navlink`  | `<NavLink ...>...`                                                               | React-**R**outer **N**avLink                                       |
| `rre`, `redirect` | `<Switch><Redirect ... /><Route>...`                                         | React-**R**outer **Re**direct                                      |

## License

MIT License

---

TODO: redux, react-native, May be split into separate packages
