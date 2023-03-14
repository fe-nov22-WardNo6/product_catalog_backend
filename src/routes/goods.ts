import express from 'express';
import * as goodController from '../controller/products';

export const router = express.Router();

router.get('/', goodController.getAll);
