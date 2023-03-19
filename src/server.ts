import express from 'express';
import cors from 'cors';

import { router as phoneRouter } from './routes/phone';
import { router as downloadRouter } from './routes/download';
import { router as categoriesRouter } from './routes/categories';
import { router as documentationRouter } from './routes/documentation';
import { router as countRouter } from './routes/count';
import { dbInit } from './utils/initDB';

const app = express();
const port = 5000;

dbInit();

app.use(cors());

app.use('/phones', express.json(), phoneRouter);
app.use('/download', downloadRouter);
app.use('/categories', categoriesRouter);
app.use('/count', countRouter);
app.get('/', documentationRouter);

app.listen(port, () => {
  console.log(`project start at http://localhost:${port}`);
});
