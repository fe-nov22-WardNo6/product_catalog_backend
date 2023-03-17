import { getDocumentation } from './../controller/documentation';
import express from 'express';

export const router = express.Router();

router.get('/', getDocumentation);
