const { databaseQuery } = require('../database'); 

const getUser = async () => {
    try {
        const query = `SELECT * FROM praktikan_webdev`;
        const result = await databaseQuery(query);
        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error;
    }
}

const getUserByName = async (nama) => {
    try {
        const query = `SELECT * FROM praktikan_webdev WHERE nama = $1`;
        const result = await databaseQuery(query, [nama]);

        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error
    }
}
const getUserByPhoneEmail = async (telepon, email) => {
    try {
        const query = `SELECT * FROM praktikan_webdev WHERE telepon = $1 and email = $2`;
        const result = await databaseQuery(query, [telepon, email]);

        return {
            count: result.rowCount,
            rows: result.rows,
        };
    } catch (error) {
        return error
    }
}

const insertUser = async (nama, jenis_kelamin, angkatan, email, telepon, deskripsi) => {
    try {
        const query = `INSERT INTO praktikan_webdev VALUES ($1, $2, $3, $4, $5, $6)`;
        const result = await databaseQuery(query, [nama, jenis_kelamin, angkatan, email, telepon, deskripsi] );

        if (!result) {
            throw new Error('Error inserting User!');
        }
        return {
            message: 'User inserted successfully!',
        }; 
    } catch (error) {
        return error 
    }
}
const insertBulkUser = async (params) => {
    try {
        let arrayUserList = []
        JSON.parse(params,(a,b) => {arrayUserList.push(b)})
        for (let a = 0; a < (arrayUserList.length-1)/7; a++){
            const query = `INSERT INTO praktikan_webdev values ('${arrayUserList[a*7]}', '${arrayUserList[(a*7)+1]}',
                          '${arrayUserList[(a*7)+2]}', '${arrayUserList[(a*7)+3]}', '${arrayUserList[(a*7)+4]}',
                          '${arrayUserList[(a*7)+5]}')`;

            const result = await databaseQuery(query);

            if (!result) {
                throw new Error('Error Inserting Bulk Users!');
            }
            if (result.rowCount === 0){
                throw new Error('URL Not Found!');
            }
        }
        return {
            message: 'Users Inserted Successfully!'
        }
    } catch (error) {
        return error
    }
}
const deleteUser = async (email) => {
    try {
        const query = `DELETE FROM praktikan_webdev WHERE email = $1`;
        const result = await databaseQuery(query, [email]);

        if (!result) {
            throw new Error('Error deleting User!');
        }
        if (result.rowCount === 0) {
            throw new Error('Email not found!');
        }
        return {
            message: 'User deleted successfully!',
        }; 
    } catch (error) {
        return error
    }
}

const updateUser = async (nama, telepon) => {
    try {
        const query = `UPDATE praktikan_webdev SET telepon=$2 WHERE nama=$1`;
        const result = await databaseQuery(query, [nama, telepon]);

        if (!result) {
            throw new Error('Error updating User\'s Telephone!');
        }
        if (result.rowCount === 0) {
            throw new Error('Email not found!');
        }
        return {
            message: 'Telephone updated successfully!',
        };
    } catch (error) {
        return error
    }
}

module.exports =  {
    getUser,
    getUserByName,
    getUserByPhoneEmail,
    insertUser,
    insertBulkUser,
    deleteUser,
    updateUser
}