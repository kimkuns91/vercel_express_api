import express, { Request, Response } from 'express'

import apiRouter from './routes';
import { config } from './config/env.config';

const app = express()
const port = config.PORT

app.use('/api', apiRouter);

app.get('/', (_req: Request, res: Response) => {
  return res.send('Express Typescript on Vercel')
})

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`)
})