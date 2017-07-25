import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import CollectionItem from "./collection_item";

class CollectionList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchCollections();
  }

  render() {
    const { collections } = this.props;
    console.log("ANDREW SAID LOOK AT THIS", collections)
    
    const collectionList = collections.map((collection) => (
        <CollectionItem key={collection.id} title={collection.title} />)
    )
      return (
        <div className="collection-list">
          {collectionList}
        </div>
      );
  }
}

export default CollectionList;
