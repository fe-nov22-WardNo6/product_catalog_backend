import { Request, Response } from 'express';
import * as phonesService from '../services/phones';

export const getAll = async (req: Request, res: Response) => {
  const { perPage = '16', currentPage = '1' } = req.query;

  const products = await phonesService.getAllWithPagination(
    +perPage,
    +currentPage,
  );

  const getAllCounts = await phonesService.getAllCount();

  res.setHeader('Access-Control-Allow-Headers', 'Count');
  res.setHeader('Count', getAllCounts);

  res.send(products);
};

export const getByPhoneId = async (req: Request, res: Response) => {
  const { phoneId } = req.params;

  const phone = await phonesService.getByPhoneId(phoneId);

  if (!phone) {
    res.sendStatus(404);

    return;
  }

  res.send(phone);
};
