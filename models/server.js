const express = require('express')
const { dbConection } = require('../database/config')

class Server{
    
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.usuarioPath = '/usuario'//Ruta de la API
        this.usuarioPath = '/roles' //Ruta de la API
        this.usuarioPath = '/permisos' //Ruta de la API
        this.usuarioPath = '/beneficiarios' //Ruta de la API
        this.routes()
        this.conectarDB()
    }

    listen(){
        this.app.listen(
         this.port, () => {
            console.log('Escuchando por el puerto'+this.port)
         }
        )
    }

    routes(){
        this.app.use(this.usuarioPath, require('../routes/usuario'))
        this.app.use(this.usuarioPath, require('../routes/rol'))
        this.app.use(this.usuarioPath, require('../routes/permisos'))
        this.app.use(this.usuarioPath, require('../routes/beneficiario'))

    }

    conectarDB(){
        dbConection()
    }
}

module.exports = {Server} //Exportación de la clase

