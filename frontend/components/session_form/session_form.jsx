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
    this.randomArticle = this.props.fetchFeedSources().then(sources =>
      setInterval(() => {
        this.props.fetchArticles(
          sources.feedSources.sources[Math.floor(Math.random() * 69 + 0)].id
        );
      }, 4000)
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push("/feed");
    }
  }

  componentDidMount() {
    this.props.fetchFeedSources().then(sources =>
      setInterval(() => {
        this.props.fetchArticles(
          sources.feedSources.sources[Math.floor(Math.random() * 69 + 0)].id
        );
      }, 4000)
    );
  }

  componentWillUnmount() {
    for (var i = 1; i < 99999; i++) clearInterval(i);
  }

  render() {
    const { login, signup, signupErrors, loginErrors, article } = this.props;
    const randomArticle = article.articles[Math.floor(Math.random() * 9 + 0)];
    console.log(randomArticle)

    return (
      <div className="home-page">
        <GreetingContainer />
        <div id="background" className="background">
          <div className="home-menu">
            <div className="welcome-message-session">
              <h1>Welcome to tellTales</h1>
              <h3>Follow the News from Your Favorite Sources</h3>
            </div>
            <div />
          </div>
          {randomArticle ? (
            <div className="frontpage-article">
              <img src={randomArticle.urlToImage} />
              <h3>{randomArticle.title}</h3>
            </div>
          ) : (
            <div>
              <div className="animated infinite pulse">
                <div className="center-tag-logo">
                  <img src="http://res.cloudinary.com/llventioll/image/upload/v1505077296/ajax-loader_lr3we7.gif" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
