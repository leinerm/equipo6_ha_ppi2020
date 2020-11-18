import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../components/styles/Form.css';

function Formulario() {
  return <div className="contenedor2">

    <p className="ines">Iniciar sesión-Estudiante</p>

    <img className="imgus" src="https://static.vecteezy.com/system/resources/previews/000/574/512/non_2x/vector-sign-of-user-icon.jpg" alt="usuario" />

    <div className="formulario_login">
      <Form >


        <Form.Group controlId="formBasicEmail" >


          <input className="input_form" type="email" placeholder="Usuario" />

        </Form.Group>

        <Form.Group controlId="formBasicPassword">

          <input className="input_form" type="password" placeholder="Contraseña" />
        </Form.Group>
        <Button variant="primary" size="lg" block href='/Principal' >Acceder</Button>

      </Form>
    </div>
    <Button className="btn_r_f" variant="outline-primary" href='/'>Regresar</Button>{' '}
  </div>
}
export default Formulario;
