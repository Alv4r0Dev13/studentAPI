import express from 'express';
import studentController from '../controllers/StudentController';
const router = express.Router();

router.post('/', studentController.create);

export default router;
