import { Router } from 'express';
import photoController from '../controllers/PhotoController';
import loginMiddleware from '../middlewares/loginMiddleware';
const router = Router();

router.post('/', loginMiddleware, photoController.create);

export default router;
