import { Phone } from '../models/Phone';
import { PhoneExtended } from '../models/PhoneExtended';

export const getAll = async () => Phone.findAll();

export const getAllWithPagination = async (
  perPage: number,
  currentPage: number,
) => {
  const productsOnPage = perPage * currentPage;
  const offset = productsOnPage - perPage;
  const limit = perPage;

  return Phone.findAll({
    offset,
    limit,
  });
};

export const getByPhoneId = async (phoneId: string) => {
  console.log(phoneId);
  return PhoneExtended.findOne({ where: { id: phoneId } });
};
