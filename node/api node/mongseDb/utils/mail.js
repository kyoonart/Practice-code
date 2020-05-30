"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: "smtp.qq.com", //发送方邮箱 qq
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: "1564328778@qq.com", // generated ethereal user
        pass: "vvmatqypkytlfeda", // generated ethereal password  smt验证码
    },
});

function send(mail, code) {
    let mailObj = {
        from: '"Fred Foo 👻" <1564328778@qq.com>', // sender address
        to: mail, // list of receivers
        subject: "Hello ✔", // Subject line
        text: `您的验证码是${code},有效期5分钟`, // plain text body
        // html: "<b>Hello world?</b>", // html body
    };
    return new Promise((resolve, reject) => {
        transporter.sendMail(mailObj, (err, data) => {
            if (err) {
                reject();
            } else {
                resolve();
            }
            console.log(err);
            console.log(data);
        })
    })

}
module.exports = { send }