import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import SessionFormContainer from "./session_form/session_form_container";
import FeedPageContainer from "./feed/feed_page_container";
import GreetingContainer from "./greeting/greeting_container";
import ArticleListContainer from "./article/article_list_container";

const App = () =>
  <div>
    <Switch>
      <AuthRoute exact path="/" component={SessionFormContainer} />
      <ProtectedRoute path="/feed" component={FeedPageContainer} />
    </Switch>
  </div>;

export default App;
