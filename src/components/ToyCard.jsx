import React, { Component } from 'react';

class ToyCard extends Component {

  state = {
    id: this.props.toy.id,
    likes: this .props.toy.likes
  }
  setLikes = () => this.setState({likes: this.state.likes + 1})

  // get toy id and likes
  handleLikes = () => {
    this.setLikes()
    this.props.handleLikeIncrease(this.state)
  }

  // get toy id
  handleDelete = () => {
    this.props.deleteToy(this.state.id)
  }

  render() {
    return (

      <div className="card">
        <h2>{this.props.toy.name}</h2>


        <img src={this.props.toy.image} alt={'alt-text'} className="toy-avatar" />


        <p>{this.state.likes} Likes </p>


        <button className="like-btn" onClick={this.handleLikes}>Like {'<3'}</button>

        <button className="del-btn" onClick={this.handleDelete}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
