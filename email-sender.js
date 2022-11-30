var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bensalemabdelhafidh.go@gmail.com ',
    pass: '12234'
  }
});

var mailOptions = {
  from: '*******',
  to: '*******',
  subject: 'Sending Email using Node.js',
  text: 'Hello Guys!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});