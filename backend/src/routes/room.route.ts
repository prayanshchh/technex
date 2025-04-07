import { FastifyInstance } from 'fastify'
import { loadSQL } from '../utils/sqlLoader'

export default async function roomRoutes(app: FastifyInstance) {
  // Get all rooms
  app.get('/', async (_, reply) => {
    const sql = loadSQL('rooms/get_all_rooms.sql')
    const [rows] = await app.mysql.query(sql)
    return rows
  })

  // Get room and payment info for user
  app.get('/user/:userId', async (req, reply) => {
    const { userId } = req.params as { userId: string }
    const sql = loadSQL('rooms/get_user_rooms.sql')
    const [rows] = await app.mysql.query(sql, [userId])
    return rows
  })
}
