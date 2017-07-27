import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import CollectionSourceItem from "./collection_source_item";

class CollectionSourceList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { sources } = this.props;
    const sourceList = sources.map(source =>
      <CollectionSourceItem key={source.id} sourceId={source.source_id} />
    );

    return (
      <div className="collection-list">
         {sourceList} 
      </div>
    );
  }
}

export default CollectionSourceList;
