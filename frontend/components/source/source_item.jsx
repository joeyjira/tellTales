import React from "react";
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

class SourceItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      const { name } = this.props
    return (
        <div className="source-item">
            { name }
        </div>
    );
  }
}

export default SourceItem;
