import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../components/styles/Form.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Formulario() {

  const history = useHistory();

  const [login, setLogin] = useState({
    user: '',
    password: ''
  })

  async function submit() {
    if (!login.user || !login.password) {
     alert('Todos los campos son obligatorios');
     return;
    }
    const response = await axios.post('http://localhost:5057/loginEs', login);
    
    if(response.data.success && response.data.data){
      const login = {
        ...response.data.data, 
        status: true
      };
      localStorage.setItem('login', JSON.stringify(login));
      history.push('/Principal');
    } else if(!response.data.success && response.data.message === 'user not found') {
      alert('el usuario no existe');
    }
  }

  return <div className="contenedor2">

    <p className="ines">Iniciar sesión-Estudiante</p>

    <img className="imgus" src="https://static.vecteezy.com/system/resources/previews/000/574/512/non_2x/vector-sign-of-user-icon.jpg" alt="usuario" />

    <div className="formulario_login">
      <Form >


        <Form.Group controlId="formBasicEmail" >


          <input name="user" className="input_form" type="text" placeholder="Usuario" onChange={(e) => setLogin({...login, [e.target.name]: e.target.value})}  />

        </Form.Group>

        <Form.Group controlId="formBasicPassword">

          <input name="password" className="input_form" type="password" placeholder="Contraseña" onChange={(e) => setLogin({...login, [e.target.name]: e.target.value})} />
        </Form.Group>
        <Button variant="primary" size="lg" block onClick={() => submit() } >Acceder</Button>
      </Form>
    </div>
    <Button className="btn_r_f" variant="outline-primary" href='/'>Regresar</Button>{' '}
  </div>
}
export default Formulario;
