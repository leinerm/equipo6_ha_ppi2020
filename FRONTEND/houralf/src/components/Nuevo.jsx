import React from 'react';
import {Button, Form, Col}  from 'react-bootstrap';
import './styles/Nuevo_es.css';
import swal from 'sweetalert';

function Nuevo_es(){

  const mostrarAlertae=()=>{

    swal({
      title: "Cuenta creada con exito",
      button: ["Regresar"]
    })
  }

    return <div className="contenedor23">
    <img className="uspe_n" src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile.png" alt="Foto" />
    <div className="contenedorcito23">
        <h3 className="texto_r">Registro</h3>
        <div className="Form_nuevo">

        <Form >
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label> <span>Usuario</span> </Form.Label>
      <Form.Control type="email" placeholder="" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label> <span>Contraseña</span> </Form.Label>
      <Form.Control type="password" placeholder="" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label> <span>Documento</span> </Form.Label>
    <Form.Control placeholder="" />
  </Form.Group>

  <Form.Group controlId="formGridAddress1">
    <Form.Label> <span>Nombre</span> </Form.Label>
    <Form.Control placeholder="" />
  </Form.Group>

  <Form.Row>
  <Form.Group as={Col} controlId="formGridState">
      <Form.Label> <span>Tipo de usuario</span> </Form.Label>
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
