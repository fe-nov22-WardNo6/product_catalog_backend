import express from 'express';
import * as phoneController from '../controller/phones';

export const router = express.Router();

router.get('/', phoneController.getAll);
router.get('/:phoneId', phoneController.getByPhoneId);
