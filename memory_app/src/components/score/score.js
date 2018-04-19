import React from 'react';
// import './score.css'

const Score = props => (

<div className="gameScore">
    <h3 className="userScore">Your Score{props.total}</h3>
    <h3 className="userStatus">Top Score{props.Score}</h3>
</div>
);


export default Score;
