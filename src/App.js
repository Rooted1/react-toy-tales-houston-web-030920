import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'

class App extends React.Component{

  state = {
    display: false,
    toys: []
  }

// fetch data from database
componentDidMount() {
  fetch('http://localhost:3000/toys')
  .then(resp => resp.json())
  .then(obj => this.setState({toys: obj}))
}

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  // implement creating new toy
  addNewToy = (toyState) => {
    fetch('http://localhost:3000/toys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: toyState.name,
        image: toyState.image,
        likes: 0
      })
    })
  }

  /// implement deleting toy
  deleteToyFromToys = (toyId) => {
    fetch(`http://localhost:3000/toys/${toyId}`, {
      method: 'DELETE'
    })
    .catch(err => console.error(err))
  }

  // implement increase toy likes
  increaseLikes = (toyState) => {
    fetch(`http://localhost:3000/toys/${toyState.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        likes: toyState.likes + 1
      })
    })
    .catch(err => console.error(err))

  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?

          <ToyForm addNewToy={this.addNewToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>


        <ToyContainer toys={this.state.toys} deleteToyFromToys={this.deleteToyFromToys} increaseLikes={this.increaseLikes}/>
      </>
    );
  }

}

export default App;
