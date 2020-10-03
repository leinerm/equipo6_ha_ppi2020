import React from 'react';
import '../components/styles/Alfabetizacion_es.css';
import { Card, Button, Form } from 'react-bootstrap';

function H_Alfa_es() {
    return <div id="contenedor04">
        <h1 id="alfabetizacion_es">alfabetización</h1>
        <div id="contenedorcito02">
            <p id="espacio_es">Tus Progresos</p>

            <div id="Card01">

              
                <Card>
                    <Card.Header>Sus horas realizadas son:  <Button id="suma" variant="outline-primary" href='/Sumar'> <img id="sumar" src="https://e7.pngegg.com/pngimages/216/79/png-clipart-computer-icons-symbol-addition-plus-and-minus-signs-plus-miscellaneous-logo.png" alt=""/> </Button>{' '}   </Card.Header>
                </Card>
                      </div>
                      
            <div id="Card02">
                <Card>
                    <Card.Header>Sus horas restantes son:</Card.Header>
                </Card>
            </div>

            <div id="contenedor005">

                <h1 id="Constitucionales_c">Constitucionales</h1>

                <div id="contenedorcito003">

                    <p id="espacio_c">Tus Progresos</p>

                    <div id="Card001">
                        <Card>
                            <Card.Header>Sus horas realizadas son: <Button id="suma" variant="outline-primary" href='/Sumar'> <img id="sumar" src="https://e7.pngegg.com/pngimages/216/79/png-clipart-computer-icons-symbol-addition-plus-and-minus-signs-plus-miscellaneous-logo.png" alt=""/> </Button>{' '}   </Card.Header>
                        </Card>
                    </div>
                    <div id="Card002">
                        <Card>
                            <Card.Header>Sus horas restantes son:</Card.Header>
                        </Card>
                    </div>

                    <Button id="btnregre003" variant="outline-primary" href='/Proceso_en'>Regresar</Button>{' '}


                </div>



            </div>


        </div>

    </div>













}
export default H_Alfa_es; 