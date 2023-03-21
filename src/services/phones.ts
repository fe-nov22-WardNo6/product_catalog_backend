import { Phone } from '../models/Phone';
import { PhoneExtended } from '../models/PhoneExtended';
import { Op } from 'sequelize';

export const getAll = async () => Phone.findAll();

export const getAllWithPagination = async (
  perPage: number,
  currentPage: number,
  sortBy: string,
) => {
  const productsOnPage = perPage * currentPage;
  const offset = productsOnPage - perPage;
  const limit = perPage;

  switch (sortBy) {
    case 'newest':
      return Phone.findAll({
        order: [['year', 'DESC']],
        offset,
        limit,
      });

    case 'cheapest':
      return Phone.findAll({
        order: [['price', 'ASC']],
        offset,
        limit,
      });

    case 'expensive':
      return Phone.findAll({
        order: [['price', 'DESC']],
        offset,
        limit,
      });

    default:
      return Phone.findAll({
        offset,
        limit,
      });
  }
};

export const getByPhoneId = async (phoneId: string) => {
  return PhoneExtended.findOne({ where: { id: phoneId } });
};

export const getAllCount = async () => {
  return Phone.count();
};

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export const getCollection = async (collectionName: string) => {
  const randomIds: Array<number> = [];
  const allCount = await Phone.count();
  const allPhones = await Phone.findAll();
  let hotPricePhones;
  let newest;

  switch (collectionName) {
    case 'recommended':
      for (let i = 0; i <= 7; i++) {
        const randomId = getRandomInt(allCount);

        if (randomIds.includes(randomId)) {
          i--;
        } else {
          randomIds.push(randomId);
        }
      }

      return Phone.findAll({
        where: {
          id: {
            [Op.or]: randomIds,
          },
        },
      });

    case 'hotPrices':
      hotPricePhones = allPhones
        .sort((a, b) => {
          const differentA = a.fullPrice - a.price;
          const differentB = b.fullPrice - b.price;

          return differentB - differentA;
        })
        .slice(0, 8)
        .map((phone) => phone.id);

      return Phone.findAll({
        where: {
          id: {
            [Op.or]: hotPricePhones,
          },
        },
      });

    case 'newest':
      newest = allPhones
        .sort((a, b) => b.year - a.year)
        .slice(0, 8)
        .map((phone) => phone.id);

      return Phone.findAll({
        where: {
          id: {
            [Op.or]: newest,
          },
        },
      });
  }
};
