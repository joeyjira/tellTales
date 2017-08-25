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
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    const { feedSources } = this.props;
    const { sources } = feedSources;
    const iframeSources = sources.filter(
      source =>
        source.name !== "ABC News (AU)" &&
        source.name !== "Ars Technica" &&
        source.name !== "Bloomberg" &&
        source.name !== "CNN" &&
        source.name !== "Engadget" &&
        source.name !== "ESPN Cric Info" &&
        source.name !== "Financial Times" &&
        source.name !== "FourFourTwo" &&
        source.name !== "Hacker News" &&
        source.name !== "IGN" &&
        source.name !== "Independent" &&
        source.name !== "MTV News (UK)" &&
        source.name !== "National Geographic" &&
        source.name !== "Polygon" &&
        source.name !== "Recode" &&
        source.name !== "Reddit /r/all" &&
        source.name !== "The Guardian (AU)" &&
        source.name !== "The Guardian (UK)" &&
        source.name !== "The Hindu" &&
        source.name !== "The New York Times" &&
        source.name !== "The Next Web" &&
        source.name !== "The Telegraph" &&
        source.name !== "The Verge" &&
        source.name !== "Wired.de"
    );
    const filteredSources = iframeSources.filter(
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
            <div className="center-tag-logo">
              <img src="http://res.cloudinary.com/llventioll/image/upload/v1500651465/Screen_Shot_2017-07-21_at_8.32.00_AM_ouxoye.png" />
            </div>
          </div>
          <h1>Hello World!</h1>
        </div>
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search"
            onChange={this.update("search")}
            list="categories"
          />
          <datalist id="categories">
            <option value="Business" />
            <option value="Entertainment" />
            <option value="General" />
            <option value="Music" />
            <option value="Politics" />
            <option value="Science-and-nature" />
            <option value="Sports" />
            <option value="Technology" />
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
