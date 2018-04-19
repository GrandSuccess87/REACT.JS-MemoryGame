import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import Card from './components/Card';
import Wrapper from './components/Wrapper';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';
import pups from './card.json'


class App extends Component {

    state = {
      status: "Click an Image to begin!",
      pups:pups,
      clickedIds: [],
      score: 0,
      topScore: 0,
    };

    componentDidMount () {

    }
// method of shuffling cards

shuffleCardArray = id => {
  let clickedIds = this.state.clickedIds;

// Use Durstenfeld shuffle array algorith
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

for(var i = pups.length - 1; i > 0; i--) {
  var q = Math.floor(Math.random() * (i + 1));
  //ES6
  [pups[i], pups[q]] = [pups[q], pups[i]];

  // prior to ES6
  // var random = pups[i];
  // pups[i] = pups[q];
  // pups[j] = random;

}

  // if statement for if user clicks the same id - Game Over
  if(clickedIds.includes(id)){
    this.setState({
      status: 'You guessed Incorrectly, Game Over! Click an Image to Play Again',      
      pups:pups,
      clickedIds: [], 
      topScore: this.state.score > this.state.topScore ? this.state.score : this.state.topScore,
      score: 0,       
    });
    
      console.log('Game Over!');
    // return;
  } else {
    // otherwise push the id the user clicked to the clickedIds array
     clickedIds.push(id);
     this.shuffleCardArray(pups);
     
  }

  // if the user clicks nine images in a row - User Wins
if(clickedIds === 9){
  this.setState({pups: pups, score: this.state.score + 1, status: 'Congratulations! You Won!! Click an Image to Play Again'});
  console.log('You Win!');  
  console.log('Your score is: ' + clickedIds.length);
  // return;

}}


render () {
    return (
      <div>
      <Title/>
      <Header count = {this.state.score} topScore = {this.state.topScore}/>
      <Jumbotron >
      </Jumbotron>
      <Wrapper>
        {this.state.pups.map((pups, i) => (
          <Card
            onClickHandler={this.onClickHandler}
            id={pups.id}
            key={pups.id}
            image={pups.image}
          />
        ))}
      </Wrapper>
      <Footer />
    </div>
  );
}
}

export default App;
