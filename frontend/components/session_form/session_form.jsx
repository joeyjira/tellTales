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

  // componentWillMount() {
  //   this.props
  //     .fetchFeedSources()
  //     .then(sources =>
  //       this.props.fetchArticles(
  //         sources.feedSources.sources[Math.floor(Math.random() * 69 + 0)].id
  //       )
  //     );
  // }

  render() {
    const { login, signup, signupErrors, loginErrors, article } = this.props;

    const randomArticle = article.articles[Math.floor(Math.random() * 9 + 0)];
    console.log(randomArticle);

    return (
      <div className={css(styles.fadeIn)}>
        <GreetingContainer />
        <div id="background" className="background">
          <div className="home-menu">
            <div className="welcome-message-session">
              <h1>Welcome to tellTales</h1>
            </div>
            <img
              className="frontpage-image"
              src="http://res.cloudinary.com/llventioll/image/upload/v1501275695/live_search_s50f6z.gif"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
