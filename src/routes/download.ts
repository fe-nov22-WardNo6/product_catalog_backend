import express from 'express';
import * as downloadController from '../controller/download';

export const router = express.Router();

router.get('/', downloadController.download);
