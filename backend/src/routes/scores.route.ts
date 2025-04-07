import { FastifyInstance } from 'fastify'
import { loadSQL } from '../utils/sqlLoader'

export default async function scoreRoutes(app: FastifyInstance) {
  // Get all project scores with judge info
  app.get('/project-scores', async (_, reply) => {
    const sql = loadSQL('scores/get_project_scores.sql')
    const [rows] = await app.mysql.query(sql)
    return rows
  })
}
