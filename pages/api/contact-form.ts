import { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

const { SEND_GRID_API_KEY, SEND_GRID_EMAIL} = process.env
// TODO
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const {name, email, subject, message } = req.body

    if (!SEND_GRID_API_KEY || !SEND_GRID_EMAIL) {
        return res.status(500).json({message: 'Error: No API KEY or EMAIL'})
    }

    sgMail.setApiKey(SEND_GRID_API_KEY)

    const html = `
    <h2>${name}</h2>
    <h4>${email}</h4>
    <h4>${subject}</h4>
    <p>${message}</p>
  `

  const msg = {
    to: SEND_GRID_EMAIL,
    from: SEND_GRID_EMAIL!,
    subject: `Contact form - Coding With Nico: ${subject}`,
    html: html,
  }

  try {
      await sgMail.send(msg)

      return res.status(200).json({message: 'Email sent!'})
  } catch (err) {
    return res.status(500).json({message: `Error: ${err}`})
  }
}