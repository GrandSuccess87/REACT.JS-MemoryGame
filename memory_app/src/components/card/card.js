import React from 'react';
import './card.css'

const Card = props => (
    <div className="card">
        <div className="img-container">
            <img 

            alt={props.name} 
            src={props.image} 
            id={props.id}
            key={props.id}
            onClick={() => props.onClickCardHandler(props.id)} />
        </div>
    </div>


);


export default Card;