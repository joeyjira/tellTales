import React from "react";
import { withRouter } from "react-router";
import Modal from "react-modal";

import Signup from "./signup";
import Login from "./login";
import { fadeIn } from "react-animations";
import GreetingContainer from "../greeting/greeting_container";
import SlideShow from './slideShow';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      slideShow: document.querySelectorAll("div.slide-show")
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.plusDivs = this.plusDivs.bind(this);
    this.minusDivs = this.minusDivs.bind(this);
    this.showDivs = this.showDivs.bind(this);
    this.slideIndex = 1; 
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push("/feed");
    }
  }

  componentDidMount() {
    this.props.fetchFeedSources().then(sources =>
        this.props.fetchArticles(
          sources.feedSources.sources[Math.floor(Math.random() * 69 + 0)].id
        )
      );
  }

  componentWillUnmount() {
    for (let i = 1; i < 99999; i++) clearInterval(i);
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

  plusDivs() {
    this.showDivs(this.slideIndex += 1);
  }

  minusDivs() {
    this.showDivs(this.slideIndex -= 1);
  }

  showDivs(n) {
    let i;
    if (n > this.slideShow.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = x.length }
    for (i = 0; i < this.slideShow.length; i++) {
      this.slideShow[i].style.display = "none";
    }
    this.slideShow[this.slideIndex - 1].style.display = "block";
  }

  render() {
    const { login, signup, signupErrors, loginErrors, article } = this.props;
    const randomArticles = article.articles;
    const slideShow = randomArticles.map(article =>
      <SlideShow
        key={article.title}
        title={article.title}
        imageSrc={article.urlToImage}
      />
    );

    console.log(this.slideShow)
    // randomArticles.length > 0 ? this.showDivs(this.slideIndex) : null;

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
          {randomArticles.length > 0 ? (
            <div className="frontpage-article" onClick={this.plusDivs}>
              <div className="session-image-container">
                { slideShow }
              </div>
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
