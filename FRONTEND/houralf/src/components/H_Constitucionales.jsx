import React from 'react';
import {Card, Button} from 'react-bootstrap';
import '../components/styles/Constitucionales.css';

function H_Consti(){

    return <div className="contenedor5">

    <h1 className="Constitucionales">Constitucionales</h1>

    <div className="contenedorcito3">

        <p className ="espacio">Tu Progreso</p>
       
        <div className="Card1">
            <Card>
                <Card.Header>Tus horas realizadas son:</Card.Header>
            </Card>
        </div>
        <div className="Card2">
            <Card>
                <Card.Header>Tus horas restantes son:</Card.Header>
            </Card>
        </div>

        <Button className="btn_r_c" variant="outline-primary" href='/Principal'>Regresar</Button>{' '}


    </div>



</div>
}

export default H_Consti;