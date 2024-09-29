const User = require('../models/User');

const loginUser = async (req, res) => {
    const {username, password} = req.body;
    console.log("Datos recibidos: ", req.body);

    try {
        // buscar un usuario en la base de datos
        const user = await User.findOne({username});
        console.log(user);

        if(!user){
            console.log('Usuario no encontrado');
            return res.status(400).json({message: 'Usuario no encontrado'});
        }

        if (user.password !== password) {
            console.log('Password incorrecto');
            return res.status(400).json({message: 'Credenciales inválidas'});
        }

        //Respuesta de éxito
        console.log('Inicio de sesion exitoso');
        res.json({message: 'Inicio de sesión exitoso'});
    } catch (error) {
        console.log('Error del servidor', error)
        res.status(500).json({message: 'Error en el servidor', error});
    }
};

module.exports = {loginUser};