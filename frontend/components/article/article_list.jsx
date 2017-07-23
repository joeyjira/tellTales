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
    this.props.fetchFeedSources();
  }

  render() {
    const { article, feedSources } = this.props;
    const { articles, source } = article;
    const { sources } = feedSources;

    const matchSource = sources.filter(source => source.id === article.source)
    // let imageUrl = matchSource.first.url;
    console.log("show article list", matchSource);
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
        {/* <div className="source-item">
          <img
            src={`http://logo.clearbit.com/${imageUrl}?size=202`}
            className="logo-image"
          />
          <div className="source-name">
            {name}
          </div>
        </div> */}
        <div className="back-button">
          <Link to="/feed/result">Back</Link>
        </div>
        {articleItems}
      </div>
    );
  }
}

export default ArticleList;
