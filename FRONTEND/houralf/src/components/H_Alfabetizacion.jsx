import React from 'react';
import '../components/styles/Alfabetizacion.css';
import { Card, Button } from 'react-bootstrap';

function H_Alfa() {
    return <div id="contenedor4">
        <h1 id="alfabetizacion">alfabetización</h1>
        <div id="contenedorcito2">
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

            <Button id="btnregre2" variant="outline-primary" href='/Principal'>Regresar</Button>{' '}


        </div>



    </div>


}
export default H_Alfa; 