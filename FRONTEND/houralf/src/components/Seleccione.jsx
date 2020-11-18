import React from 'react';
import './styles/Seleccione.css';
import {Button} from 'react-bootstrap';


function Seleccionar (){
    return (
        <div className="container_main" >
            <h1 className="titulo">Houralf</h1>

            <div id="contenedor8">

            <p id="tipous">Seleccione el tipo de usuario</p>

            <div id="contbtn">
            <Button id="btnus" variant="outline-primary" size="lg" block href='/Login' > <span>Estudiante</span></Button>{' '}
            <Button id="btnen" variant="outline-primary" size="lg" block href='/Login_en' > <span>Encargado</span></Button>{' '}
            </div>

                </div>
        </div>
    )
}
export default Seleccionar; 