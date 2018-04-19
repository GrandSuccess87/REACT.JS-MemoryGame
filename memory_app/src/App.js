import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Card from './components/card';
// import Wrapper from './components/wrapper';
// import Score from './components/score';
import image from './card.json'


class App extends Component {

  // render() {

    state = {
      image,
      clickedIds: [],
      score: 0,
      maxScore: 9,
      status: ""
    };

// method of shuffling cards

shuffleCard = id => {
  let clickedIds = this.state.clickedIds;

  // if statement for if user clicks the same id - Game Over
  if(clickedIds.includes(id)){
    this.setState({clickedIds: [], score: 0, status: 'Game Over! Click an Image to Play Again'});
    console.log('Game Over!');
    // return;
  } else {
    // otherwise push the id the user clicked to the clickedIds array
     clickedIds.push(id);
  }

  // if the user clicks nine images in a row - User Wins
if(clickedIds === 9){
  this.setState({score: 9, status: 'Congratulations! You Won!! Click an Image to Play Again'});
  console.log('You Win!');  
  console.log('Your score is: ' + clickedIds.length);
  // return;

// Use Durstenfeld shuffle array algorith
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  
for(var i = image.length - 1; i > 0; i--) {
    var q = Math.floor(Math.random() * (i + 1));
    //ES6
    [image[i], image[q]] = [image[q], image[i]];

    // prior to ES6
    // var random = pups[i];
    // pups[i] = pups[q];
    // pups[j] = random;

  }
}}


render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React.Js Memory Game</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  // }
}
}

export default App;
