import express from 'express';
import studentController from '../controllers/StudentController';
const router = express.Router();

import loginMiddleware from './../middlewares/loginMiddleware';

router.get('/', studentController.index);
router.get('/:id', studentController.show);
router.post('/', loginMiddleware, studentController.create);
router.put('/:id', loginMiddleware, studentController.update);
router.delete('/:id', loginMiddleware, studentController.delete);

export default router;
