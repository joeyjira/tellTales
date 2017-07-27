import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import ArticleItem from "./article_item";

class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.match.params.sourceId;
    this.source = this.props.feedSources.sources;
    this.state = {
      title: "",
      user_id: this.props.currentUser.id
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.props.fetchArticles(this.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.sourceId !== nextProps.match.params.sourceId) {
      this.props.fetchArticles(nextProps.match.params.sourceId);
    }
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleClick(collectionId) {
    return e =>
      this.props.createSource(collectionId, this.props.match.params.sourceId);
  }

  render() {
    const { article, feedSources, collections } = this.props;
    const { articles, source } = article;
    const { sources } = feedSources;

    const matchSource = sources.filter(source => source.id === article.source);
    let url = matchSource[0] ? matchSource[0].url : "";
    let imageUrl = url ? url.replace(/(\w)\/\w.*/, "$1") : "";
    if (imageUrl === "http://espn.go.com") {
      imageUrl = "http://espn.com";
    }

    let name = matchSource[0] ? matchSource[0].name : "";

    const articleItems = articles.map((article, idx) =>
      <ArticleItem
        key={idx}
        title={article.title}
        description={article.description}
        image={article.urlToImage}
        url={article.url}
      />
    );

    const collectionButtons = collections.map(collection =>
      <button key={collection.id} onClick={this.handleClick(collection.id)}>
        {collection.title}
      </button>
    );

    return (
      <div className="article-item-list">
        <div className="article-logo-container">
          <div className="back-button">
            <Link to="/feed/result" className="back-button-link">
              <div className="animated infinite pulse">
                <div className="hello-logo">
                  <i className="fa fa-angle-left fa-4x" aria-hidden="true"></i>
                </div>
              </div>
            </Link>
          </div>
          {/* <div className="article-logo">
            <img
              src={`http://logo.clearbit.com/${imageUrl}?size=202`}
              className="article-image"
            />
          </div>  */}
          <div className="article-source-name">
            {name}
          </div>
          <div className="source-follow-container">
            <div className="dropdown">
              <div className="add-to-collection">ADD TO COLLECTION</div>
              <div className="dropdown-content">
                <div className="collection-add-container">
                  {collectionButtons}
                </div>
              </div>
            </div>
          </div>
        </div>
        {articleItems}
      </div>
    );
  }
}

export default ArticleList;
