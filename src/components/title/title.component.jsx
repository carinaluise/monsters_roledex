import React from 'react';
import './title.styles.css';

export const Title = (props) => {
    return <div>
        <h1 className="title">{props.title}</h1>
    </div>
}