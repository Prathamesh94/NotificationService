//https://blog.pragmatists.com/retrying-consumer-architecture-in-the-apache-kafka-939ac4cb851a
/**
 * If Notification fails again publish event for retry
 * 
 */
require('dotenv').config('../.env')
const { Kafka } = require('kafkajs')
const model = require('./model')
const db = require('./database/mysql')
const kafka = new Kafka({
  clientId: process.env.clientId,
  brokers: [process.env.kafkaBroker, process.env.kafkaBroker]
})
const consumer = kafka.consumer({ groupId: process.env.consumer_group });
(async () => {
  await consumer.connect()
  await consumer.subscribe({ topic: process.env.topic, fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value.toString(),
      })
      console.log(message)
      try {
        await model.sendNotification(message)
      }
      catch (error) {//retry mechanism
        await db.insertEvent(message)
      }
    },
  })
})()