import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

class SourceItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, id } = this.props;

    return (
      <Link to={`/feed/source/${id}`}>
        <div className="source-item">
          {name}
        </div>
      </Link>
    );
  }
}

export default SourceItem;
