require('dotenv').config('../../.env')
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: process.env.dbhost,
    user: process.env.dbuser,
    password: process.env.dbpassword,
    database: process.env.dbname
});
function events(first_name, last_name, user_id, avatar_file_path) {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO users(first_name,last_name,user_id,avatar_file_path) VALUES('${first_name}','${last_name}','${user_id}','${avatar_file_path}')`, function (error, results, fields) {
            if (error) reject(error);
            resolve(results)
        });
    })
}