import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

class ArticleItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="article-item">
            {this.props.title}
        </div>
    );
  }
}

export default ArticleItem;
