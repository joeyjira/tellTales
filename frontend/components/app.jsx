import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SessionFormContainer from './session_form/session_form_container';
import FeedPageContainer from './feed/feed_page_container';
import FeedPage from './feed/feed_page';

const App = () => (
  <div>
    <AuthRoute path="/" component={SessionFormContainer} />
    <ProtectedRoute path="/feed" component={FeedPage} />
  </div>
);

export default App;
