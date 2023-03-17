import { Request, Response } from 'express';
import path from 'path';

export const getDocumentation = async (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname + '../../../documentation.html'));

  return;
};
