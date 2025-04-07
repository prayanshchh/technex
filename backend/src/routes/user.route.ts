import { FastifyInstance } from 'fastify'
import { loadSQL } from '../utils/sqlLoader'

export default async function userRoutes(app: FastifyInstance) {
  app.get('/', async (req, reply) => {
    const sql = loadSQL('users/get_all_users.sql')
    const [rows] = await app.mysql.query(sql)
    return rows
  })

  app.get('/:userId', async (req, reply) => {
    const { userId } = req.params as { userId: string }
    const sql = loadSQL('users/get_user.sql')
    const [rows] = await app.mysql.query(sql, [userId])
    return rows
  })

  app.post('/', async (req, reply) => {
    const { user_id, email } = req.body as { user_id: number; email: string }
    const sql = loadSQL('users/insert_user.sql')
    await app.mysql.query(sql, [user_id, email])
    reply.code(201).send({ message: 'User inserted' })
  })
}