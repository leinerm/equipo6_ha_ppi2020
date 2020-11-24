import React, {useEffect, useState} from 'react';
import '../components/styles/Perfil.css';
import { Card, ListGroup, Button } from 'react-bootstrap';
import axios from 'axios';

function Mi_Perfil() {

    const [data, setData] = useState({
        name: '',
        doc: '',
        type_user: ''
    });
    
    async function getInfoStudent() {
        const response = await axios.get('http://localhost:5057/getStudent');
        if(response.data.status === 200 && response.data.data) {
            setData(response.data.data);
        } else {
            alert('ocurrio un error');
        }
    };

    useEffect(()=> {
        getInfoStudent();
    },[]);
    
    return <div className="contenedor3">
        <img className="usper" src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile.png" alt="Foto" />
        <div className="contenedorcito">
            <h3 className="texto_i_p">Información Personal</h3>
            <div className="Card">
            <Card>
                <Card.Header>Nombre: {data.name}</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Documento: {data.doc} </ListGroup.Item>
                    <ListGroup.Item>Tipo de Usuario: {data.type_user}</ListGroup.Item>
                </ListGroup>
            </Card>
            </div>
            <Button className="btn_r_p" variant="outline-primary" href='/Principal'>Regresar</Button>{' '}
        </div>

    </div>

}

export default Mi_Perfil;