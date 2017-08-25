import React from "react";
import { withRouter } from "react-router";

import Signup from "./signup";
import Login from "./login";
import { fadeIn } from "react-animations";
import { StyleSheet, css } from "aphrodite";
import GreetingContainer from "../greeting/greeting_container";

const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: "8s"
  }
});

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push("/feed");
    }
  }

  componentDidMount() {
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
      <div className={css(styles.fadeIn)}>
        <GreetingContainer />
        <div id="background" className="background">
          {randomArticle ? <div className="article-of-the-day">
            <div className="headline">Today's Headline</div>
            <div className="article-of-the-day-image">
            <img src={randomArticle.urlToImage} className="article-image" />
              </div>
            <div className="article-of-the-day-title">
            {randomArticle.title}
            </div>
            <div className="article-of-the-day-description">
              {randomArticle.description}
              </div>
            </div> : ""}
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
