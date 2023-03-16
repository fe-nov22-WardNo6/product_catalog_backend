import express from 'express';
import cors from 'cors';

import { router as phoneRouter } from './routes/phone';
import { router as downloadRouter } from './routes/download';
import { router as categoriesRouter } from './routes/categories';
import { dbInit } from './utils/initDB';

const app = express();
const port = 5000;

dbInit();

app.use(cors());

app.use('/phones', express.json(), phoneRouter);
app.use('/download', downloadRouter);
app.use('/categories', categoriesRouter);
app.get('/', (req, res) => {
  res.send(`
  BASE_URL: https://product-catalog-backend-vhc5.onrender.com
  1.Get:  /phones
  Return list of phones.
  - Without search params: get collection of first 16 phones. Example:
  BASE_URL/phones
  - With pagination: required url search params:
  perPage and currentPage. Example:
  BASE_URL/phones?perPage=5&currentPage=2

  2.Get:  /phones/:phoneId
  Return extend information of phone.
  - Required params "phoneUrl". Example:
  BASE_URL/phones/phoneId

  3.Get:  /downloads
  Return image of item.
  - Required search params "url". Example:
  BASE_URL/download?url=img/phones/apple-iphone-7/black/00.jpg

  4.Get:  /categories
  Return all categories. Example:
  BASE_URL/categories
   `);
});

app.listen(port, () => {
  console.log(`project start at http://localhost:${port}`);
});
