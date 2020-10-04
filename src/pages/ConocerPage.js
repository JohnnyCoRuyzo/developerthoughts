import React from 'react';
import Titular from '../components/Titular';
import Contenido from '../components/Contenido';

function ConocerPage(props){

    return(
        <div>
            <Titular titulo={props.titulo} subTitulo={props.subTitulo}/>

            <Contenido>
                Hola! Bienvenido a Nuestra fundación Little Crazy Pets.
                <br/>
                <br/>
                Aquí nos enfocamos en ayudar a los peluditos más necesitados, dandolés amor, cariño. Teniendo mucha responsabilidad.
            </Contenido>
        </div>
    );  
}

export default ConocerPage;