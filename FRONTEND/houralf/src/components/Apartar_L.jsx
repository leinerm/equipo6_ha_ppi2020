import React, {useState, useEffect} from 'react';
import swal from 'sweetalert';
import {Button} from 'react-bootstrap';
import '../components/styles/Lugares.css';
import axios from 'axios';

function Apartar_L (){

  const [lugares, setLugares] = useState([]);

  async function getLugares() {
    const res = await axios.get('http://localhost:5057/getLugaresEs');
    if(res.data.success && res.data.data) {
        setLugares(res.data.data);
    } else {
        alert('ocurrio un problema');
    }
};

useEffect(() => {
  getLugares();
}, []);



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
               {
                   lugares.map((lugares, index) => (
                       <Button variant="outline-primary" key={index} size="lg" block onClick={()=>mostrarAlerta()} >{lugares.nombre}</Button>
                   ))
               }
           </div>
   <Button className="btn_r_l_es" variant="outline-primary" href='/Principal'>Regresar</Button>{' '}
     </div>

</div>

    
  </div>
);
}
export default Apartar_L;
