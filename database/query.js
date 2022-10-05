const databaseConfig = require('./config'); 

const query = (queryText, param) => {
    return new Promise((resolve, reject) => {
        databaseConfig.query(queryText, param)
        .then((res) => {
            resolve(res);
        })
        .catch((err) => {
            reject(err);
        })
    })
}

module.exports = query;