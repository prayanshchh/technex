import { FastifyInstance } from 'fastify'
import { loadSQL } from '../utils/sqlLoader'

export default async function sponsorRoutes(app: FastifyInstance) {
  // Get all sponsors
  app.get('/', async (_, reply) => {
    const sql = loadSQL('sponsors/get_all_prizes.sql')
    const [rows] = await app.mysql.query(sql)
    return rows
  })

  // Get prizes with sponsor and hackathon info
  app.get('/prizes', async (_, reply) => {
    const sql = loadSQL('prizes/get_prizes_with_sponsors.sql')
    const [rows] = await app.mysql.query(sql)
    return rows
  })
}
