import { Product } from './models/Product';
import { dbInit } from './utils/initDB';

(async () => {
  dbInit();
  await Product.sync({ alter: true });
  await Product.create({
    name: 'first good',
  });
})();
