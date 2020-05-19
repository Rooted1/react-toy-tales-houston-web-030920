import React, { Component } from 'react';

class ToyForm extends Component {
  // implement creating a new toy
  // create state variable that would hold the new toy details
  // set the properties (name, imgUrl) in state to empty string

  // create handleSubmit method
  // pass in this.props.addNewToy that receives state as an argument

  render() {
    return (
      <div className="container">
        // create onSubmit event that listens for when user clicks submit
        // this event receives this.handleSubmit method
        <form className="add-toy-form">
          <h3>Create a toy!</h3>
          // pass this.state.name into value
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text"/>
          <br/>
          //pass this.state.imgUrl into value
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
