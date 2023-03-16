import { Request, Response } from 'express';
import * as categoriesService from '../services/categories';

export const getAll = async (req: Request, res: Response) => {
  const categories = await categoriesService.getAll();

  res.send(categories);
};
