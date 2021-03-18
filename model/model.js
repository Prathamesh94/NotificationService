//https://blog.pragmatists.com/retrying-consumer-architecture-in-the-apache-kafka-939ac4cb851a
const whatsapp = require('./channels/whatsapp')
const sms = require('./channels/sms')
const email = require('./channels/email')
const producer = require('./producer')
function sendNotification(data) {
    return new Promise(async (resolve, reject) => {
        try {
            if (data.channel = 'sms') {
                await sms.notify(data)
                resolve(true)
            } else if (data.channel = 'email') {
                await email.notify(data)
                resolve(true)
            } else if (data.channel = 'whatsapp') {
                await whatsapp.notify(data)
                resolve(true)
            }
        } catch (error) {
            reject(false)
        }

    })

}
exports.sendNotification = sendNotification