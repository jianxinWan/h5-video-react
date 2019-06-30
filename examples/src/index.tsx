import * as React from 'react';
import { Fragment } from 'react'
import { render } from 'react-dom';

import Header from './component/header'
import Introduce from './component/introduce'
import Example from './component/example'

const App = () => {
  return (
    <Fragment>
      <Header />
      <Introduce />
      <Example />
    </Fragment>
  )
};
render(<App />, document.getElementById("root"));