const schedule = require('node-schedule');
const producers = require('./producer')
const db = require('./database/mysql')
schedule.scheduleJob('* * * * *', async function(){
  const events = await db.fetchEvents
  await producers.senddata(events);
  });