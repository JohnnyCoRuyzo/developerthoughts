import React from 'react';

import Titular from '../components/Titular';
import Carousel from '../components/Carousel';

function InicioPage(props){

    return(
        <div>
            <Titular titulo={props.titulo} subTitulo={props.subTitulo} texto={props.texto}/>
            <Carousel/>
        </div>
    );
}

export default InicioPage;