import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component{
  //implement rendering toys on page
  // add empty toys array in state that would be updated by fetch request
  state = {
    display: false
  }

  // implement rendering toys on page
  // in componentDidMount fetch data
  // update toys array in state

  // implement increase likes
  // create handleUpdateLikes method
  // receives argument from ToyContainer
  // run fetch to update the toy (by id) likes

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

    // implement creating a new toy
    //create addNewToy method that gets a state as argument from ToyForm
    // pass the new toy details into fetch to save in database

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
            // pass addNewToy to ToyForm component as a variable addNewToy
          <ToyForm/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>

        // implement rendering toys on page
        // receives this.state.toys as a prop and saves on toys var
        // receives handleUpdateLikes as handleUpdateLikes var
        <ToyContainer/>
      </>
    );
  }

}

export default App;
