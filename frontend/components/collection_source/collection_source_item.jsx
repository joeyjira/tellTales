import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

class CollectionSourceItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
         <Link to={`/feed/source/${this.props.sourceId}`}> 
          {this.props.sourceId}
         </Link> 
      </div>
    );
  }
}

export default CollectionSourceItem;
