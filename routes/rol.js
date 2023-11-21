const {Router} = require('express')

const route = Router()

//Listar todos los datos
const {getRol, postRol, putRol, deleteRol} = require('../controllers/rol') //Importando el controlador

route.get('/', getRol)

route.post('/', postRol)

route.put('/', putRol)

route.delete('/', deleteRol)

module.exports = route