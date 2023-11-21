const {response} = require('express')

const Rol = require('../models/rol')

const getRol = async(req, res) => {

    const roles = await Rol.find(); //Obtener todos los documentos de una colección
    res.json({
        msg: roles
    })
}

const postRol = async(req, res) => {
    const datos = req.query //Capturar datos de la url-postman
    let mensaje = 'Inserción exitosa'
    try {
        const rol = new Rol(datos) //Instanciar el objeto
        await rol.save() //Guardar en la base de dato
        console.log(rol)
    } catch (error) {
        mensaje = error
        console.log(error)
    }
    res.json({
        msg: mensaje
    })
}

const putRol = async(req, res) => {
    const { nombre, descripcion, estado } = req.query //Desesctructurar
    let mensaje = ''
    try {
        const rol = await Rol.findOneAndUpdate({nombre: nombre},
        {descripcion:descripcion, estado:estado})
        mensaje = 'Actualización exitosa'
    } catch (error) {
        mensaje = error
    }   
    res.json({
        msg:mensaje
    })
}

const deleteRol = async(req, res) => {
    const { nombre } = req.query //Desesctructurar
    let mensaje = ''
    try {
        const rol = await Rol.findOneAndDelete({nombre: nombre})
        mensaje = 'Eliminación exitosa'
    } catch (error) {
        mensaje = error
    }   
    res.json({
        msg:mensaje
    })
}


module.exports = {
    getRol,
    postRol,
    putRol,
    deleteRol
}
