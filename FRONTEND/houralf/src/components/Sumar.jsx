import React, {useState} from 'react';
import {Form, Col, Button} from 'react-bootstrap';
import './styles/Sumar.css';
import { useParams } from "react-router-dom";
import axios from 'axios';

function Sumar_h (){

  const {type, doc} = useParams();
  const [model, setModel] = useState({
    hours: '',
    date: '',
    typeHours: type,
    document: doc
  });

  async function postInfo() {
    if(!model.hours || !model.date) {
      alert('Todos los campos son obligatorios');
      return
    } else {
      if(type === 'alfa') {
        if(Number(model.hours) > 5 ) {
          alert('El numero de horas maximas diarias de alfabetizacion es de 5');
          return
        } else {
          const res = await axios.put('http://localhost:5057/putHours', model);
        }
      } else {
        const res = await axios.put('http://localhost:5057/putHours', model);
      }
    }
  }

  return <div className="form_sum">

<Form>
  

  <Form.Group controlId="formGridAddress1">
    <Form.Label>¿cuántas horas vas añadir?</Form.Label>
    <Form.Control name="hours" type="number" placeholder="5" onChange={(e) => setModel({...model, [e.target.name]: Number(e.target.value)})} />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>¿Qué dia se realizarón?</Form.Label>
    <Form.Control name="date" type="date"  onChange={(e) => setModel({...model, [e.target.name]: e.target.value})} />
  </Form.Group>


  <Button className="btn1010" variant="primary" type="button" onClick={() => postInfo()} >
    Confirmar
  </Button>
</Form>

    </div>


}

export default Sumar_h
