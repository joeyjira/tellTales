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
          <div className="animated infinite pulse">
          <img src="http://res.cloudinary.com/llventioll/image/upload/v1500651465/Screen_Shot_2017-07-21_at_8.32.00_AM_ouxoye.png" />
          </div>
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
            <option value="#business"></option>
            <option value="#entertainment"></option>
            <option value="#gaming"></option>
            <option value="#general"></option>
            <option value="#music"></option>
            <option value="#politics"></option>
            <option value="#science-and-nature"></option>
            <option value="#sport"></option>
            <option value="#technology"></option>
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
