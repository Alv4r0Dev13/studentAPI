import express from 'express';
import userController from '../controllers/UserController';
const router = express.Router();

import loginMiddleware from '../middlewares/loginMiddleware';

// router.get('/', userController.index);
// router.get('/:id', userController.show);

router.post('/', userController.create);
router.put('/', loginMiddleware, userController.update);
router.delete('/', loginMiddleware, userController.delete);

export default router;
