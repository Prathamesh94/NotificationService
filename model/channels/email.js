require('dotenv').config('../.env')
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.gmailid,
    pass: process.env.gmailpassword
  }
});
function notify(data){
    return new Promise((resolve,reject)=>{
        var mailOptions = {
            from: data.sender,
            to: data.recipient,
            subject: 'Sending Email using Node.js',
            text: data.message
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
              reject(error)
            } else {
                resolve(info.response)
              console.log('Email sent: ' + info.response);
            }
          });

    })
}
exports.notify = notify