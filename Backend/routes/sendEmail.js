const express = require('express')
const nodemailer = require("nodemailer")
const router = express.Router()
const config = require('../config')
const atob = require('atob')

//routes 

router.post('/send', (req, res) => {
    let body = req.body;
    if (body.to && body.subject && body.base64Html) {
        let smtpTransport = nodemailer.createTransport({
            host: config.email.smtp.host,
            port: config.email.smtp.port,
            secure: config.email.smtp.secure, // upgrade later with STARTTLS
            auth: {
                user: config.email.smtp.user,
                pass: config.email.smtp.pass
            }
        });
        let mailOptions = {
            from: "Ambiente Medicamento <"+config.email.smtp.user+">",
            to: body.toName+" <"+body.to+">",
            subject: body.subject,
            html: atob(body.base64Html)
        }
        smtpTransport.sendMail(mailOptions, (error, response) => {
            if (error) {
                res.json({
                    'status': 'ERRO',
                    'statusMotivo': 'Email não enviado!',
                    'resposta': error
                });
            } else {
                res.json({
                    'status': 'OK',
                    'statusMotivo': 'Email enviado!',
                    'resposta': response
                });
            }
        });
    } else {
        res.json({
            'status': 'ERRO',
            'statusMotivo': 'Faltando alguns parametros, email não enviado!'
        });
    }
});

module.exports = router;