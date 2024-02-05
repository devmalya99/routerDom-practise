import React, {useEffect} from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './Component/Home'
import About from './Component/About.jsx'
import Contact from './Component/Contact'

import User from './Component/User/user.jsx'
import Github from './Component/Github/Github.jsx'
const router =createBrowserRouter([
  {
    path: '/',//path is the top level element
    element:<Layout />, //path will render layout element -it will be same for every page
    children : [
      {
          path: '',//it will display home element
          element:<Home />
      },
      {
         path: '/about',
         element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path:'/user/:userId',
        element: <User />
      },
      {
        path:'/github',
        element: <Github />
      }
    ]


  }
])





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
