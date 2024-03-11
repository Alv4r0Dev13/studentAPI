import express from 'express';
import userController from '../controllers/UserController';
const router = express.Router();

router.post('/', userController.create);
router.get('/', userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;
