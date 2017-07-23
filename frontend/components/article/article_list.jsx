import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import ArticleItem from "./article_item";

class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.match.params.sourceId;
  }

  componentWillMount() {
    this.props.fetchArticles(this.id);
  }

  render() {
    const { article } = this.props;
    const { articles } = article;
    const articleItems = articles.map((element, idx) =>
      <ArticleItem
        key={idx}
        title={element.title}
        description={element.description}
        image={element.urlToImage}
      />
    );

    return (
      <div className="article-item-list">
        <div className="back-button">
          <Link to="/feed/result">Back</Link>
        </div>
        {articleItems}
      </div>
    );
  }
}

export default ArticleList;
