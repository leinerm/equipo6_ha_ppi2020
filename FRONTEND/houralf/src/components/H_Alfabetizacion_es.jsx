import React, {useState, useEffect} from 'react';
import '../components/styles/Alfabetizacion_es.css';
import { Card, Button, Form } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import axios from 'axios';

function H_Alfa_es() {

    const [hours, setHours] = useState({
        doc: '',
        horas_realizadas_alfa: '',
        horas_realizadas_const: '',
        horas_restantes_alfa: '',
        horas_restantes_const: '',
        total_horas_alfa: '',
        total_horas_const: '',
    });

    const constitucionales = "const";
    const alfabetizacion = "alfa";

    const {doc} = useParams();

    async function getHours() {
        const res = await axios.get(`http://localhost:5057/getHours/${doc}`);
        if(res.data.success && res.data.data) {
            setHours(res.data.data);
        } else {
            alert('Ocurrio un problema');
        }
    }

    useEffect(() => {
        getHours();
    }, [])

    return <div className="contenedor04">
        <h1 className="alfabetizacion_es">Alfabetización</h1>
        <div className="contenedorcito02">
            <p className="espacio_es">Total de horas: {hours.total_horas_alfa} </p>

            <div className="Card01">

              
                <Card>
                    <Card.Header>Sus horas realizadas son: {hours.horas_realizadas_alfa} <Button className="suma" variant="outline-primary" href={'/sumar/'+ alfabetizacion + '/' + doc}> <img className="sumar" src="https://e7.pngegg.com/pngimages/216/79/png-clipart-computer-icons-symbol-addition-plus-and-minus-signs-plus-miscellaneous-logo.png" alt=""/> </Button>{' '}   </Card.Header>
                </Card>
                      </div>
                      
            <div className="Card02">
                <Card>
                    <Card.Header>Sus horas restantes son: {hours.horas_restantes_alfa} </Card.Header>
                </Card>
            </div>

            <div className="contenedor005">

                <h1 className="Constitucionales_c">Constitucionales</h1>

                <div className="contenedorcito003">

                    <p className="espacio_c">Total de horas: {hours.total_horas_const} </p>

                    <div className="Card001">
                        <Card>
                            <Card.Header>Sus horas realizadas son: {hours.horas_realizadas_const} <Button className="suma" variant="outline-primary" href={'/sumar/'+ constitucionales + '/' + doc}> <img className="sumar" src="https://e7.pngegg.com/pngimages/216/79/png-clipart-computer-icons-symbol-addition-plus-and-minus-signs-plus-miscellaneous-logo.png" alt=""/> </Button>{' '}   </Card.Header>
                        </Card>
                    </div>
                    <div className="Card002">
                        <Card>
                            <Card.Header>Sus horas restantes son: {hours.horas_restantes_const} </Card.Header>
                        </Card>
                    </div>

                  


                </div>


                <Button className="btn_r_p_es" variant="outline-primary" href='/Proceso_en'>Regresar</Button>{' '}
            </div>


        </div>

    </div>













}
export default H_Alfa_es; 
