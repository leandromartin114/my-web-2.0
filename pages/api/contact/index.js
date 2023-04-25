import { sendMessage } from '@/lib/sendgrid'
import { CORSMiddleware } from '@/lib/middlewares'

async function handler(req, res) {
    const data = req.body
    try {
        const msg = await sendMessage(data)
        if (msg === true) {
            res.status(200).send({ message: 'Message sended' })
        }
        res.status(400).send({ message: 'Error in msg' })
    } catch (error) {
        res.status(400).send({ message: error })
    }
}

export default CORSMiddleware(handler)
