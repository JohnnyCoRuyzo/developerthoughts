import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Titular(props){

    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        <div>
                            { props.titulo && <h1 className="display-1 font-weight-bolder">{props.titulo}</h1> }
                            { props.subTitulo && <h3 className="display-4 font-weight-light">{props.subTitulo}</h3> }
                            { props.texto && <h3 className="lead font-weight-light">{props.texto}</h3> }
                        </div>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Titular;