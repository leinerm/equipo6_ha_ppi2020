const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

//conexiòn a mysql
const conexion = mysql.createConnection({
    host: 'blquuwyhye6u7xmtf4yd-mysql.services.clever-cloud.com',
    user:'ust6o8xko4fonhml',
    password: 'q4QCPSk0FpV5j9XA9aiw',
    database: 'blquuwyhye6u7xmtf4yd'
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
    exposedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Accept-Language", "Authorization"],
}));

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
                    response.json({
                        error: true,
                        status: 200,
                        message: 'este documento ya se encuentra en las bases de datos'
                    });
                }
            } else {
                conexion.query('INSERT INTO `horas` (`horas_realizadas_alfa`, `horas_realizadas_const`, `horas_restantes_const`, `horas_restantes_alfa`, `doc`) VALUES (0, 0, 50, 80, ?)', doc, (err, result, field) => {
                    if(err) {
                        console.error(err.message);
                    } else {
                        response.json({
                            error: false,
                            status: 200,
                            message: 'register successful',
                            typeUser: 'student'
                        });
                    }
                });
            }

        })
    }


});

// devolver las horas del estudiante

app.get('/getHours/:doc', function(req, res) {
    const doc = req.params.doc;
    conexion.query("SELECT * FROM horas WHERE doc = ?", doc, (err, result, field) => {
        if(err) {
            console.error(err.message);
        } else {
            res.json({
                message: 'request successful',
                success: true,
                data: result[0]
            });
        }
    });
});

//servicio para sumar las horas
app.put('/putHours', function (req, res) {
    const {hours, date, typeHours, document} = req.body;
    conexion.query("SELECT * FROM horas WHERE doc = ?", document,  (err, result, field) => {
        if(err) {
            console.error(err.message);
        } else {
            const user = result[0];
            if(typeHours === 'alfa') {
                user.horas_realizadas_alfa = user.horas_realizadas_alfa + hours;
                user.horas_restantes_alfa = user.horas_restantes_alfa - hours;
                const update = [user.horas_realizadas_alfa, user.horas_restantes_alfa, date, document];
                conexion.query("UPDATE `horas` SET `horas_realizadas_alfa` = ?, `horas_restantes_alfa` = ?, `fecha` = ? WHERE `doc` = ? ", update, (err, result, field) => {
                    if(err) {
                        console.error(err.message);
                    } else {
                        console.log(result);
                    }
                });
            } else {
                user.horas_realizadas_const = user.horas_realizadas_const + hours;
                user.horas_restantes_const = user.horas_restantes_const - hours;
                const update = [user.horas_realizadas_const, user.horas_restantes_const, date, document];
                conexion.query("UPDATE `horas` SET `horas_realizadas_const` = ?, `horas_restantes_const` = ?, `fecha` = ?  WHERE `doc` = ?", update, (err, result, field) => {
                    if(err) {
                        console.error(err.message);
                    } else {
                        console.log(result);
                    }
                });
            };
        }
    });
});

//servicio para añadir lugares
app.post('/postLugares', function (request, response){
    console.log(request.body);
    const {name, code_lugar, description} = request.body;
    const model_lugares = [code_lugar, name, description];
    console.error(model_lugares);
    conexion.query('INSERT INTO `lugares_disponibles` (`cod_lugar`, `nombre`, `descripcion`) VALUES (?, ?, ?);', model_lugares, (err, result, field) => {
        if(err) {
            console.error(err.message);
        } else {
            response.json({
                message: 'request successful',
                success: true,
            
            });
        }
        
    })
});

// devolver los estudiantes

app.get('/getStudents', function (req, res) {
    conexion.query('SELECT * FROM estudiante', (err, result, field) => {
        if (err) {
            console.error(err.message);
        } else {
            res.json({
                message: 'request successful',
                success: true,
                data: result
            });
        }
    });
});

//servicio para devolver los lugares 
app.get('/getLugares', function (req, res) {
    conexion.query('SELECT * FROM lugares_disponibles', (err, result, field) => {
        if (err) {
            console.error(err.message);
        } else {
            res.json({
                message: 'request successful',
                success: true,
                data: result
            });
        }
    });
});


//servicio de login para encargados
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

//servicio de login para estudiantes
app.post('/loginEs', function(request, response) {
  const {user, password} = request.body
  const model_es = [user, password]
  console.error(user, password); 

  conexion.query('select * from estudiante where usuario = ? and contraseña = ?',model_es ,(err, result, field) => {

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


