import { Phone } from '../models/Phone';
import { PhoneExtended } from '../models/PhoneExtended';
import { Op, fn, where, col } from 'sequelize';

export const getAll = async () => Phone.findAll();

export const getAllWithPagination = async (
  perPage: number,
  currentPage: number,
  sortBy: string,
  searchQuery: string,
) => {
  const productsOnPage = perPage * currentPage;
  const offset = productsOnPage - perPage;
  const limit = perPage;
  let allPhone;

  const currentQuery = searchQuery;

  switch (sortBy) {
    case 'newest':
      allPhone = await Phone.findAndCountAll({
        order: [['year', 'DESC']],
        offset,
        limit,
        where: {
          [Op.and]: [
            where(fn('REPLACE', fn('LOWER', col('name')), ' ', ''), {
              [Op.like]: `%${currentQuery.toLowerCase().replace(/\s+/g, '')}%`,
            }),
          ],
        },
      });

      return allPhone;

    case 'cheapest':
      allPhone = await Phone.findAndCountAll({
        order: [['price', 'ASC']],
        offset,
        limit,
        where: {
          [Op.and]: [
            where(fn('REPLACE', fn('LOWER', col('name')), ' ', ''), {
              [Op.like]: `%${currentQuery.toLowerCase().replace(/\s+/g, '')}%`,
            }),
          ],
        },
      });

      return allPhone;

    case 'expensive':
      allPhone = await Phone.findAndCountAll({
        order: [['price', 'DESC']],
        offset,
        limit,
        where: {
          [Op.and]: [
            where(fn('REPLACE', fn('LOWER', col('name')), ' ', ''), {
              [Op.like]: `%${currentQuery.toLowerCase().replace(/\s+/g, '')}%`,
            }),
          ],
        },
      });

      return allPhone;

    default:
      allPhone = await Phone.findAndCountAll({
        offset,
        limit,
        where: {
          [Op.and]: [
            where(fn('REPLACE', fn('LOWER', col('name')), ' ', ''), {
              [Op.like]: `%${currentQuery.toLowerCase().replace(/\s+/g, '')}%`,
            }),
          ],
        },
      });

      console.log(allPhone);

      return allPhone;
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
