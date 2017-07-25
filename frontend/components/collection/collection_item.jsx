import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

class CollectionItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props;
    return (
      <div className="collection-name">
        {title}
      </div>
    );
  }
}

export default CollectionItem;
