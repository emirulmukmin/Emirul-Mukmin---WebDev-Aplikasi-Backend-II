const { param, body } = require('express-validator');
const { validator } = require('./validator'); 


const getUserByName  = [
    param('nama').isLength({min: 8}),
    validator
]

const getUserByPhoneEmail = [
    param('telepon').isLength({min: 12}),
    param('email').isEmail(),
    validator
]

const insertUser =  [
    body('nama').isLength({min: 8}),
    body('jenis_kelamin').isIn(['L', 'P']),
    body('angkatan').isNumeric({gt: 2018}),
    body('email').isEmail(),
    body('telepon').isLength({min: 12}),
    body('deskripsi').not().isEmpty(),
    validator
]

const insertBulkUser = [
    body('*.nama').isLength({min: 8}),
    body('*.jenis_kelamin').isIn(['P','L']),
    body('*.angkatan').isNumeric({gt : 2018}),
    body('*.email').isEmail(),
    body('*.telepon').isLength(12),
    body('*.deskripsi').not().isEmpty(),
    validator
]

const deleteUser = [
    body('email').isEmail(),
    validator
]

const updateUser = [
    body('nama').isLength({min: 8}),
    body('telepon').isLength({min: 12}),
    validator
]

module.exports = {
    getUserByName,
    getUserByPhoneEmail,
    insertUser,
    insertBulkUser,
    deleteUser,
    updateUser
}
