import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../../util/route_util";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import GreetingContainer from "../greeting/greeting_container";
import SourceContainer from "../source/source_container";
import ArticleListContainer from "../article/article_list_container";

import { bounceInUp } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  fadeIn: {
    animationName: bounceInUp,
    animationDuration: '3s'
  }
})

class FeedPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchFeedSources();
  }

  render() {
    return (
      <div className={css(styles.fadeIn)}>
        <div className="entire-show-page">
          <div className="feedbar-container">
            <h1>This is the feedbar-container</h1>
          </div>
          <div className="main-feed">
            <GreetingContainer />
            <div className="feed-page-holder">
              <div className="page-tagline">
                <img className={css(styles.pulse)} src="http://res.cloudinary.com/llventioll/image/upload/v1500651465/Screen_Shot_2017-07-21_at_8.32.00_AM_ouxoye.png" />
                <h1>Hello World!</h1>
              </div>
              <div className="search-bar-container">
                <input type="text" placeholder="Search Category" />
              </div>
              <div className="rss-feed-result">
                <Switch>
                  <Route path="/feed/result" component={SourceContainer} />
                  <Route
                    path="/feed/source/:sourceId"
                    component={ArticleListContainer}
                  />
                </Switch>
                <div className="rss-list" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeedPage;
