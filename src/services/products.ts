import { Product } from '../models/Product';

export const getAll = async () => Product.findAll();

export const getAllWithPagination = async (
  perPage: number,
  currentPage: number,
) => {
  const productsOnPage = perPage * currentPage;
  const offset = productsOnPage - perPage;
  const limit = perPage;

  return Product.findAll({
    offset,
    limit,
  });
};
