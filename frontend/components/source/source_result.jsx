import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import SourceItem from "./source_item";

class SourceResult extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { feedSources } = this.props;
    console.log("this is source result", feedSources.sources);
    const sourceItems = feedSources.sources.map(feed =>
      <SourceItem
        key={feed.id}
        name={feed.name}
        description={feed.description}
        id={feed.id}
        url={feed.url}
      />
    );

    return (
      <div className="source-item-list">
        {sourceItems}
      </div>
    );
  }
}

export default SourceResult;
