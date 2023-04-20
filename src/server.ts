import { app } from './app'
import { env } from './env'

app
  .listen({
    host: '0.0.0.0', // makes our API accessible to other aplications (front-end)
    port: env.PORT,
  })
  .then(() => console.log('🚀 HTTP Server running'))
