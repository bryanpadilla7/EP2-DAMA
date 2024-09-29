const express = require('express');
const mongoos = require('mongoose');
const dotenv = require('dotenv');

const loginRoutes = require('./routes/loginRoutes');

dotenv.config();

const app = express();
app.use(express.json());

//Conexión a mongoDb
mongoos.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Conectado a MongoDb');        
    })
    .catch((error) => {
        console.log('error al conectar a MongoDb', error);
    });

    app.use('/api', loginRoutes);
    
    app.listen(5000, () => {
        console.log('Servidor ejecutandose en el puerto 5000');
    });