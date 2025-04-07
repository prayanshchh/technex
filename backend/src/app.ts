import Fastify from 'fastify'
import dotenv from 'dotenv'
import dbPlugin from './plugins/db'
import indexRoutes from './routes/index.route'
import userRoutes from './routes/user.route'
import teamRoutes from './routes/team.route'
import projectRoutes from './routes/project.route'
import roomRoutes from './routes/room.route'

dotenv.config()

const app = Fastify()

app.register(dbPlugin)
app.register(indexRoutes)
app.register(userRoutes, { prefix: '/users' })
app.register(teamRoutes, { prefix: '/teams' })
app.register(projectRoutes, { prefix: '/projects' })
app.register(roomRoutes, { prefix: '/rooms' })

app.listen({ port: 3000 }, () => {
  console.log('🚀 Server running on http://localhost:3000')
})
