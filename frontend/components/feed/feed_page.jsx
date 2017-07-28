import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../../util/route_util";

import GreetingContainer from "../greeting/greeting_container";
import SourceContainer from "../source/source_container";
import ArticleListContainer from "../article/article_list_container";
import CollectionContainer from "../collection/collection_container";

class FeedPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      user_id: this.props.currentUser.id
    };
    this.handleCreate = this.handleCreate.bind(this);
  }

  componentWillMount() {
    this.props.fetchFeedSources();
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleCreate(e) {
    e.preventDefault();
    const collection = this.state;
    this.props
      .createCollection({ collection })
      .then(() => this.setState({ title: "" }));
  }

  render() {
    return (
      <div className="main-container">
        <div className="entire-show-page">
          <div className="feedbar-container">
            <div className="collection-creator-container">
              <form onSubmit={this.handleCreate} className="collection-form">
                <input
                  type="text"
                  placeholder="Create Collection"
                  onChange={this.update("title")}
                  value={this.state.title}
                />
                <i
                  className="fa fa-plus"
                  aria-hidden="true"
                  onClick={this.handleCreate}
                />
              </form>
              {/* <button className="guest-button" onClick={this.handleCreate}>
                Create Collection
              </button> */}
            </div>
            <CollectionContainer />
            <div className="add-content">
              <a
                href="https://github.com/joeyjira/tellTales"
                className="add-content-link"
                target="_blank"
              >
                <img
                  src="https://image.flaticon.com/icons/png/512/25/25231.png"
                  className="git-hub-link"
                />
              </a>
            </div>
          </div>
          <div className="main-feed">
            <GreetingContainer />
            <div className="feed-page-holder">
              <div className="rss-feed-result">
                <Switch>
                  <Route path="/feed/result" component={SourceContainer} />
                  <Route
                    path="/feed/source/:sourceId"
                    component={ArticleListContainer}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeedPage;
