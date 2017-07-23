import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

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
        source.category
          .toLowerCase()
          .includes(this.state.search.toLowerCase()) ||
        this.state.search
          .toLowerCase()
          .includes(source.category.toLowerCase()) ||
        source.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
        this.state.search.toLowerCase().includes(source.name.toLowerCase())
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
      <div className="search-and-return">
        <div className="page-tagline">
          <img src="http://res.cloudinary.com/llventioll/image/upload/v1500651465/Screen_Shot_2017-07-21_at_8.32.00_AM_ouxoye.png" />
          <h1>Hello World!</h1>
        </div>
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search Category"
            onChange={this.update("search")}
            list="categories"
          />
          <datalist id="categories">
            <option value="business"/>
            <option value="entertainment"/>
            <option value="gaming"/>
            <option value="general"/>
            <option value="music"/>
            <option value="politics"/>
            <option value="science-and-nature"/>
            <option value="sport"/>
            <option value="technology"/>
          </datalist>
        </div>
        <div className="source-item-list">
          {sourceItems}
        </div>
      </div>
    );
  }
}

export default SourceResult;
