import React from 'react';
import swal from 'sweetalert';
import {Button} from 'react-bootstrap';
import '../components/styles/Lugares.css';

function Apartar_L_en (){

const mostrarAlerta=()=>{

swal({
  title: "¿Estas seguro de eliminar este lugar?",
  text:"En este lugar se debe asistir de lunes a viernes en la jornada de la tarde",
  buttons: ["No", "Si"]
}).then(respuesta=>{
  if(respuesta){
    swal({ text:"Solicitud aceptada con exito"})
  }
})
}

return(
  <div className="Apartar_L_en">
 
    <div id="contenedor6">

<h1 id="Lugares">Lugares Disponibles</h1>

<div id="contenedorcito4">

<Button id="lugar" variant="outline-primary" href='/Nuevo_lugar'> <img id="lugar_n" src="https://img.freepik.com/iconos-gratis/suma_318-10811.jpg?size=338&ext=jpg" alt="+"/> </Button>{' '}

   <div id="cont_btn">
    <Button variant="outline-primary" size="lg" block onClick={()=>mostrarAlerta()} >Secretaria</Button>{' '}
    <Button variant="outline-primary" size="lg" block onClick={()=>mostrarAlerta()} >Salon 301</Button>{' '}
    <Button variant="outline-primary" size="lg" block onClick={()=>mostrarAlerta()} >Secretaria</Button>{' '}
    <Button variant="outline-primary" size="lg" block onClick={()=>mostrarAlerta()} >coordinación</Button>{' '}
    <Button variant="outline-primary" size="lg" block onClick={()=>mostrarAlerta()} >rectoría</Button>{' '}
   </div>
   <Button id="btnregre4" variant="outline-primary" href='/Principal_en'>Regresar</Button>{' '}
     </div>

</div>
   
    
  </div>
);
}
export default Apartar_L_en;