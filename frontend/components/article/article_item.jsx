import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

class ArticleItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {title, description, image} = this.props;
    return (
        <div className="article-item">
            <img src={image} className="article-image"/>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
  }
}

export default ArticleItem;
