import React from "react";
import { withRouter } from "react-router";
import Modal from "react-modal";

import Signup from "./signup";
import Login from "./login";
import { fadeIn } from "react-animations";
import GreetingContainer from "../greeting/greeting_container";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.randomArticle = this.props.fetchFeedSources().then(sources =>
      setInterval(() => {
        this.props.fetchArticles(
          sources.feedSources.sources[Math.floor(Math.random() * 69 + 0)].id
        );
      }, 15000)
    );
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
      }, 15000)
    );
  }

  componentWillUnmount() {
    for (var i = 1; i < 99999; i++) clearInterval(i);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleModal() {
    this.openModal();
  }

  render() {
    const { login, signup, signupErrors, loginErrors, article } = this.props;
    const randomArticle = article.articles[Math.floor(Math.random() * 9 + 0)];

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
            <div className="frontpage-article" onClick={this.openModal}>
              <div className="session-image-container">
              <img src={randomArticle.urlToImage} />
              </div>
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
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="article-view"
          className="session-modal"
        >
          <div className="main-portal">
            <h1 className="title">tellTales</h1>
            <h2 className="tagline">Delivering the World's Buzz</h2>
            <div className="session-form-container">
              <Signup signupErrors={signupErrors} signup={signup} />
              <Login loginErrors={loginErrors} login={login} />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default withRouter(SessionForm);
