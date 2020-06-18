import React from 'react';
import './card.styles.css';

export const Card = (props) => {

    return (<div className="card-container">
    <h1>{props.name}</h1>
    <h3>{props.email}</h3>
    <img alt={props.alt} src={props.src} ></img>
    </div>
    )
}

