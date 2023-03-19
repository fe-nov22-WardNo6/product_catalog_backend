import { Phone } from '../models/Phone';

export const getAll = async (category: string) => {
  switch (category) {
    case 'phones':
      return Phone.count();
    default:
      return Phone.count();
  }
};
