import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import AboutUs from './Components/AboutUS/AboutUs.jsx'
import Menu from './Components/Menu/Menu.jsx'
import CartPage from './Components/Cart/Cart.jsx'



const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    // errorElement:<ErrorPage/>,
    children:[
       {
      path:"",
      element:<Home/>
       },
      {
        path:"about",
        element:<AboutUs/>
         },

               {
                path:"menu",
                element:<Menu/>
                 },
               {
                path:"cart",
                element:<CartPage/>
                 },

    ]
  }
])


const App = () => {
  return (
    <div>
           <RouterProvider router={router} />

    </div>
  )
}

export default App
