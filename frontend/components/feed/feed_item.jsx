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
      <div className="feed-source-item">
          {name} 
      </div>
    );
  }
}

export default FeedItem;