import React, {useState} from 'react';
import {Button, Form, Col}  from 'react-bootstrap';
import './styles/Nuevo_es.css';
import swal from 'sweetalert';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function Nuevo_es(){

    const [status, setStatus] = useState(JSON.parse(localStorage.getItem('login')));
    console.log(status);
    const history = useHistory();

    const [model, setModel] = useState({
        user: '',
        name: '',
        doc: '',
        password: '',
        typeUser: ''
    });

    function back() {
      if(!status) {
        history.push('/Login_en')
      }else  if(status.status && status.cargo === 'master') {
      history.push('/Principal_en')
    }
    }

    const createAccount = async () => {
        if(!model.user || !model.name || !model.doc || !model.password || !model.typeUser) {
            swal({
                title: "Todos los campos son obligatorios"
            })
        } else {
            const response = await axios.post('http://localhost:5057/newRegister', model);
                if(response.data.status === 200 && response.data.message === 'register successful') {
                    mostrarAlertae();
                    setTimeout(() => {history.push('/Login_en')}, 2000)
                } else if(response.data.message === 'este documento ya se encuentra en las bases de datos') {
                    swal({
                        title: "el documento ya se encuentra en nuestras bases de datos",
                    })
                } else if (response.data.message ==='el documento no existe en las bases de datos de maestros'){
                    swal({
                        title: "el documento no existe en las bases de datos de maestros",
                    })
                }

        }
    };

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
      <Form.Control name="user" onChange={(e) => setModel({...model, [e.target.name]: e.target.value})} type="text" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label> <span>Contraseña</span> </Form.Label>
      <Form.Control name="password" onChange={(e) => setModel({...model, [e.target.name]: e.target.value})} type="password"  />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label> <span>Documento</span> </Form.Label>
    <Form.Control type="number" name="doc" onChange={(e) => setModel({...model, [e.target.name]: e.target.value})} />
  </Form.Group>

  <Form.Group controlId="formGridAddress1">
    <Form.Label> <span>Nombre</span> </Form.Label>
    <Form.Control name="name" onChange={(e) => setModel({...model, [e.target.name]: e.target.value})} type="text" />
  </Form.Group>

  <Form.Row>
  <Form.Group  as={Col} controlId="formGridState">
      <Form.Label> <span>Tipo de usuario</span> </Form.Label>
      <Form.Control name="typeUser" onChange={(e) => setModel({...model, [e.target.name]: e.target.value})} as="select" defaultValue="none" >
          <option value="none">Seleccione...</option>
          <option value="master">Encargado</option>
          <option value="student">Estudiante</option>
      </Form.Control>
    </Form.Group>

  </Form.Row>


  <Button id="btncc" variant="primary" type="button"  size="lg" block onClick={() => createAccount()} >

  Crear cuenta
  </Button>
</Form>
        
        </div>
        <Button id="btnregreus" variant="outline-primary" onClick={() => back() } >Regresar</Button>{' '}
    </div>

</div>
}

export default Nuevo_es;
