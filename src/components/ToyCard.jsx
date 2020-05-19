import React, { Component } from 'react';

class ToyCard extends Component {
  // create a state varaible to hold toy likes
  // set props and values
  // {
      //likes: this.props.toy.likes
    //}

  // implement increasing Likes
  // create handlelikes method
  // update state to change likes by one when button is clicked
  // grab state and pass as an argument into handleLikes()

  // implement deleting toy
  // create handleClick method
  // pass this.props.handleDelete that takes this.props.toy as argument

  render() {
    return (
      //implement rendering toys on page
      // renders this.props.toy.name
      <div className="card">
        <h2>{'' /* Toy's Name */}</h2>

        //receives this.props.toy.image
        <img src={'' /* Toy's Image */} alt={/* Toy's Name */} className="toy-avatar" />

        // implement increisng likes
        // receives this.state.likes
        <p>{'' /* Toy's Likes */} Likes </p>

        // implement increase likes
        <button className="like-btn">Like {'<3'}</button>

        // implement deleting toy from page
        // create onClick event that receives handleClick method
        <button className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
