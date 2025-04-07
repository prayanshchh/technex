import { FastifyInstance } from 'fastify'

export default async function indexRoutes(app: FastifyInstance) {
  app.get('/', async (_, reply) => {
    return { message: 'Welcome to Techfest API 🚀' }
  })

  app.get('/health', async (_, reply) => {
    return { status: 'ok', timestamp: new Date().toISOString() }
  })
}
