import React, {useState, useEffect} from 'react';
import {Card, Button, Form} from 'react-bootstrap';
import '../components/styles/Constitucionales.css';
import { useParams } from "react-router-dom";
import axios from 'axios';

function H_Consti(){

    const [hours, setHours] = useState({
        doc: '',
        horas_realizadas_const: '',
        horas_restantes_const: '',
        total_horas_const: '',
    });

    const alfabetizacion = "alfa";

    const {doc} = useParams();

    async function getHours() {
        const res = await axios.get(`http://localhost:5057/getHoursEsConst/${doc}`);
        if(res.data.success && res.data.data) {
            setHours(res.data.data);
        } else {
            alert('Ocurrio un problema');
        }
    }

    useEffect(() => {
        getHours();
    }, [])

    return <div className="contenedor5">

    <h1 className="Constitucionales">Constitucionales</h1>

    <div className="contenedorcito3">

        <p className ="espacio">Total de horas: {hours.total_horas_const}</p>
       
        <div className="Card1">
            <Card>
                <Card.Header>Tus horas realizadas son:{hours.horas_realizadas_const}</Card.Header>
            </Card>
        </div>
        <div className="Card2">
            <Card>
                <Card.Header>Tus horas restantes son:{hours.horas_restantes_const}</Card.Header>
            </Card>
        </div>

        <Button className="btn_r_c" variant="outline-primary" href='/Principal'>Regresar</Button>{' '}


    </div>



</div>
}

export default H_Consti;