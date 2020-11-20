const express = require('express');
const app = express();
const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'blquuwyhye6u7xmtf4yd-mysql.services.clever-cloud.com',
    user:'ust6o8xko4fonhml',
    password: 'q4QCPSk0FpV5j9XA9aiw',
    database: 'blquuwyhye6u7xmtf4yd'
});

app.get('/saludo', function(request, response){
    response.json({saludo: "hola mundo", descripcion: "esta es mi descripcion"});
});

app.listen(5057, function(){
    console.log('el servidor se encuentra activo');
});

conexion.connect();