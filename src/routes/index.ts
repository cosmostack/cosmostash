import { Router, Request, Response } from 'express';

const router = Router();

router.get('/cosmostash', (req: Request, res: Response) => {
  res.end('Hello, Cosmostash')
});

export default router;
