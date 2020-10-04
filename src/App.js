import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// eslint-disable-next-line
import fire from './fire';
import * as firebase from 'firebase/app';
import Logo from "./assets/images/Little_Crazy_Pets_Logo.png";

import './App.css';
import './assets/css/theme.css';

import Footer from './components/Footer';
import InicioPage from './pages/InicioPage';
import ConocerPage from './pages/ConocerPage';
import ContactarPage from './pages/ContactarPage';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        titulo: 'Little Crazy Pets',
        headerLinks: [
          {titulo: 'Inicio', ruta: '/'},
          {titulo: 'Contáctanos', ruta: '/contactar'},
          {titulo: 'Conócenos', ruta: '/conocer'}
        ],
        inicio: {
          link: 'Inicio',
          titulo: 'Fundación Little Crazy Pets',
          subTitulo: 'Hogar de paso para peluditos',
          texto: 'Ayuda a estos peluditos a conseguir un hogar'
        },
        contactar:{
          link: 'Adopta',
          titulo: 'Formulario de Adopción'
        },
        conocer:{
          link: 'Conócenos',
          titulo: 'Conoce más...',
          subTitulo: 'Nuestra fundación ayuda a peluditos sin hogar'
        }
    }
  }

  componentDidMount(){

    const db = firebase.firestore();

    const pagina = db.collection('pagina').doc('gXyg5D8dH4oCdnQRwQYP');
    
    pagina.onSnapshot(doc => {
        const data = doc.data();
        console.log(data);
        this.setState(data);
    });
  }

  render(){
    return (
      <Router>
        <Container className="p-0 body-image" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>
            <img className="lcp-logo" src={Logo} alt="Little Crazy Pets Logo"/>
              {this.state.titulo}
            </Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">{this.state.inicio.link}</Link>
                <Link className="nav-link" to="/conocer">{this.state.conocer.link}</Link>
                <Link className="nav-link" to="/contactar">{this.state.contactar.link}</Link>
              </Nav>
              </Navbar.Collapse>
          </Navbar>

          
              <Route path="/" exact render={() => <InicioPage titulo={this.state.inicio.titulo} subTitulo={this.state.inicio.subTitulo} texto={this.state.inicio.texto}/>}></Route>
              <Route path="/conocer" render={() => <ConocerPage titulo={this.state.conocer.titulo} subTitulo={this.state.conocer.subTitulo} />}></Route>
              <Route path="/contactar" render={() => <ContactarPage titulo={this.state.contactar.titulo}/>}></Route>
            
            
              <Footer/>
        </Container>
      </Router>
    );
}
}

export default App;
