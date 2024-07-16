import App from "@/App";
import AboutUs from "@/pages/About/AboutUs";
import AddProduct from "@/pages/AddProduct/AddProduct";
import AllBookings from "@/pages/AllBookings/AllBookings";
import AllProduct from "@/pages/AllProduct/AllProduct";
// import AllCart from "@/pages/Cart/AllCart";
import MyCart from "@/pages/Cart/MyCart";
import CheckoutPage from "@/pages/Checkout/Checkout";
import Home from "@/pages/Home/Home";
import Management from "@/pages/Management/Management";
import ProductDetails from "@/pages/Product/ProductDetails/ProductDetails";
import ProductPage from "@/pages/Product/ProductPage/ProductPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
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
      ]
    },
    {
      path: '/management',
      element: <Management/>,
      children:[
        {
          path: 'addProduct',
          element: <AddProduct/>
        },
        {
          path: 'allProduct',
          element: <AllProduct/>
        },
        {
          path: 'allBookings',
          element: <AllBookings/>
        }
      ]
    }
  ]);