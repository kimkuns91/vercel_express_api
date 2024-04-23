import express, { Request, Response, Router } from 'express'

import apiRouter from './routes';

const app = express()
const port = process.env.PORT || 8080

// Create the router for API routes
app.use('/api', apiRouter);

app.get('/', (_req: Request, res: Response) => {
  return res.send('Express Typescript on Vercel')
})

app.get('/ping', (_req: Request, res: Response) => {
  return res.send('pong 🏓')
})

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`)
})