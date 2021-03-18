const expect = require('chai').expect;
const model = require('./model/model.js')
const req = {
    "scheduled_time": "2021-01-01 14:00:45",
    "message": "Hello  user4!",
    "channel": "SMS",
    "recipient": "7977099688",
    "sender": ""
}
describe("Testing Notification Service", () => {
    it("Fetch Users", async () => {
        const a =await model.sendNotification(req)
        console.log(a)
        expect(await model.sendNotification(req)).to.be.equal(true);
    });
    it("Fetch Friends", async () => {
        expect(await model.sendNotification(req)).to.be.equal(true);
    });
})