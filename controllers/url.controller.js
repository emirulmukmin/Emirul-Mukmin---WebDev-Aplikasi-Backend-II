const { urlServices } = require('../services'); 
const { responseHelper } = require('../helper'); 

const getUser = async (req, res) => {
    try {

        const result = await urlServices.getUser();
        if(result instanceof Error) {
            throw new Error(result);
        } 
        res.status(responseHelper.status.success).json(result);
        
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const getUserByName = async (req, res) => {
    try {
        const { nama } = req.params;
        const result = await urlServices.getUserByName(nama);
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const getUserByPhoneEmail = async (req, res) => {
    try {
        const { telepon, email } = req.params;
        const result = await urlServices.getUserByPhoneEmail(telepon, email);
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const insertUser = async (req, res) => {
    try {

        const { nama, jenis_kelamin, angkatan, email, telepon, deskripsi } = req.body;
        const result = await urlServices.insertUser(nama, jenis_kelamin, angkatan, email, telepon, deskripsi);
        if(result instanceof Error) {
            throw new Error(result);
        }
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const insertBulkUser = async (req, res) => {
    try {
        const result = await urlServices.insertBulkUser(JSON.stringify(req.body));

        if (result instanceof Error) {
            throw new Error(result);
        }
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message); 
    }
}
const deleteUser = async (req, res) => {
    try {
        const { email } = req.body;
        const result = await urlServices.deleteUser(email);
        if(result instanceof Error) {
            throw new Error(result);
        }
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const updateUser = async (req, res) => {
    try {
        const { nama, telepon } = req.body;
        const result = await urlServices.updateUser(nama, telepon);
        if(result instanceof Error) {
            throw new Error(result);
        }
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

module.exports = {
    getUser,
    getUserByName,
    getUserByPhoneEmail,
    insertUser,
    insertBulkUser,
    deleteUser,
    updateUser
}