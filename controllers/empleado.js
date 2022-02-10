const { request, response } = require('express');
const { dbConnection } = require('../database/config');

const createEmpleado = (req = request, res = response) => {
    const { nombre } = req.body;

    const connection = dbConnection;

    connection.query(
        'INSERT INTO empleado SET ?',
        {
            nombre
        },
        (err, result) => {
            res.json({
                result
            });
        }
    );

}

module.exports = {
    createEmpleado
}