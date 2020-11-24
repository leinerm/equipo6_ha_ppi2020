import React, {useState, useEffect} from 'react';
import swal from 'sweetalert';
import {Button} from 'react-bootstrap';
import '../components/styles/Lugares.css';
import axios from 'axios';

function Apartar_L_en (){

  const [lugares, setLugares] = useState([]);

  async function getLugares() {
    const res = await axios.get('http://localhost:5057/getLugares');
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
               {
                   lugares.map((lugares, index) => (
                       <Button variant="outline-primary" key={index} size="lg" block onClick={()=>mostrarAlerta()} >{lugares.nombre}</Button>
                   ))
               }
           </div>
   <Button className="btn_r_l_es" variant="outline-primary" href='/Principal_en'>Regresar</Button>{' '}
     </div>

</div>
   
    
  </div>
);
}
export default Apartar_L_en;