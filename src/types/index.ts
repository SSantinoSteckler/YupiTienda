import {
  CategoryNameSchema,
  ElemReviewPropsSchema,
  ProductSchema,
} from '../schemas/products-schemas';
import { z } from 'zod';

export type Product = z.infer<typeof ProductSchema>;
export type ElemReview = z.infer<typeof ElemReviewPropsSchema>;
export type CategoryName = z.infer<typeof CategoryNameSchema>;
