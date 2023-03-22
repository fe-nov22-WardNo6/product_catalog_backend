import { Request, Response } from 'express';
import * as phonesService from '../services/phones';

export const getAll = async (req: Request, res: Response) => {
  const {
    perPage = '16',
    currentPage = '1',
    sortBy = '',
    searchQuery = '',
  } = req.query;

  const products = await phonesService.getAllWithPagination(
    +perPage,
    +currentPage,
    String(sortBy).toLowerCase(),
    String(searchQuery),
  );

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

export const getCollection = async (req: Request, res: Response) => {
  const { collectionName } = req.params;

  const collection = await phonesService.getCollection(collectionName);

  if (!collection?.length) {
    res.sendStatus(404);

    return;
  }

  res.send(collection);
};
