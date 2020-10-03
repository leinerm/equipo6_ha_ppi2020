import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../components/styles/Form.css';

function Formulario_en (){
    return <div id="contenedor2">

    <p id="ines">Iniciar sesión-Encargado</p>

    <img id="imgus" src="https://e7.pngegg.com/pngimages/536/90/png-clipart-black-logo-computer-icons-user-profile-login-avatar-description-heroes-monochrome-thumbnail.png" alt="usuario" />

    <div id="formulario_login">
      <Form >


        <Form.Group controlId="formBasicEmail" >


          <Form.Control type="email" placeholder="Usuario" />

        </Form.Group>

        <Form.Group controlId="formBasicPassword">

          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>
        <Button variant="primary" size="lg" block href='/Principal_en' >Acceder</Button>

      </Form>
    </div>
    <Button id="btnregre6" variant="outline-primary" href='/'>Regresar</Button>{' '}
  </div>
}
export default Formulario_en
