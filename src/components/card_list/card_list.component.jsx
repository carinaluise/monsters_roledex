import React from 'react';
import './card_list.styles.css';
import {Card} from '../card/card.component';


export const CardList = (props) => {

    return(
    <div className="card-list">
        {props.data.map(data => 
          <Card  
            key={data.id} 
            name={data.name}
            email={data.email}
            alt="monster"
            src={`https://robohash.org/${data.id}?set=set1`}
          >
          </Card>
        )}
    </div>
    )
}
