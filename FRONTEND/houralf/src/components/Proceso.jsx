import React from 'react';
import swal from 'sweetalert';
import {Button} from 'react-bootstrap';


function Proceso_es (){
    
        return(
          <div className="Apartar_L">
         
            <div id="contenedor6">
        
        <h1 id="Lugares">Lista de estudiantes</h1>
        
        <div id="contenedorcito4">
        
            <p id ="lugar">Estudiantes</p>
        
           <div id="cont_btn">
            <Button variant="outline-primary" size="lg" block href='/Alfabetizacion_es' >Juan Montoya</Button>{' '}
            <Button variant="outline-primary" size="lg" block href='/Alfabetizacion_es' >Jorge Hernández</Button>{' '}
            <Button variant="outline-primary" size="lg" block href='/Alfabetizacion_es' >Cristian Manjarrés</Button>{' '}
            <Button variant="outline-primary" size="lg" block href='/Alfabetizacion_es' >Jorge Muñoz</Button>{' '}
            <Button variant="outline-primary" size="lg" block href='/Alfabetizacion_es' >Sergio Mosquera</Button>{' '}
           </div>
           <Button id="btnregre4" variant="outline-primary" href='/Principal_en'>Regresar</Button>{' '}
             </div>
        
        </div>
           
            
          </div>
        );
}  
  
export default Proceso_es;