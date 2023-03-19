import { Request, Response } from 'express';
import * as countService from '../services/count';

export const getAll = async (req: Request, res: Response) => {
  const { category = 'phones' } = req.params;

  const count = await countService.getAll(category);

  res.send({ count });
};
