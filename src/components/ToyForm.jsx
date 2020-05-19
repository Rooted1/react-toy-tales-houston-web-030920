import React, { Component } from 'react';

class ToyForm extends Component {
  state = {
    name: '',
    image: ''
  }

  setName = e => this.setState({name: e.target.value})
  setImage = e => this.setState({image: e.target.value})

  handleSubmit = () => {
    this.props.addNewToy(this.state)
  }

  render() {
    return (
      <div className="container">

        <form className="add-toy-form" onSubmit={this.handleSubmit}>
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text" value={this.state.name} onChange={this.setName}/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" value={this.state.image} onChange={this.setImage}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit" />
        </form>
      </div>
    );
  }

}

export default ToyForm;
