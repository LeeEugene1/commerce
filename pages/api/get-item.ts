// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const { Client } = require('@notionhq/client')

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})

const databaseId = process.env.DB_ID
// const pageId = process.env.DB_PAGD_ID
const getItem = async () => {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: 'Price',
          direction: 'ascending',
        },
      ],
    })
    console.log('dddd', response)

    return response
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
    const response = await getItem()
    res.status(200).json({ message: response.results })
  } catch (error) {
    res.status(400).json({ message: 'error' })
  }
}
