import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import CollectionItem from './collection_item';

class CollectionList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchCollections();
  }

  render() {
    const { allCollections } = this.props;
    const { collections } = allCollections;
    const collectionList = collections.map((collection, idx) =>
      <CollectionItem key={idx} title={collection.title} />
    );
    return (
      <div className="collection-list">
        {collectionList}
      </div>
    );
  }
}

export default CollectionList;
