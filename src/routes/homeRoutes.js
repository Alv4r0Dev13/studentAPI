import { Router } from 'express';
import homeController from '../controllers/homeController';
const router = Router();

router.use('/', homeController.index);

export default router;
