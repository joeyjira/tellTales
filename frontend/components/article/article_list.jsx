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
  }

  componentWillMount() {
    this.props.fetchArticles(this.id).then(this.props.fetchFeedSources());
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  render() {
    const { article, feedSources } = this.props;
    const { articles, source } = article;
    const { sources } = feedSources;

    const matchSource = sources.filter(source => source.id === article.source);
    let url = matchSource[0] ? matchSource[0].url : "";
    let imageUrl = url ? url.replace(/(\w)\/\w.*/, "$1") : "";
    if (imageUrl === "http://espn.go.com") {
      imageUrl = "http://espn.com";
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
        <div className="article-logo-container">
          {/* <div className="article-logo">
            <img
              src={`http://logo.clearbit.com/${imageUrl}?size=202`}
              className="article-image"
            />
          </div>  */}
          <div className="article-source-name">
            {name}
          </div>
        </div>
        <div className="back-button">
          <Link to="/feed/result">
            <div className="animated infinite pulse">
              <div className="hello-logo">
                <img src="http://res.cloudinary.com/llventioll/image/upload/v1500651465/Screen_Shot_2017-07-21_at_8.32.00_AM_ouxoye.png" />
              </div>
            </div>
          </Link>
        </div>
        {articleItems}
      </div>
    );
  }
}

export default ArticleList;
