import React from 'react';
import { Link } from 'react-router-dom';

import GreetingContainer from '../greeting/greeting_container';

class FeedPage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <GreetingContainer />
        <div className="entire-show-page">
          <h1>hello</h1>
        </div>
      </div>
    );
  }
}

export default FeedPage;
