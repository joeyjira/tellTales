import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

class CollectionSourceItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteSource(this.props.id);
  }

  render() {
    return (
      <div>
        <button className="fa-delete" onClick={this.handleDelete}>
          <i className="fa fa-times" aria-hidden="true" />
        </button>
        <Link to={`/feed/source/${this.props.sourceId}`}>
          {this.props.sourceId}
        </Link>
      </div>
    );
  }
}

export default CollectionSourceItem;
