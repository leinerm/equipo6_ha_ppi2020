const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');

//conexiòn a mysql
const conexion = mysql.createConnection({
    host: 'blquuwyhye6u7xmtf4yd-mysql.services.clever-cloud.com',
    user:'ust6o8xko4fonhml',
    password: 'q4QCPSk0FpV5j9XA9aiw',
    database: 'blquuwyhye6u7xmtf4yd'
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 5057;
const model_master = {
    name: 'Jairo mendoza',
    doc: '10000879769',
    type_user: 'master'
};

//servicio para obtener informacion del maestro

app.get('/getMaster', function(request, response){
    response.send({
        error: false,
        status: 200,
        data: model_master
    });
    return
});

//servicio para registrar usuario

app.post('/newRegister', function(request, response){
    const {user, name, doc, password, typeUser} = request.body;
    const newRegister = [doc, name, typeUser, user, password];
    if(typeUser === 'master') {
        conexion.query('SELECT * FROM validateDoc WHERE doc = ?', doc, (err, result, field) => {
            if(err) {
                return console.error(err.message, 'ff')
            }
            if(result.length >= 1) {
                conexion.query('INSERT INTO `encargado` (`documento`, `nombre`, `cargo`, `usuario`, `contraseña`) VALUES (?, ?, ?, ?, ?)', newRegister, (err, result, field) => {
                    if(err) {
                        console.error(err.message);
                        if(err.message === "ER_DUP_ENTRY: Duplicate entry '"+doc+"' for key 'PRIMARY'"){
                            response.send({
                                error: true,
                                status: 200,
                                message: 'este documento ya se encuentra en las bases de datos'
                            });
                        }
                    } else {
                        response.send({
                            error: false,
                            status: 200,
                            message: 'register successful'
                        });
                    }

                })
            } else {
                response.send({
                    error: true,
                    status: 200,
                    message: 'el documento no existe en las bases de datos de maestros'
                });
            }
        });
    } else {
        conexion.query('INSERT INTO `estudiante` (`documento`, `nombre`, `cargo`, `usuario`, `contraseña`) VALUES (?, ?, ?, ?, ?)', newRegister, (err, result, field) => {
            if(err) {
                 console.error(err.message);
                if(err.message === "ER_DUP_ENTRY: Duplicate entry '"+doc+"' for key 'PRIMARY'"){
                    response.send({
                        error: true,
                        status: 200,
                        message: 'este documento ya se encuentra en las bases de datos'
                    });
                }
            } else {
                response.send({
                    error: false,
                    status: 200,
                    message: 'register successful'
                });
            }

        })
    }


})


//servicio de login para encargado
app.post('/loginEn', function(request, response){
    const {user, password} = request.body;
    const model = [user, password]
    console.error(user, password);
    conexion.query('select * from encargado where usuario = ? and contraseña = ?',model ,(err, result, field) => {

        if(err) {
            console.error(err.message);
        } else {
            if(result.length > 0 ) {
                   response.json({
                    message: 'request successful',
                    success: true,
                    data: result[0]
                });
            } else {
                response.json({
                    message: 'user not found',
                    success: false,
                });
            }
        }
    });
});

//ponemos a correr el servidor 
app.listen(port, function(){
    console.log('el servidor se encuentra activo');
});

//metodo para conectarse a la base de datos
conexion.connect(function (err) {
    if(err) {
        console.error(err);
        return;
    } else {
        console.log('base de datos conectada');
    }
});

