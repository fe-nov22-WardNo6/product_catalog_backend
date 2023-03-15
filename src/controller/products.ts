import { Request, Response } from 'express';
import * as goodService from '../services/products';

export const getAll = async (req: Request, res: Response) => {
  const { perPage, currentPage } = req.query;

  if (!perPage && !currentPage) {
    const goods = await goodService.getAll();

    res.send(goods);

    return;
  }

  if (!perPage || !currentPage) {
    res.sendStatus(400);

    return;
  }

  const goods = await goodService.getAllWithPagination(+perPage, +currentPage);

  res.send(goods);
};
