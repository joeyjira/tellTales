import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import SessionFormContainer from './session_form/session_form_container';
import GreetingContainer from './greeting/greeting_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="main-container">
    <header>
      <div className="container-centered">
        <Link to="/" className="header-link">
          <h1>tellTales</h1>
        </Link>
        <GreetingContainer />
      </div>
    </header>
    <div className="landing">
      <Switch>
       <AuthRoute path="/login" component={SessionFormContainer} />
       <AuthRoute path="/signup" component={SessionFormContainer} />
      </Switch>
    </div>
  </div>
);

export default App;
