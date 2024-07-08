import { z } from 'zod';

export const ProductSchema = z.object({
  id: z.number(),
  brand: z.string().optional(),
  title: z.string(),
  description: z.string(),
  amount: z.number().optional(),
  category: z.string(),
  price: z.number(),
  discountPercentage: z.number(),
  availabilityStatus: z.string(),
  stock: z.number(),
  minimumOrderQuantity: z.number(),
  shippingInformation: z.string(),
  returnPolicy: z.string(),
  warrantyInformation: z.string(),
  rating: z.number(),
  tags: z.array(z.string()),
  images: z.array(z.string()),
  thumbnail: z.string(),
  dimensions: z.object({
    width: z.number(),
    height: z.number(),
    depth: z.number(),
  }),
  meta: z.object({
    createdAt: z.string(),
    updatedAt: z.string(),
    barcode: z.string(),
    qrCode: z.string(),
  }),
  reviews: z.array(
    z.object({
      comment: z.string(),
      rating: z.number(),
      reviewerEmail: z.string(),
      reviewerName: z.string(),
    })
  ),
});

export const ElemReviewPropsSchema = z.object({
  comment: z.string(),
  rating: z.number(),
  reviewerEmail: z.string(),
  reviewerName: z.string(),
});

export const CategoryNameSchema = z.object({
  name: z.string(),
  slug: z.string(),
  url: z.string(),
});

export const ArrayCategoryNameSchema = z.array(CategoryNameSchema);

export const listProductSchema = z.array(ProductSchema);
