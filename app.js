const express = require('express')
const app = express()
const port = 5001
const model = require('./model/model.js')
require('./model/consumer.js')
const cors = require('cors');
app.use(express.json());
app.use(cors());

app.post('/send/notification', async (req, res, next) => {
    try {
        await model.produceEvents(req,res);
        res.send({success:true})
    } catch (error) {
        res.send({success:false})
    }   

})

app.use(function (err, req, res, next) {
    if (err) {
        res.send({ success: false, reason: 'Internal Server Error' })
    }
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})