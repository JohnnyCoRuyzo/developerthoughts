import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props){

    const style = useSpring({opacity: 1, from: {opacity:0}});

    return(
        <animated className="" style={style}>
            <p className="lcp-card-titulo">{props.titulo}</p>
            <p className="lcp-card-subtitulo">{props.subTitulo}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">Ver más...</a>
        </animated>
    );
}

export default CardInfo;