require('dotenv').config('../.env')
const { Kafka } = require('kafkajs')
const kafka = new Kafka({
    clientId: process.env.clientId,
    brokers: [process.env.kafkaBroker, process.env.kafkaBroker]
})
const producer = kafka.producer();
producer.connect()
function senddata(events) {
    return new Promise(async () => {
        if(events.length){
            await producer.send({
                topic: process.env.topic,
                messages: events,
            })
        }


    })
}

exports.senddata = senddata
