import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { productsStore } from './productsStore';
import { ProductStoreType } from './productsStore';

export const useAppStore = create<ProductStoreType>()(
  devtools((...a) => ({
    ...productsStore(...a),
  }))
);
