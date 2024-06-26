import { createBrowserRouter } from 'react-router-dom'
import AppLayout from '../layout/AppLayout'
import { HomePage } from '../pages/HomePage'
import { ProductsPage } from '../pages/ProductsPage'
import { ErrorPage } from '../pages/ErrorPage'
import { DetailProductPage } from '../pages/DetailProductPage'
import { getDetailProduct } from '../helpers/getDetailProduct'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/products',
        element: <ProductsPage />
      },
      {
        path: '/products/:id',
        element: <DetailProductPage />,
        loader: getDetailProduct
      }
    ]
  }
])
