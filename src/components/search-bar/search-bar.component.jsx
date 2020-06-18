import React from 'react';
import './search-bar.styles.css';

export const SearchBar = (props) => {

    return( <div >
    <input 
        className="search-bar"
        type="search" 
        placeholder="search monsters" 
        onChange={props.handleChange}
    />
    </div>
    ) 
}
