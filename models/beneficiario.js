const {Schema, model } = require('mongoose')

const BeneficiarioSchema = ({
    nombre:{
        type: String,
        unique:true,
        required:[true, 'El nombre del beneficiario es requirido']
    },

    apellido:{
        type: String,
        unique:true,
        required:[true, 'El apellido del beneficiario es requirido']
    },

    descripcion:{
        type:String,
        required:[true, 'La descripcion es requerida'],
        min:[5, 'La descripcion debe contener mínimo 5 caracteres'],
        max:[15, 'El password debe contener máximo 15 caracteres']
    },


    estado: {
        type:Boolean,
        default:true
    }
})

module.exports = model('Beneficiario', BeneficiarioSchema)