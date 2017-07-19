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
  <div className="main">
    <header>
      <Link to="/" className="header-link">
        <h1>tellTales</h1>
      </Link>
      <input type="text" value="searchBar"/>
    </header>
    <GreetingContainer />
    <Switch>
     <AuthRoute path="/login" component={SessionFormContainer} />
     <AuthRoute path="/signup" component={SessionFormContainer} />
     <AuthRoute path="/demo" component={SessionFormContainer} />
   </Switch>
  </div>
);

export default App;
