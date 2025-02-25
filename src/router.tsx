import { createBrowserRouter } from 'react-router-dom';
import { IndexPage } from './pages/IndexPage/IndexPage';
import { Layout } from './layouts/Layout';
import { CarritoPage } from './pages/CarritoPage/CarritoPage';
import { CardClickProduct } from './pages/CardClickProduct/CardClickProduct';
import { CategoryPage } from './pages/CategoryPage/CategoryPage';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <IndexPage></IndexPage>,
      },
      {
        path: 'carrito',
        element: <CarritoPage></CarritoPage>,
      },
      {
        path: 'product/:id',
        element: <CardClickProduct></CardClickProduct>,
      },
      {
        path: 'category/:slug',
        element: <CategoryPage></CategoryPage>,
      },
    ],
  },
]);
