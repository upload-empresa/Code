import nodemailer from 'nodemailer'
import { NextApiRequest, NextApiResponse } from 'next'

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
        user: 'helenita.lannes.salles@gmail.com',
        pass: 'twdgfmdgelvejfen'
    }
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Metodo nao permitido' })
        return
    }

    const { message, name, email, number, lastname } = req.body
    try {
        const mailOptions = {
            from: process.env.SMTP_FROM,
            to: 'helena.lannes.salles@hotmail.com',
            subject: 'Mensagem Code',
            text: `Mensagem: ${message}, Nome: ${name}, Email: ${email}, Numero: ${number}, Sobrenome: ${lastname}`
        }
        await transporter.sendMail(mailOptions)
        res.status(200).json({ message: 'Mensagem enviada com sucesso!' })
    } catch (error) {
        res.status(500).json({ message: 'Algo deu errado' })
    }

}