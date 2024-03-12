import { Router } from 'express';
const router = Router();

// routes
import homeRoutes from './homeRoutes';
import studentRoutes from './studentRoutes';
import tokenRoutes from './tokenRoutes';
import userRoutes from './userRoutes';

router.use('/users/', userRoutes);
router.use('/tokens', tokenRoutes);
router.use('/students/', studentRoutes);
router.use('/', homeRoutes);

router.get('*', (req, res) => res.status(404).send('Error 404: Page not found!'));

export default router;
