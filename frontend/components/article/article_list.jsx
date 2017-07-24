import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import Masonry from 'react-masonry-component';

import ArticleItem from "./article_item";

const masonryOptions = {
  fitWidth: true,
  stagger: 100,
  gutter: 3,
  transitionDuration: '0.8s'
};

class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.match.params.sourceId;
    this.source = this.props.feedSources.sources;
  }

  componentWillMount() {
    this.props.fetchArticles(this.id).then(this.props.fetchFeedSources());
  }

  render() {
    const { article, feedSources } = this.props;
    const { articles, source } = article;
    const { sources } = feedSources;

    const matchSource = sources.filter(source => source.id === article.source)
    let url = matchSource[0] ? matchSource[0].url : "";
    let imageUrl = url ? url.replace(/(\w)\/\w.*/, "$1") : "";
    if (imageUrl === "http://espn.go.com") {
      imageUrl = "http://espn.com"
    }

    let name = matchSource[0] ? matchSource[0].name : "";
    
    const articleItems = articles.map((element, idx) =>
      <ArticleItem
        key={idx}
        title={element.title}
        description={element.description}
        image={element.urlToImage}
        url={element.url}
      />
    );

    return (
      <div className="article-item-list">
         <div className="source-item">
          <img
            src={`http://logo.clearbit.com/${imageUrl}?size=202`}
            className="logo-image"
          />
          <div className="source-name">
            {name}
          </div>
        </div> 
        <div className="back-button">
          <Link to="/feed/result">Back</Link>
        </div>
        <Masonry
          className={'article-list-masonry'}
          elementType={'div'}
          options={masonryOptions}>
          {articleItems}
        </Masonry>
      </div>
    );
  }
}

export default ArticleList;
