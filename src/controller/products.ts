import { Request, Response } from 'express';
import * as goodService from '../services/products';

export const getAll = async (req: Request, res: Response) => {
  const goods = await goodService.getAll();

  res.send(goods);
};
