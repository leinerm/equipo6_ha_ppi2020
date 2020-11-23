import React, {useState, useEffect} from 'react';
import swal from 'sweetalert';
import {Button} from 'react-bootstrap';
import '../components/styles/Proceso.css';
import axios from 'axios';


function Proceso_es (){

    const [students, setStudents] = useState([]);

   async function getStudent() {
       const res = await axios.get('http://localhost:5057/getStudents');
       if(res.data.success && res.data.data) {
           setStudents(res.data.data);
       } else {
           alert('ocurrio un problema');
       }
   };

    useEffect(() => {
        getStudent();
    }, []);
    
        return(
          <div className="Apartar_L">
         
            <div className="contenedor_p">
        
        <h1 className="Listado">Lista de estudiantes</h1>
        
        <div className="contenedorcito_p">
        
            <p className ="estudiantes">Estudiantes</p>
        
           <div className="btn_p">
               {
                   students.map((student, index) => (
                       <Button variant="outline-primary" key={index} size="lg" block href={'/Alfabetizacion_es/' + student.documento} >{student.nombre}</Button>
                   ))
               }
           </div>
           <Button className="btn_r_p" variant="outline-primary" href='/Principal_en'>Regresar</Button>{' '}
             </div>
        
        </div>
           
            
          </div>
        );
}  
  
export default Proceso_es;
