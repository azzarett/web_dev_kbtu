/* eslint-disable sort-keys */
import { RouteObject } from 'react-router-dom';

import { NavigationLayout } from '@/common/layouts/navigation-layout';
import { CategoryView } from '@/modules/categories/views/categories-view/categories-view';
import { ProductView } from '@/modules/products/views/products-view/products-view';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <NavigationLayout />,
    children: [
      {
        path: '/',
        element: <CategoryView />,
      },
      {
        path: `/products/:categoryName`,
        element: <ProductView />,
      },
    ],
  },
];
