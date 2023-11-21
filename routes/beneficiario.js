const {Router} = require('express')

const route = Router()

//Listar todos los datos
const {getBeneficiario, postBeneficiario, putBeneficiario, deleteBeneficiario} = require('../controllers/beneficiario') //Importando el controlador

route.get('/', getBeneficiario)

route.post('/', postBeneficiario)

route.put('/', putBeneficiario)

route.delete('/', deleteBeneficiario)

module.exports = route