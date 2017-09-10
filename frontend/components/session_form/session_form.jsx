import React from "react";
import { withRouter } from "react-router";

import Signup from "./signup";
import Login from "./login";
import { fadeIn } from "react-animations";
import { StyleSheet, css } from "aphrodite";
import GreetingContainer from "../greeting/greeting_container";

// const styles = StyleSheet.create({
//   fadeIn: {
//     animationName: fadeIn,
//     animationDuration: "8s"
//   }
// });

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push("/feed");
    }
  }

  componentWillMount() {
    this.props
      .fetchFeedSources()
      .then(sources =>
        this.props.fetchArticles(
          sources.feedSources.sources[Math.floor(Math.random() * 69 + 0)].id
        )
      );
  }

  render() {
    const { login, signup, signupErrors, loginErrors, article } = this.props;

    const randomArticle = article.articles[Math.floor(Math.random() * 9 + 0)];
    console.log(randomArticle);

    return (
      <div>
        <GreetingContainer />
        <div id="background" className="background">
          <div className="home-menu">
            <div className="welcome-message-session">
              <h1>Welcome to tellTales</h1>
              <h3>Follow the News from Your Favorite Sources</h3>
            </div>
            <div />
          </div>
        </div>
        {randomArticle ? (
          <div>Article</div>
        ) : (
          <div>
            <div className="animated infinite pulse">
              <div className="center-tag-logo">
                <img src="http://res.cloudinary.com/llventioll/image/upload/v1500651465/Screen_Shot_2017-07-21_at_8.32.00_AM_ouxoye.png" />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(SessionForm);
