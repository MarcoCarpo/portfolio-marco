import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export const transport = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.MY_EMAIL,
		pass: process.env.MY_PASSWORD,
	},
});

export const getMailOptions = (email: string, message: string, name: string): Mail.Options => ({
	from: process.env.MY_EMAIL,
	to: process.env.MY_EMAIL,
	// cc: email, (uncomment this line if you want to send a copy to the sender)
	subject: `Message from ${name} (${email})`,
	text: message,
});

