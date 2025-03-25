require("dotenv").config();

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
    const { name, email, tel, message } = req.body;

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER, 
            pass: process.env.EMAIL_PASS 
        }
    });

    let mailOptions = {
        from: email,
        to: process.env.EMAIL_USER, 
        subject: "Novo contato do site",
        text: `Nome: ${name}\nE-mail: ${email}\nTelefone: ${tel}\nMensagem:\n${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send("E-mail enviado com sucesso!");
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao enviar o e-mail.");
    }
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000 🚀"));
