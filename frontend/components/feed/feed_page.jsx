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

  handleCreate() {
    const collection = this.state;
    this.props.createCollection({ collection });
  }

  render() {
    return (
      <div className="main-container">
        <div className="entire-show-page">
          <div className="feedbar-container">
            <div className="collection-creator-container">
              <button className="guest-button" onClick={this.handleCreate}>
                Create Collection
              </button>
              <input
                type="text"
                placeholder="Collection"
                onChange={this.update("title")}
              />
            </div>
            <CollectionContainer />
            <div className="add-content">
              <Link to="/feed/result">Add Content</Link>
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
