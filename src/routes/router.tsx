import App from "@/App";
import AddProduct from "@/pages/AddProduct/AddProduct";
import AllProduct from "@/pages/AllProduct/AllProduct";
import Home from "@/pages/Home/Home";
import Management from "@/pages/Management/Management";
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
        }
      ]
    }
  ]);