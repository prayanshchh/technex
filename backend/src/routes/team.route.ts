import { FastifyInstance } from 'fastify'
import { loadSQL } from '../utils/sqlLoader'

export default async function teamRoutes(app: FastifyInstance) {
  // Get all teams
  app.get('/', async (_, reply) => {
    const sql = loadSQL('teams/get_all_teams.sql')
    const [rows] = await app.mysql.query(sql)
    return rows
  })

  // Get team member counts
  app.get('/member-counts', async (_, reply) => {
    const sql = loadSQL('teams/get_member_counts.sql')
    const [rows] = await app.mysql.query(sql)
    return rows
  })
}
