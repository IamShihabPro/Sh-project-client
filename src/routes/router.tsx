import App from "@/App";
import ErrorPage from "@/component/ErrorPage/ErrorPage";
import AboutUs from "@/pages/About/AboutUs";
import MyCart from "@/pages/Cart/MyCart";
import CheckoutPage from "@/pages/Checkout/Checkout";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import ProductDetails from "@/pages/Product/ProductDetails/ProductDetails";
import ProductPage from "@/pages/Product/ProductPage/ProductPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/products',
          element: <ProductPage/>
        },
        {
          path: '/products/:id',
          element: <ProductDetails/>
        },
        {
          path: '/cart',
          element: <MyCart/>
        },
        {
          path: '/checkout',
          element: <CheckoutPage/>
        },
        {
          path: '/about',
          element: <AboutUs/>
        },
        {
          path: '/login',
          element: <Login/>
        },
      ]
    },
  ]);