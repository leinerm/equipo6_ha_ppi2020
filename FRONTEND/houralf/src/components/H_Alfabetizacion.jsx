import React, {useState, useEffect} from 'react';
import '../components/styles/Alfabetizacion.css';
import { Card, Button, Form } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import axios from 'axios';

function H_Alfa() {

    const [hours, setHours] = useState({
        doc: '',
        horas_realizadas_alfa: '',
        horas_restantes_alfa: '',
        total_horas_alfa: '',
    });

    const alfabetizacion = "alfa";

    const {doc} = useParams();

    async function getHours() {
        const res = await axios.get(`http://localhost:5057/getHoursEs/${doc}`);
        if(res.data.success && res.data.data) {
            setHours(res.data.data);
        } else {
            alert('Ocurrio un problema');
        }
    }

    useEffect(() => {
        getHours();
    }, [])


    return <div className="contenedor4">
        <h1 className="alfabetizacion">alfabetización</h1>
        <div className="contenedorcito2">
            <p className="espacio">Total de horas: {hours.total_horas_alfa}</p>
           
            <div className="Card1">
                <Card>
                    <Card.Header>Tus horas realizadas son:{hours.horas_realizadas_alfa}</Card.Header>
                </Card>
            </div>
            <div className="Card2">
                <Card>
                    <Card.Header> Tus horas restantes son:{hours.horas_restantes_alfa}</Card.Header>
                </Card>
            </div>

            <Button className="btn_r_a" variant="outline-primary" href='/Principal'>Regresar</Button>{' '}


        </div>



    </div>


}
export default H_Alfa; 