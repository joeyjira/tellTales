import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import Modal from "react-modal";

class ArticleItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true})
  }

  closeModal() {
    this.setState({modalIsOpen: false})
  }

  handleModal() {
    this.openModal();
  }

  render() {
    const { title, description, image, url } = this.props;
    return (
        <div className="article-item" onClick={this.openModal}>
          <div className="article-image-frame">
            <img src={image} className="article-image" />
          </div>
          <div className="article-info">
            <h2>
              {title}
            </h2>
             <p> 
              {description}
            </p>
          </div>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="article-view"
            className="article-modal">  
             <iframe src={url} min-height="100%" width="100%" sandbox="allow-script"></iframe> 
          </Modal>   
        </div>
    );
  }
}

export default ArticleItem;
