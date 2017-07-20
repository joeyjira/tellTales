import React from 'react';
import { Link } from 'react-router-dom';

import GreetingContainer from '../greeting/greeting_container';

class FeedPage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="entire-show-page">
        <div className="feedbar-container">
          <h1>This is the feedbar-container</h1>
        </div>
        <div className="main-feed">
          <GreetingContainer />
        </div>
      </div>
    );
  }
}

export default FeedPage;
