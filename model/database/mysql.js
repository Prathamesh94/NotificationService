require('dotenv').config('../../.env')
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: process.env.dbhost,
    user: process.env.dbuser,
    password: process.env.dbpassword,
    database: process.env.dbname
});
function fetchEvents() {
    return new Promise((resolve, reject) => {
        var dateTime = require('node-datetime');
        var dt = dateTime.create();
        dt.offsetInHours(-0.06);
        var formatted = dt.format('Y-m-d H:M:S');
        console.log(`select * from notification where scheduled_time < '${formatted}'`)
        connection.query(`select * from notification where scheduled_time < '${formatted}'`, function (error, results, fields) {
            if (error) reject(error);
            console.log(results)
            resolve(results)
        });
    })
}
function insertEvent(event_message,scheduled_time){
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO notification (event_message,scheduled_time) values('${event_message}','${scheduled_time}')`, function (error, results, fields) {
            if (error) reject(error);
            resolve(results)
        });
    })

}
exports.insertEvent = insertEvent
exports.fetchEvents = fetchEvents