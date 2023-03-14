import express from 'express';
import cors from 'cors';

import { router as goodsRouter } from './routes/goods';
import { dbInit } from './utils/initDB';

const app = express();

dbInit();

app.use(cors());

app.use('/goods', express.json(), goodsRouter);

app.listen(5000);
