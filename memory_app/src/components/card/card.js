import React from 'react';
import './card.css'

const pupCard = props => (
    <div className="card">
        <div className="img-container">
            <img className="clickImage" 
            alt={props.name} 
            src={props.image} 
            onClick={() => props.onClickHandler(props.id)} />
        </div>
    </div>

);


export default pupCard;
