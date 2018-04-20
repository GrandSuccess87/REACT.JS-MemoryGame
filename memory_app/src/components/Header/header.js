import React from 'react';
import './header.css'

const Header = props => (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-primary fixed top">   
    <div className="gameScore">
        {/* <h4 className="userScore navbar-brand"></h4> */}
        <h4 className="userStatus nav-link-right">Your Score: <span>{props.score}</span> | Top Score: {props.topScore} | <span> {props.status}</span></h4>
    </div>
    </nav>
);


// {/* <div className="App">
        // <header className="App-header">
        //   {/* <img src={logo} className="App-logo" alt="logo" /> */}
        //   {/* <h1 className="App-title">Welcome to React.Js Memory Game</h1> */}
        // </header>
        // <p className="App-intro">
        //   To get started, edit <code>src/App.js</code> and save to reload.
        // </p>
    //   </div> */}

export default Header;
