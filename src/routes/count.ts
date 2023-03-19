import express from 'express';
import * as countController from '../controller/count';

export const router = express.Router();

router.get('/:phones', countController.getAll);
