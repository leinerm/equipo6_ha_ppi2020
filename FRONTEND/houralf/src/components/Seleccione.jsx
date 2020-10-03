import React from 'react';
import './styles/Seleccione.css';
import {Button} from 'react-bootstrap';


function Seleccionar (){
    return <div id="contenedor8">

<p id="tipous">Seleccione el tipo de usuario</p>

<div id="contbtn">
<Button id="btnus" variant="outline-primary" size="lg" block href='/Login' >Estudiante</Button>{' '}
<Button id="btnen" variant="outline-primary" size="lg" block href='/Login_en' >Encargado</Button>{' '}
</div>

    </div>
}
export default Seleccionar; 