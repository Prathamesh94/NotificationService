//https://blog.pragmatists.com/retrying-consumer-architecture-in-the-apache-kafka-939ac4cb851a
/**
 * If Notification fails again publish event for retry
 * 
 */
const { Kafka } = require('kafkajs')

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092', 'localhost:9092']
})
const consumer = kafka.consumer({ groupId: 'test-group' });
(async () =>{
await consumer.connect()
await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })

await consumer.run({
  eachMessage: async ({ topic, partition, message }) => {
    console.log({
      value: message.value.toString(),
    })
  },
})
})()