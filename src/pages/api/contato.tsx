import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
        user: 'helenita.lannes.salles@gmail.com',
        pass: 'efkrpnvpofkxmhzy',
    },
});
//@ts-ignore
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Method not allowed' });
        return;
    }

    const { feedback } = req.body;

    try {
        const mailOptions = {
            from: process.env.SMTP_FROM,
            to: 'helena.lannes.salles@hotmail.com',
            subject: 'Mensagem Code',
            text: `Mensagem:\n\n${feedback}`,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'Feedback enviado!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
