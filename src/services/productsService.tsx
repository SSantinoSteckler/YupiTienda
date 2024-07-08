import axios from 'axios';
import {
  ArrayCategoryNameSchema,
  listProductSchema,
} from '../schemas/products-schemas';
import { CategoryName } from '../types';

export const getProductsAll = async () => {
  const url = 'https://dummyjson.com/products';
  const { data } = await axios(url);
  const { products } = data;

  const result = listProductSchema.safeParse(products);
  if (result.success) {
    return result.data;
  }
};

export const getProductByCategoryName = async () => {
  const url = 'https://dummyjson.com/products/categories';
  const { data } = await axios(url);
  const result = ArrayCategoryNameSchema.safeParse(data);
  if (result.success) {
    return result.data;
  }
};

export const getProductsByCategory = async (elem: CategoryName) => {
  const url = `https://dummyjson.com/products/category/${elem.slug}`;
  const { data } = await axios(url);
  const { products } = data;

  const result = listProductSchema.safeParse(products);
  if (result.success) {
    return result.data;
  }
};
