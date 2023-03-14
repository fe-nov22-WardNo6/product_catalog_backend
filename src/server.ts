import express from 'express';
import cors from 'cors';

import { router as productRouter } from './routes/product';
import { dbInit } from './utils/initDB';

const app = express();

dbInit();

app.use(cors());

app.use('/goods', express.json(), productRouter);

app.listen(5000);
