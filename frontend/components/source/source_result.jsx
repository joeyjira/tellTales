import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import SourceItem from "./source_item";

class SourceResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  render() {
    const categories = [
      "business",
      "entertainment",
      "gaming",
      "general",
      "music",
      "politics",
      "science-and-nature",
      "sport",
      "technology"
    ];

    const { feedSources } = this.props;
    const { sources } = feedSources;
    const filteredSources = sources.filter(
      source =>
        source.category.includes(this.state.search) ||
        this.state.search.includes(source.category)
    );
    const sourceItems = filteredSources.map(feed =>
      <SourceItem
        key={feed.id}
        name={feed.name}
        description={feed.description}
        id={feed.id}
        url={feed.url}
      />
    );

    return (
      <div>
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search Category"
            onChange={this.update("search")}
          />
        </div>
        <div className="source-item-list">
          {sourceItems}
        </div>
      </div>
    );
  }
}

export default SourceResult;
