import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github, { GithubLoader } from './Components/Github/Github.jsx'


const router = createBrowserRouter([

  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path: '',
        element: < Home />
      },
      {
        path: 'About',
        element: <About />
      },
      {
        path: 'Contact',
        element: <Contact />
      },
      {
        path: 'User/:userid',
        element: <User />
      },
      {
        path: 'Github',
        element: <Github />,
        loader: GithubLoader     //here we use GithubLoader
      }
    ]
    
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
