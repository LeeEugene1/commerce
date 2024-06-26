// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const { Client } = require('@notionhq/client')

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

const databaseId = process.env.DB_ID

const addItem = async (name: string) => {
  try {
    const response = await notion.pages.create({
      parent: {
        type: 'database_id',
        database_id: databaseId,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
      },
    })
    console.log(response)
  } catch (error) {
    console.error(JSON.stringify(error))
  }
}

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { name } = req.query
  if (name === null) {
    res.status(400).json({ message: 'no name' })
  }
  try {
    await addItem(String(name))
    res.status(200).json({ message: `success! ${name} added` })
  } catch (error) {
    res.status(400).json({ message: 'error' })
  }
}
