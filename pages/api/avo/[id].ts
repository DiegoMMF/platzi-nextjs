import { NextApiRequest, NextApiResponse } from 'next'
// los anteriores son como IncommingMessage y ServerResponse con superpoderes
// uno de ellos es tener .query
import DB from '@database'

const AvoDetail = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = new DB()
    const avoId = req.query.id as string
    
    // res.status(200).json(avoId) // vemos si anda el endpoint

    const avo = await db.getById(avoId)

    res.status(200).json(avo ? avo : "No existe esa palta en nuestra base de datos!")
  } catch (e) {
    console.error(e)
    res.status(404).end()
  }
}

export default AvoDetail