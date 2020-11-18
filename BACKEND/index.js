const express = require('express');
const app = express();

app.get('/saludo', function(request, response){
    response.json({saludo: "hola mundo", descripcion: "esta es mi descripcion"});
});

app.listen(5057, function(){
    console.log('el servidor se encuentra activo');
});