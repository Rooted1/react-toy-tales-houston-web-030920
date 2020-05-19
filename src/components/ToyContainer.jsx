import React, { Component }  from 'react';
import ToyCard from './ToyCard'


class ToyContainer extends Component {

  // grab current toy likes
  handleLikeIncrease = (toyState) => {
    this.props.increaseLikes(toyState)
  }

  // grab id of current toy
  deleteToy = (toyId) => {
    this.props.deleteToyFromToys(toyId)
  }

  render(){
    return(
      <div id="toy-collection">

      {this.props.toys.map(toy => (
        <ToyCard key={toy.id} toy={toy} handleLikeIncrease={this.handleLikeIncrease} deleteToy={this.deleteToy}/>
      ))}
      </div>
    );
  }
}

export default ToyContainer;
