import React from 'react';
import swal from 'sweetalert';
import {Button} from 'react-bootstrap';
import '../components/styles/Lugares.css';

function Apartar_L (){

const mostrarAlerta=()=>{

swal({
  title: "¿Estas seguro de apartar este lugar?",
  text:"En este lugar se debe asistir de lunes a viernes en la jornada de la tarde",
  buttons: ["No", "Si"]
}).then(respuesta=>{
  if(respuesta){
    swal({ text:"Solicitud aceptada con exito"})
  }
})
}

return(
  <div className="Apartar_L">
 
    <div className="contenedor6">

<h1 className="Lugares">Lugares Disponibles</h1>

<div className="contenedorcito4">

    <p className ="lugar">Lugares</p>

   <div className="btn_l_es">
    <Button variant="outline-primary" size="lg" block onClick={()=>mostrarAlerta()} ><span>Secretaria</span></Button>{' '}
    <Button variant="outline-primary" size="lg" block onClick={()=>mostrarAlerta()} ><span>salón 301</span></Button>{' '}
    <Button variant="outline-primary" size="lg" block onClick={()=>mostrarAlerta()} ><span>Biblioteca</span></Button>{' '}
    <Button variant="outline-primary" size="lg" block onClick={()=>mostrarAlerta()} ><span>Coordinación</span></Button>{' '}
    <Button variant="outline-primary" size="lg" block onClick={()=>mostrarAlerta()} ><span>Rectoría</span></Button>{' '}
   </div>
   <Button className="btn_r_l_es" variant="outline-primary" href='/Principal'>Regresar</Button>{' '}
     </div>

</div>
   
    
  </div>
);
}
export default Apartar_L;
