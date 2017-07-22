import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

class ArticleItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, description, image } = this.props;
    return (
      <div className="article-item">
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
      </div>
    );
  }
}

export default ArticleItem;
