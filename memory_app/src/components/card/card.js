import React from 'react';
import './card.css'

const Card = props => (
    <div className="card img-container hover">
        <div className="card-container">
            <img className="clickImage shuffleCard" 

            alt={props.name} 
            src={props.image} 
            id={props.id}
            key={props.id}
            onClick={() => props.shufflePupCards(props.id)} />
        </div>
    </div>

// {/* <div className="card img-container hover">
// {/* <img alt={props.name} src={props.image} id={props.id} */}
//   onClick={() => props.shuffleScoreCard(props.id)} className='shuffleScore'/>
// </div> */}

);


export default Card;
