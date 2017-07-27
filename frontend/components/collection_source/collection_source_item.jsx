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
    const { feed, sourceId } = this.props;
    const { sources } = feed;

    const matchSource = sources.filter(source => source.id === sourceId);
    let url = matchSource[0] ? matchSource[0].url : "";
    let imageUrl = url ? url.replace(/(\w)\/\w.*/, "$1") : "";
    if (imageUrl === "http://espn.go.com") {
      imageUrl = "http://espn.com";
    }

    let name = matchSource[0] ? matchSource[0].name : "";
    return (
      <div className="collection-source-options">
        <button className="fa-delete-source" onClick={this.handleDelete}>
          <i className="fa fa-times" aria-hidden="true" />
        </button>
        <Link to={`/feed/source/${this.props.sourceId}`}>
          <img
            src={`http://logo.clearbit.com/${imageUrl}?size=202`}
            className="source-icon-image"
          />
          <p>{name}</p>
        </Link>
      </div>
    );
  }
}

export default CollectionSourceItem;
