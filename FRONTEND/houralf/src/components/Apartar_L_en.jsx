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
 
    <div className="contenedor6">

<h1 className="Lugares">Lugares Disponibles</h1>

<div className="contenedorcito4">

<Button className="lugar" variant="outline-primary" href='/Nuevo_lugar'> <img className="lugar_n" src="https://img.freepik.com/iconos-gratis/suma_318-10811.jpg?size=338&ext=jpg" alt="+"/> </Button>{' '}

   <div className="btn_l_es">
    <Button variant="outline-primary" size="lg" block onClick={()=>mostrarAlerta()} ><span>Secretaria</span></Button>{' '}
    <Button variant="outline-primary" size="lg" block onClick={()=>mostrarAlerta()} ><span>Salón 301</span></Button>{' '}
    <Button variant="outline-primary" size="lg" block onClick={()=>mostrarAlerta()} ><span>Biblioteca</span></Button>{' '}
    <Button variant="outline-primary" size="lg" block onClick={()=>mostrarAlerta()} ><span>Coordinació</span></Button>{' '}
    <Button variant="outline-primary" size="lg" block onClick={()=>mostrarAlerta()} ><span>Rectoría</span></Button>{' '}
   </div>
   <Button className="btn_r_l_es" variant="outline-primary" href='/Principal_en'>Regresar</Button>{' '}
     </div>

</div>
   
    
  </div>
);
}
export default Apartar_L_en;