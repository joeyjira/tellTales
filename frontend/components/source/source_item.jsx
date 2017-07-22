import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

class SourceItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("FOR IMAGES", this.props)
    const { name, id, url } = this.props;
    // const regExpNew = new RegExp(/(\w)\/\w*/,"$1");
    const imageUrl = url ? url.replace(/(\w)\/\w.*/,"$1") : "";

    return (
      <Link to={`/feed/source/${id}`}>
        <div className="source-item">
          <img src={`http://logo.clearbit.com/${imageUrl}?size=202`} className="logo-image"/>
          <div className="source-name">
            {name}
          </div>
        </div>
      </Link>
    );
  }
}

export default SourceItem;
