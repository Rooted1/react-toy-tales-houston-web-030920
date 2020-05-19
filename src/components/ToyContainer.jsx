import React from 'react';
import ToyCard from './ToyCard'

// receives props
const ToyContainer = () => {

  // implement deleting toy from toys
  // create handleDelete method
  // receives toy details as argument
  // two things:
    // either do a fetch here to delete toy details from database
    // or send toy details to App to delete from database

  // implement increase likes
  // create handleLikes method
  // receives this.props.state from ToyCard
  // pass state as an argument into handleUpdateLikes in App.js

  return(
    <div id="toy-collection">
    //implement rendering toys on page
    // map over props.toys
    // render each toy in ToyCard component on page

    // implement deleting toy
    // pass this.handleDelete method to ToyCard as handleDelete var

    // pass this.handleLikes to handleLikes var
      {/* Render the collection of ToyCards */}
    </div>
  );
}

export default ToyContainer;
