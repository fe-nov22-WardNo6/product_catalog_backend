import { Category } from '../models/Category';

export const getAll = async () => Category.findAll();
