import React from 'react';
import { Link, HashRouter } from 'react-router-dom';

class FeedItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const {name, description} = this.props;
    return (
      <li className="feed-source-list">
          {name} 
      </li>
    );
  }
}

export default FeedItem;