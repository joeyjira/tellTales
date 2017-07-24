import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

class SourceItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, id, url } = this.props;
    let imageUrl = url ? url.replace(/(\w)\/\w.*/, "$1") : "";
    if (imageUrl === "http://espn.go.com") {
      imageUrl = "http://espn.com"
    }

    return (
      <div>
        <Link to={`/feed/source/${id}`}>
          <div className="source-item">
            <img
              src={`http://logo.clearbit.com/${imageUrl}?size=202`}
              className="logo-image"
            />
            <div className="source-name">
              {name}
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default SourceItem;
