import React from 'react';

import CardInfo from './CardInfo';

function Card(props){

    return(
        <div className="d-inline-block lcp-card" onClick={(e) => props.click(props.item) }>
            <img className="lcp-card-image" src={props.item.imgSrc} alt={props.item.imgSrc}/>
            {props.item.selected && <CardInfo titulo={props.item.titulo} subTitulo={props.item.subTitulo} link={props.item.link}/> }
        </div>
    )
}

export default Card;