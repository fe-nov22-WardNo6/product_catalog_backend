import { Request, Response } from 'express';
import path from 'path';

export const download = async (req: Request, res: Response) => {
  const { url } = req.query;

  if (typeof url === 'string') {
    res.sendFile(path.join(__dirname + `../../../${url}`));

    return;
  }

  res.sendStatus(400);

  return;
};
