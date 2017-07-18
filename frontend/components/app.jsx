import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import SessionFormContainer from './session_form/session_form_container';

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>tellTales</h1>
      </Link>
    </header>
    <Switch>
     <AuthRoute path="/login" component={SessionFormContainer} />
     <AuthRoute path="/signup" component={SessionFormContainer} />
   </Switch>
  </div>
);

export default App;
