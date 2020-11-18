import React from 'react';
import '../components/styles/Alfabetizacion.css';
import { Card, Button } from 'react-bootstrap';

function H_Alfa() {
    return <div className="contenedor4">
        <h1 className="alfabetizacion">alfabetización</h1>
        <div className="contenedorcito2">
            <p className="espacio">Tus Progresos</p>
           
            <div className="Card1">
                <Card>
                    <Card.Header>Tus horas realizadas son:</Card.Header>
                </Card>
            </div>
            <div className="Card2">
                <Card>
                    <Card.Header> Tus horas restantes son:</Card.Header>
                </Card>
            </div>

            <Button className="btn_r_a" variant="outline-primary" href='/Principal'>Regresar</Button>{' '}


        </div>



    </div>


}
export default H_Alfa; 