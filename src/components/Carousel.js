import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import NovaImagen from "../assets/images/NovaImagen.jpg";
import MilaImagen from "../assets/images/MilaImagen.jpg";
import NegritaImagen from "../assets/images/NegritaImagen.jpg";

import Card from './Card';

class Carousel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items:[
                {
                    id:0,
                    titulo: 'Nova',
                    subTitulo:'Adoptada!',
                    imgSrc: NovaImagen,
                    link: 'https://www.google.com', //Instagram de Nova
                    selected: false
                },
                {
                    id:1,
                    titulo: 'Mila',
                    subTitulo:'Adoptada!',
                    imgSrc: MilaImagen,
                    link: 'https://www.google.com', //Instagram de Mila
                    selected: false
                },
                {
                    id:2,
                    titulo: 'Negrita',
                    subTitulo:'En Adopción!',
                    imgSrc: NegritaImagen,
                    link: 'https://www.google.com', //Instagram de Abbie
                    selected: false
                }

            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}  />
        })
    }

    render(){
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;