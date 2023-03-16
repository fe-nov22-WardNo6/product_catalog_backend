import express from 'express';
import * as categoriesController from '../controller/categories';

export const router = express.Router();

router.get('/', categoriesController.getAll);
