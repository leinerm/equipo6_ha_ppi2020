import React from 'react';
import './App.css';
import './components/Form'
import './pages/Login'
import Login from './pages/Login';
import Login_en from './pages/Login_en';
import Alfabetizacion from './pages/Alfabetizacion';
import Alfabetizacion_es from './pages/Alfabetizacion_es';
import Constitucionales from './pages/Constitucionales';
import My_Profile from './pages/Profile';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Principal from './components/Botones';
import Principal_en from './components/Botones_en';
import Alerta from './pages/prueba';
import Alerta_en from './pages/Prueba_en';
import Seleccionarus from './pages/Inicio';
import My_Profile_en from './pages/Profile_en';
import Estudiantes from './pages/Estudiantes';
import Nuevo_estudiante from './pages/Nuevo_estudiante';
import Sumar_H from './pages/Sumar_H';
import Nuevo_L from './pages/Nuevo_Lugar';


function App() {
  return (
    <Router>
    <Route exact path="/Login" component={Login}/>
    <Route exact path="/Alfabetizacion" component={Alfabetizacion}/>
    <Route exact path="/Alfabetizacion_es" component={Alfabetizacion_es}/>
    <Route exact path="/Constitucionales" component={Constitucionales}/>
    <Route exact path="/Perfil" component={My_Profile}/>
    <Route exact path="/Perfil_en" component={My_Profile_en}/>
    <Route exact path="/Principal" component={Principal}/>
    <Route exact path="/Principal_en" component={Principal_en}/>
    <Route exact path="/Alerta" component={Alerta}/>
    <Route exact path="/Alerta_en" component={Alerta_en}/>
    <Route exact path="/equipo6_ha_ppi2020/" component={Seleccionarus}/>
    <Route exact path="/Login_en" component={Login_en}/>
    <Route exact path="/Proceso_en" component={Estudiantes}/>
    <Route exact path="/Nuevo_us" component={Nuevo_estudiante}/>
    <Route exact path="/Sumar" component={Sumar_H}/>
    <Route exact path="/Nuevo_lugar" component={Nuevo_L}/>
  </Router>
  );
}

export default App;
