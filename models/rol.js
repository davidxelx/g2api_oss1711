const {Schema, model } = require('mongoose')

const RolSchema = ({
    nombre:{
        type: String,
        unique:true,
        required:[true, 'El nombre del Rol es requirido']
    },

    descripcion:{
        type:String,
        required:[true, 'La descripcion es requerida'],
        min:[5, 'La descripcion debe contener mínimo 5 caracteres'],
        max:[15, 'El password debe contener máximo 15 caracteres']
    },

    // permisos: {
    //     type:String,
    //     required:[true, 'al menos un permisos es requerido'],
    //     enum:['Listar','Crear','Editar','Eliminar','Anular','Exportar'],
    // },

    estado: {
        type:Boolean,
        default:true
    }
})

module.exports = model('Rol', RolSchema)