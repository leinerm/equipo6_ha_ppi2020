import React from 'react';
import {Form, Col, Button} from 'react-bootstrap';
import './styles/Sumar.css';

function Nuevo_lugar (){
    return <div className="form_sum">

<Form>
  

  <Form.Group controlId="formGridAddress1">
    <Form.Label>¿Cuál es el nombre del lugar?</Form.Label>
    <Form.Control placeholder="" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>¿En qué horario se debe asistir?</Form.Label>
    <Form.Control placeholder="" />
  </Form.Group>


  <Button className="btn1010" variant="primary" type="submit"       href='/Alerta_en' >
    Confirmar
  </Button>
</Form>

    </div>


}

export default Nuevo_lugar;