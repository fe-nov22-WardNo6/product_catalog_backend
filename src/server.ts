import express from 'express';
import cors from 'cors';

import { router as productRouter } from './routes/product';
import { router as downloadRouter } from './routes/download';
import { dbInit } from './utils/initDB';

const app = express();
const port = 5000;

dbInit();

app.use(cors());

app.use('/products', express.json(), productRouter);
app.use('/download', downloadRouter);

app.listen(port, () => {
  console.log(`project start at http://localhost:${port}`);
});
