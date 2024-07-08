import { StateCreator } from 'zustand';
import {
  getProductByCategoryName,
  getProductsAll,
  getProductsByCategory,
} from '../services/productsService';
import { CategoryName, Product } from '../types';

export type ProductStoreType = {
  productsAll: Product[];
  productsCategoryName: CategoryName[];
  productCart: Product[];
  getProducts: () => void;
  getProductsCategoryName: () => void;
  getProductsByCategory: (elem: CategoryName) => void;
  pushProductCart: (elem: Product) => void;
  deleteProductCart: (elem: Product) => void;
  minusProductCart: (elem: Product) => void;
  emptyCart: () => void;
};

export const productsStore: StateCreator<ProductStoreType> = (set) => {
  const initialCart = JSON.parse(localStorage.getItem('cart') || '[]');

  return {
    productsAll: [],
    productsCategoryName: [],
    productCart: initialCart,
    getProducts: async () => {
      const result = await getProductsAll();

      set({
        productsAll: result,
      });
    },
    getProductsCategoryName: async () => {
      const result = await getProductByCategoryName();

      set({
        productsCategoryName: result,
      });
    },
    getProductsByCategory: async (elem) => {
      const result = await getProductsByCategory(elem);
      set({
        productsAll: result,
      });
    },
    pushProductCart: (elem) => {
      set((state) => {
        const existProduct = state.productCart.find(
          (item) => item.id === elem.id
        );

        if (existProduct && existProduct.stock <= (existProduct.amount || 0))
          return {
            productCart: state.productCart,
          };

        if (existProduct) {
          const updatedCart = state.productCart.map((item) =>
            item.id === elem.id
              ? { ...item, amount: (item.amount || 0) + 1 }
              : item
          );
          localStorage.setItem('cart', JSON.stringify(updatedCart));
          return {
            productCart: updatedCart,
          };
        } else {
          const updatedCart = [...state.productCart, { ...elem, amount: 1 }];
          localStorage.setItem('cart', JSON.stringify(updatedCart));
          return {
            productCart: updatedCart,
          };
        }
      });
    },
    deleteProductCart: (elem) => {
      set((state) => {
        const result = state.productCart.filter((item) => item.id !== elem.id);
        localStorage.setItem('cart', JSON.stringify(result));
        return { productCart: result };
      });
    },
    minusProductCart: (elem) => {
      if (elem.amount && elem.amount <= 1) return;
      set((state) => {
        const updatedCart = state.productCart.map((item) =>
          item.id === elem.id
            ? { ...item, amount: (item.amount || 0) - 1 }
            : item
        );
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return {
          productCart: updatedCart,
        };
      });
    },
    emptyCart: () => {
      localStorage.removeItem('cart');
      set({
        productCart: [],
      });
    },
  };
};
