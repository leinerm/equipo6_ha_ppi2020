import React from 'react';
import '../components/styles/Perfil.css';
import { Card, ListGroup, Button } from 'react-bootstrap';

function Mi_Perfil() {

    return <div id="contenedor3">
        <img id="usper" src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile.png" alt="Foto" />
        <div id="contenedorcito">
            <h3>Información Personal</h3>
            <div id="Card">
            <Card>
                <Card.Header>Nombre:</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Documento:</ListGroup.Item>
                    <ListGroup.Item>Tipo de Usuario:</ListGroup.Item>
                    <ListGroup.Item>Contraseña:</ListGroup.Item>
                </ListGroup>
            </Card>
            </div>
            <Button id="btnregre" variant="outline-primary" href='/Principal'>Regresar</Button>{' '}
        </div>

    </div>

}

export default Mi_Perfil;