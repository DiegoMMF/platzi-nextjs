import { IncomingMessage, ServerResponse } from 'http'
import DB from '@database'

const allAvos = async (req: IncomingMessage, res: ServerResponse) => {
    const db = new DB()
    const allEntries = await db.getAll()
    const length = allEntries.length
    // lo que sigue debería estar dentro de un catch pero no hace falta ahora
    // porque estamos usando dummy data
    res.statusCode = 200
    res.setHeader('content-type', 'application/json')
    res.end(JSON.stringify({ length, data: allEntries }))
}

export default allAvos

/* 
"api/.../index.ts" del ejemplo oficial de Next para TypeScript:

import { NextApiRequest, NextApiResponse } from 'next'
import { sampleUserData } from '../../../utils/sample-data'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleUserData)) {
      throw new Error('Cannot find user data')
    }

    res.status(200).json(sampleUserData)
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
*/