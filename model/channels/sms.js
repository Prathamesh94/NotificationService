require('dotenv').config('../.env')
function notify(data) {
    return new Promise((resolve, reject) => {
        const accountSid = process.env.TWILIO_ACCOUNT_SID;
        const authToken = process.env.TWILIO_AUTH_TOKEN;
        const client = require('twilio')(accountSid, authToken);

        client.messages
            .create({
                body: data.message,
                from: data.sender,
                to: data.recipient
            })
            .then(message => console.log(message.sid)).catch(error => {
                reject(error)

            });
        resolve(message.sid)

    })
}
exports.notify = notify