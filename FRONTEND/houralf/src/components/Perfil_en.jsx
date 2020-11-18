import React from 'react';
import '../components/styles/Perfil.css';
import { Card, ListGroup, Button } from 'react-bootstrap';

function Mi_Perfil_en(){
    return <div className="contenedor3">
    <img className="usper" src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile.png" alt="Foto" />
    <div className="contenedorcito">
        <h3 className="texto_i_p">Información Personal</h3>
        <div className="Card">
        <Card>
            <Card.Header>Nombre:</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>Documento:</ListGroup.Item>
                <ListGroup.Item>Tipo de Usuario:</ListGroup.Item>
                <ListGroup.Item>Contraseña:</ListGroup.Item>
            </ListGroup>
        </Card>
        </div>
        <Button className="btn_r_p" variant="outline-primary" href='/Principal_en'>Regresar</Button>{' '}
    </div>

</div>

}
export default Mi_Perfil_en;