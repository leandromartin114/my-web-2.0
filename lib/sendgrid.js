import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_APIKEY)

export async function sendMessage(data) {
	const msg = {
		to: 'leandromartin_17@hotmail.com',
		from: 'leandrom.roldan@gmail.com',
		subject: 'New Contact',
		html: `<div style={display: "flex", align-items: "center", justify-items: "center", padding: 20px}>
            <h1>You have a new contact from your website</h1>
            <p><b>Name:</b> ${data.name}</p>
            <p><b>Phone:</b> ${data.phone}</p>
            <p><b>Email:</b> ${data.email}</p>
            <p><b>Message:</b> ${data.message}</p>
        </div>
        `,
	}
	await sgMail.send(msg)
	return true
}
