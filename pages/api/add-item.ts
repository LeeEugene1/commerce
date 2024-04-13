// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const { Client } = require('@notionhq/client')

// Initializing a client
const notion = new Client({
  auth: 'secret_GVSGKVqg6U6G6ifWKE3ZvrKuzv5XcOOoY0eZPr3NWSi',
})

const databaseId = '70112d0ee5ad4f16b0ed5c1cda47fe48'

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
  try {
    await addItem(String(name))
    res.status(200).json({ message: 'success' })
  } catch (error) {
    res.status(400).json({ message: 'error' })
  }
}
