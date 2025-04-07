// src/routes/project.route.ts

import { FastifyInstance } from 'fastify'
import { loadSQL } from '../utils/sqlLoader'

export default async function projectRoutes(app: FastifyInstance) {
  // Get all projects
  app.get('/', async (_, reply) => {
    const sql = loadSQL('projects/get_all_projects.sql')
    const [rows] = await app.mysql.query(sql)
    return rows
  })

  // Get feedback by project/user
  app.get('/feedback', async (_, reply) => {
    const sql = loadSQL('projects/get_feedback.sql')
    const [rows] = await app.mysql.query(sql)
    return rows
  })
}