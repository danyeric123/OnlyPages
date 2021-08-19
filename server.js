import 'dotenv/config.js'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import logger from 'morgan'
import cors from 'cors'
import { router as profilesRouter } from './routes/profiles.js'
import { router as authRouter } from './routes/auth.js'
import { router as postsRouter } from './routes/posts.js'
import { router as boardsRouter } from './routes/boards.js'
import { router as reviewsRouter } from './routes/reviews.js'
import('./config/database.js')
//import('postcss.config.cjs')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.use('/profiles', profilesRouter)
app.use('/posts', postsRouter)
app.use('/reviews', reviewsRouter)
app.use('/boards', boardsRouter)
app.use('/auth', authRouter)

app.get('/*', function (req, res) {
  res.sendFile(
    path.dirname(fileURLToPath(import.meta.url), 'build', 'index.html')
  )
})

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Express is listening on port ${port}.`)
})
