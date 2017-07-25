import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

class CollectionItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    console.log("WHAT IS THIS", this.props.id);
  }

  handleDelete() {
    const collectionId = this.props.id;
    this.props.deleteCollection(collectionId);
  }

  render() {
    const { title } = this.props;
    if (title) {
      return (
        <div className="collection-name">
          {title}
          <button onClick={this.handleDelete}>Delete</button>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default CollectionItem;
