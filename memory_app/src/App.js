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

shufflePupCards = id => {
  console.log('click');
  let clickedIds = this.state.clickedIds;
   // Set this.state.friends equal to the new friends array
  //  this.setState({ pups });
   
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
        score: this.state.score + 1, 
        status: 'Congratulations! You Won!! Click an Image to Play Again'
      });
      console.log('You Win!');  
      // return;
  }

      this.setState({pups, clickedIds, score: clickedIds.length, status:" "})

  // Use Durstenfeld shuffle array algorithm
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// this.setState({ pups, clickedPuppyIds, score: clickedPuppyIds.length, status: " " });

    for(let p = pups.length - 1; p > 0; p--) {
      let q = Math.floor(Math.random() * (p + 1));
      // ES6
      [pups[p], pups[q]] = [pups[q], pups[p]];

    // prior to ES6
    // let random = pups[i];
    // pups[i] = pups[q];
    // pups[j] = random;


    } 
  }  
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
            shufflePupCards={this.shufflePupCards}
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
