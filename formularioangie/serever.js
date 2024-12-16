// Importando librerías  
var express = require('express');  
var mysql = require('mysql');  
var cors = require('cors');  
var path = require('path');  
var app = express();  

// Usar librerías  
app.use(express.json());  
app.use(express.static(path.join(__dirname, 'static')));  
app.use(cors());  

// Configuración de la base de datos MySQL  
const db = mysql.createConnection({  
    host: 'database-proyecto.crday04vgglx.us-east-1.rds.amazonaws.com', // Cambia esto por tu endpoint de RDS  
    user: 'admin',                         // Cambia esto por tu usuario de la base de datos  
    password: 'ange61030797',                // Cambia esto por tu contraseña de la base de datos  
    database: 'Formulario'               // Cambia esto por el nombre de tu base de datos  
});  

// Conectar a la base de datos  
db.connect((err) => {  
    if (err) {  
        console.error('Error conectando a la base de datos:', err);  
        return;  
    }  
    console.log('Conectado a la base de datos MySQL en RDS.');  
});  

/* --------------------------- MAIN --------------------------- */  
const port = process.env.PORT || 3000;  
app.listen(port, function () {  
    console.log("Servidor funcionando en el puerto :" + port);  
});  

// Ruta para servir `index.html`  
app.get("/", function (req, res) {  
    res.sendFile(path.join(__dirname, 'index.html'));  
});  

// Ruta para manejar el formulario de contacto  
app.post('/contact', function (req, res) {  
    // Ajustar los nombres de los campos según el formulario HTML  
    const { firstName, lastName, email, message } = req.body; // Cambiar a los nombres correctos de los campos en el formulario  
    
    // Validaciones básicas  
    if (!firstName || !lastName || !email || !message) {  
        return res.status(400).send('Todos los campos son requeridos.');  
    }  
    
    // Consulta para insertar los datos en la base de datos  
    const query = 'INSERT INTO contactos (first_name, last_name, email, message) VALUES (?, ?, ?, ?)';  
    db.query(query, [firstName, lastName, email, message], (err, results) => {  
        if (err) {  
            console.error('Error al insertar datos en la base de datos:', err);  
            return res.status(500).send('Error al guardar los datos en la base de datos.');  
        }  
        res.send('Datos guardados correctamente.');  
    });  
});  