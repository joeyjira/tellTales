import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import CollectionSourceItem from "./collection_source_item";

class CollectionSourceList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { sources, deleteSource, feedSource } = this.props;
    const sourceList = sources.map(source =>
      <CollectionSourceItem
        key={source.id}
        sourceId={source.source_id}
        deleteSource={deleteSource}
        id={source.id}
        feed={feedSource}
      />
    );

    return (
      <div className="collection-source-list">
        {sourceList}
      </div>
    );
  }
}

export default CollectionSourceList;
