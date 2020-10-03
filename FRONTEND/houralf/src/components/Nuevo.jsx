import React from 'react';
import {Button, Form, Col}  from 'react-bootstrap';
import './styles/Nuevo.css';
import swal from 'sweetalert';

function Nuevo_es(){

  const mostrarAlertae=()=>{

    swal({
      title: "Cuenta creada con exito",
      button: ["Regresar"]
    })
  }

    return <div id="contenedor3">
    <img id="uspe" src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile.png" alt="Foto" />
    <div id="contenedorcito">
        <h3>Registro</h3>
        <div id="Form_nuevo">

        <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Usuario</Form.Label>
      <Form.Control type="email" placeholder="" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Contraseña</Form.Label>
      <Form.Control type="password" placeholder="" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Nombre</Form.Label>
    <Form.Control placeholder="" />
  </Form.Group>

  <Form.Row>
  <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Tipo de usuario</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Encargado</option>
        <option>Estudiante</option>
      </Form.Control>
    </Form.Group>

  </Form.Row>


  <Button id="btncc" variant="primary" type="submit"  size="lg" block onClick={()=>mostrarAlertae()} > 

  Crear cuenta
  </Button>
</Form>
        
        </div>
        <Button id="btnregreus" variant="outline-primary" href='/Principal_en'>Regresar</Button>{' '}
    </div>

</div>
}

export default Nuevo_es;
