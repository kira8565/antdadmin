import React, {PropTypes} from 'react';
import {Router, Route, IndexRoute, Link} from 'dva/router';

import App from "./routes/App.js";

export default function ({history}) {
  return (
    <Router history={history}>
      <Route path="/" component={App}/>
    </Router>
  );
}
