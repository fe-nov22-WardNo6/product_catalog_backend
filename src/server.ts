import express from 'express';
import cors from 'cors';

import { router as productRouter } from './routes/product';
import { dbInit } from './utils/initDB';

const app = express();
const port = 5000;

dbInit();

app.use(cors());

app.use('/products', express.json(), productRouter);

app.listen(port, () => {
  console.log(`project start at http://localhost:${port}`);
});
