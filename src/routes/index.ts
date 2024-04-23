import { Request, Response, Router } from 'express';

const apiRouter = Router();

// Define routes for the apiRouter
apiRouter.get('/', (_req: Request, res: Response) => {
  res.send('Welcome to the API');
});

apiRouter.get('/data', (_req: Request, res: Response) => {
  res.json({ message: "Here's some data" });
});

export default apiRouter;