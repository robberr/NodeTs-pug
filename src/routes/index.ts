import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.render('index',{ title: 'Welcome to Books App'});
});

export default router;