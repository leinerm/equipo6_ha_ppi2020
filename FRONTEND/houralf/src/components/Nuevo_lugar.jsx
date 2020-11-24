import React, {useState} from 'react';
import {Form, Col, Button} from 'react-bootstrap';
import './styles/Sumar.css';
import axios from 'axios';


function Nuevo_lugar (){

  const [model_lugares, setModel_lugares] = useState({
    name: '',
    code_lugar: '',
    description: ''
  });

  async function postLugar() {
    console.log(model_lugares);
    if(!model_lugares.name || !model_lugares.description || !model_lugares.code_lugar ) {
      alert('Todos los campos son obligatorios');
    } else {
      console.log(model_lugares);
      const response = await axios.post('http://localhost:5057/postLugares', model_lugares);
      if(response.data.success && response.data.message === "request successful"){
        alert("El lugar se guardo con exito");
        
      }
    }
  }


    return <div className="form_sum">

<Form>
  

  <Form.Group controlId="formGridAddress1">
    <Form.Label>¿Cuál es el nombre del lugar?</Form.Label>
    <Form.Control name="name" placeholder="" onChange={(e) => setModel_lugares({...model_lugares, [e.target.name]: e.target.value})} />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Descripción</Form.Label>
    <Form.Control name="description" as="textarea" placeholder="" onChange={(e) => setModel_lugares({...model_lugares, [e.target.name]: e.target.value})} />
  </Form.Group>

  <Form.Group controlId="formGridAddress3">
    <Form.Label>Codigo del lugar</Form.Label>
    <Form.Control name="code_lugar" type="number" placeholder="" onChange={(e) => setModel_lugares({...model_lugares, [e.target.name]: Number(e.target.value)})} />
  </Form.Group>


  <Button className="btn1010" variant="primary" type="button"   onClick={() => postLugar()}>
    Confirmar
  </Button>
  <Button className="btn_r_a" variant="outline-primary" href='/Alerta_en'>Regresar</Button>{' '}
</Form>

    </div>


}

export default Nuevo_lugar;