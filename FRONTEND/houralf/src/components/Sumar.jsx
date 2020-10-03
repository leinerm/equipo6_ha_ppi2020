import React from 'react';
import {Form, Col, Button} from 'react-bootstrap';
import './styles/Sumar.css';

function Sumar_h (){
    return <div id="form_sum">

<Form>
  

  <Form.Group controlId="formGridAddress1">
    <Form.Label>¿cuántas horas vas añadir?</Form.Label>
    <Form.Control placeholder="5" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>¿Qué dia se realizarón?</Form.Label>
    <Form.Control placeholder="8-10-2020" />
  </Form.Group>


  <Button id="btn1010" variant="primary" type="submit"       href='/Alfabetizacion_es' >
    Confirmar
  </Button>
</Form>

    </div>


}

export default Sumar_h