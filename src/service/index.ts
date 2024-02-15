import axios from 'axios';
import { PRODUCTS_URL } from '../constants';

export const getProducts = (limit: number, skip: number) => axios.get(PRODUCTS_URL(limit, skip));
