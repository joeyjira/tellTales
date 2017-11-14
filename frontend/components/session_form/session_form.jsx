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
      style: {
        display: "none"
      },
      slideIndex: 0,
      slideNumber: this.props.article.articles || 0
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
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

  nextSlide() {
    this.setState({
      slideIndex: this.state.slideIndex + 1
    })
  }

  render() {
    const { login, signup, signupErrors, loginErrors, article } = this.props;
    const randomArticles = article.articles;
    const slideShow = []
    for (let i = 0; i < randomArticles.length; i++) {
      let style = {}
      if (i === this.state.slideIndex) {
        style = {
          display: "block"
        }
      } else {
        style = {
          display: "none"
        }
      }
      slideShow.push(
        <SlideShow 
          key={randomArticles[i].title}
          title={randomArticles[i].title}
          imageSrc={randomArticles[i].urlToImage}
          display={style}
        />
      )
    }

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
                <div className="slide-controller">
                  <div className="slide-arrow" >&#10094;</div>
                  <div className="slide-arrow" onClick={this.nextSlide} >&#10095;</div>
                </div>
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
