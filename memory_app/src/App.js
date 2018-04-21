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
      //set status to empty string
      status: "",
      pups,
      clickedIds: [],
      score: 0,
      topScore: 0,
    };

    componentDidMount () {
      this.shufflePupCards(pups);
    }

// method of shuffling cards

shufflePupCards = () => {
  console.log('click');
  

// Use Durstenfeld shuffle array algorithm
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

for(let p = pups.length - 1; p > 0; p--) {
  let q = Math.floor(Math.random() * (p + 1));
  // ES6
  [pups[p], pups[q]] = [pups[q], pups[p]];

} 
}
 
onClickCardHandler = id => {
  let clickedIds = this.state.clickedIds;
  // if statement for if user clicks the same id - Game Over -- okay to use if statement here since outside of render method
  if(clickedIds.includes(id)){
    this.setState({
      clickedIds: [],
      score: 0, 
      status: 'You guessed Incorrectly, Game Over! Click an Image to Play Again',      
      
    });
    
      console.log('Game Over!');
    // return;
  } else {
    // otherwise push the id the user clicked to the clickedIds array
     clickedIds.push(id);
    //  this.shuffleCardArray(pups);
       
      // if the user clicks nine images in a row without double clicking on an image - User Wins
    if(clickedIds === 9){
      this.setState({
        clickedIds: [], 
        score: 0, 
        status: 'Congratulations! You Won!! Click an Image to Play Again'
      });
      console.log('You Win!');  
      // return;
  }

      this.setState({pups, clickedIds, score: clickedIds.length, topScore: this.state.score > this.state.topScore ? this.state.score : this.state.topScore, status:" "})
 
  }  
    this.shufflePupCards();
}

render () {
    return (
      <div className="gameContainer">
      <Title/>
      <Header score = {this.state.score} topScore = {this.state.topScore} status = {this.state.status}/>
      <Jumbotron/>
      <Wrapper>
        {this.state.pups.map((pups, i) => (
          <Card
          onClickCardHandler={this.onClickCardHandler}
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
