import React from 'react';
import '../components/styles/Alfabetizacion_es.css';
import { Card, Button, Form } from 'react-bootstrap';

function H_Alfa_es() {
    return <div className="contenedor04">
        <h1 className="alfabetizacion_es">Alfabetización</h1>
        <div className="contenedorcito02">
            <p className="espacio_es">Su Progreso</p>

            <div className="Card01">

              
                <Card>
                    <Card.Header>Sus horas realizadas son:  <Button className="suma" variant="outline-primary" href='/Sumar'> <img className="sumar" src="https://e7.pngegg.com/pngimages/216/79/png-clipart-computer-icons-symbol-addition-plus-and-minus-signs-plus-miscellaneous-logo.png" alt=""/> </Button>{' '}   </Card.Header>
                </Card>
                      </div>
                      
            <div className="Card02">
                <Card>
                    <Card.Header>Sus horas restantes son:</Card.Header>
                </Card>
            </div>

            <div className="contenedor005">

                <h1 className="Constitucionales_c">Constitucionales</h1>

                <div className="contenedorcito003">

                    <p className="espacio_c">Su Progreso</p>

                    <div className="Card001">
                        <Card>
                            <Card.Header>Sus horas realizadas son: <Button className="suma" variant="outline-primary" href='/Sumar'> <img className="sumar" src="https://e7.pngegg.com/pngimages/216/79/png-clipart-computer-icons-symbol-addition-plus-and-minus-signs-plus-miscellaneous-logo.png" alt=""/> </Button>{' '}   </Card.Header>
                        </Card>
                    </div>
                    <div className="Card002">
                        <Card>
                            <Card.Header>Sus horas restantes son:</Card.Header>
                        </Card>
                    </div>

                  


                </div>


                <Button className="btn_r_p_es" variant="outline-primary" href='/Proceso_en'>Regresar</Button>{' '}
            </div>


        </div>

    </div>













}
export default H_Alfa_es; 