import React from 'react';
import swal from 'sweetalert';
import {Button} from 'react-bootstrap';
import '../components/styles/Proceso.css';


function Proceso_es (){
    
        return(
          <div className="Apartar_L">
         
            <div className="contenedor_p">
        
        <h1 className="Listado">Lista de estudiantes</h1>
        
        <div className="contenedorcito_p">
        
            <p className ="estudiantes">Estudiantes</p>
        
           <div className="btn_p">
            <Button variant="outline-primary" size="lg" block href='/Alfabetizacion_es' >Juan Montoya</Button>{' '}
            <Button variant="outline-primary" size="lg" block href='/Alfabetizacion_es' >Jorge Hernández</Button>{' '}
            <Button variant="outline-primary" size="lg" block href='/Alfabetizacion_es' >Cristian Manjarrés</Button>{' '}
            <Button variant="outline-primary" size="lg" block href='/Alfabetizacion_es' >Jorge Muñoz</Button>{' '}
            <Button variant="outline-primary" size="lg" block href='/Alfabetizacion_es' >Sergio Mosquera</Button>{' '}
           </div>
           <Button className="btn_r_p" variant="outline-primary" href='/Principal_en'>Regresar</Button>{' '}
             </div>
        
        </div>
           
            
          </div>
        );
}  
  
export default Proceso_es;