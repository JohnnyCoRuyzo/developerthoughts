import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';   
import Col from 'react-bootstrap/Col';    


import Titular from '../components/Titular';
import Contenido from '../components/Contenido';

class ContactarPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            motivoDeAdopcion: '',
            nombreMascota: '',
            tipoMascota: 'Perro',
            sexoMascota: 'Hembra',
            tamanoMascota: 'Pequeño',
            edadMascota: 0,

            nombreAdoptante: '',
            cedulaAdoptante: '',
            emailAdoptante: '',
            edadAdoptante: 0,
            mensaje: '',
            deshabilitado: false,
            emailEnviado: null
        }
    }

    handleChange = (event) => {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            deshabilitado: true
        })
    }

    render(){
        return(
            <div>
                <Titular titulo={this.props.titulo}/>
                <Contenido>
                    <Form onSubmit={this.props.handleSubmit}>
                        

                        <Form.Label>
                            <h2><b>MOTIVOS DE ADOPCIÓN</b></h2>
                            <h3>Queremos saber más sobre ti, cuentanos cuales son los motivos que te indican que debes adoptar.</h3>
                        </Form.Label>

                        <Form.Group>
                            <Form.Control as="textarea" rows="3" id="motivoDeAdopcion" name="motivoDeAdopcion" type="text " value={this.state.motivoDeAdopcion} onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Label>
                            <h2><b>DATOS DE LA MASCOTA</b></h2>
                            <h3>Datos de la mascota que desea adoptar, información de como se registra en el hogar de paso.</h3>
                        </Form.Label>
                        
                        <Form.Group>
                            <Form.Label htmlFor="nombreMascota">
                                Nombre de la mascota
                            </Form.Label>
                            <Form.Control as="select" id="nombreMascota" name="nombreMascota" type="text" value={this.state.nombreMascota} onChange={this.handleChange}>
                                <option>Princesa</option>
                                <option>Milagros</option>
                                <option>Negrita</option>
                            </Form.Control>
                        </Form.Group>
                        
                        <Form.Row>
                            <Form.Group as={Col} md="4">
                                <Form.Label as="legend" htmlFor="tipoMascota">
                                    Tipo de mascota
                                </Form.Label>
                                
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    label="Gato"
                                    name="tipoMascota"
                                    id="tipoMascota1"
                                    />
                                    <Form.Check
                                    type="radio"
                                    label="Perro"
                                    name="tipoMascota"
                                    id="tipoMascota2"
                                    />
                                </Col>
                            </Form.Group>
                            
                            <Form.Group as={Col} md="4">
                                <Form.Label as="legend" htmlFor="sexoMascota">
                                    Sexo de la mascota
                                </Form.Label>
                                
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    label="Macho"
                                    name="sexoMascota"
                                    id="sexoMascota1"
                                    />
                                    <Form.Check
                                    type="radio"
                                    label="Hembra"
                                    name="sexoMascota"
                                    id="sexoMascota2"
                                    />
                                </Col>
                            </Form.Group>

                        
                            <Form.Group as={Col} md="4">
                                <Form.Label as="legend" htmlFor="tamanoMascota">
                                    Tamaño de la mascota
                                </Form.Label>
                                
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    label="Pequeño"
                                    name="tamanoMascota"
                                    id="tamanoMascota1"
                                    />
                                    <Form.Check
                                    type="radio"
                                    label="Mediano"
                                    name="tamanoMascota"
                                    id="tamanoMascota2"
                                    />
                                    <Form.Check
                                    type="radio"
                                    label="Grande"
                                    name="tamanoMascota"
                                    id="tamanoMascota2"
                                    />
                                </Col>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group>
                            <Form.Label htmlFor="edadMascota">
                                Edad de la Mascota
                            </Form.Label>
                            <Form.Control id="edadMascota" name="edadMascota" type="number" value={this.state.edadMascota} onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Label>
                            <h2><b>DATOS DEL ADOPTANTE</b></h2>
                            <h3>Datos de la persona que será responsable de la mascota.</h3>
                        </Form.Label>

                        <Form.Group>
                            <Form.Label htmlFor="nombreAdoptante">
                                Nombre Completo del Adoptante
                            </Form.Label>
                            <Form.Control id="nombreAdoptante" name="nombreAdoptante" type="text" value={this.state.nombreAdoptante} onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="cedulaAdoptante">
                                Número de Cédula del Adoptante
                            </Form.Label>
                            <Form.Control id="cedulaAdoptante" name="cedulaAdoptante" type="text" value={this.state.cedulaAdoptante} onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="emailAdoptante">
                                Email del Adoptante
                            </Form.Label>
                            <Form.Control id="emailAdoptante" name="emailAdoptante" type="text" value={this.state.emailAdoptante} onChange={this.handleChange}/>
                        </Form.Group>
                        
                        <Form.Group>
                            <Form.Label htmlFor="edadAdoptante">
                                Edad del Adoptante
                                <p><b>*     Recuerda que debes ser mayor de 23 años.</b></p>
                            </Form.Label>
                            <Form.Control id="edadAdoptante" name="edadAdoptante" type="number" value={this.state.edadAdoptante} onChange={this.handleChange}/>
                        </Form.Group>
                        
                        <Form.Row>
                            <Form.Group as={Col} md="6">
                                <Form.Label htmlFor="fijoAdoptante">
                                    Teléfono fijo del Adoptante
                                </Form.Label>
                                <Form.Control id="fijoAdoptante" name="fijoAdoptante" type="text" value={this.state.fijoAdoptante} onChange={this.handleChange}/>
                            </Form.Group>

                            <Form.Group as={Col} md="6">
                                <Form.Label htmlFor="movilAdoptante">
                                    Teléfono móvil del Adoptante
                                </Form.Label>
                                <Form.Control id="movilAdoptante" name="movilAdoptante" type="text" value={this.state.movilAdoptante} onChange={this.handleChange}/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group>
                            <Form.Label htmlFor="mensaje">
                                Mensaje
                            </Form.Label>
                            <Form.Control id="mensaje" name="mensaje" as="textarea" row="3" value={this.state.mensaje} onChange={this.handleChange}/>
                        </Form.Group>

                        <Button className="d-inline-block" variant="primary" type="submit" disabled={this.props.deshabilitado}>
                            Enviar
                        </Button>

                        {this.state.emailEnviado === true && <p className="d-inline success-msg">Email Enviado</p>}
                        {this.state.emailEnviado === false && <p className="d-inline err-msg">Email No Enviado</p>}
                    </Form>
                </Contenido>
            </div>
        );
    }
}

export default ContactarPage;