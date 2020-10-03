import React from 'react';
import {Card, Button} from 'react-bootstrap';
import '../components/styles/Constitucionales.css';

function H_Consti(){

    return <div id="contenedor5">

    <h1 id="Constitucionales">Constitucionales</h1>

    <div id="contenedorcito3">

        <p id ="espacio">Tus Progresos</p>
       
        <div id="Card1">
            <Card>
                <Card.Header>Tus horas realizadas son:</Card.Header>
            </Card>
        </div>
        <div id="Card2">
            <Card>
                <Card.Header>Tus horas restantes son:</Card.Header>
            </Card>
        </div>

        <Button id="btnregre3" variant="outline-primary" href='/Principal'>Regresar</Button>{' '}


    </div>



</div>
}

export default H_Consti;