import { StrictMode } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Welcome from '@components/pages/Welcome'
import Register from '@components/pages/Register'
import Register2 from '@components/pages/Register2'
import Login from '@components/pages/Login'
import Home from '@components/pages/app/Home'

import AppLayout from '@components/ui/AppLayout'
import SpendAndBudget from '@components/pages/app/SpendAndBudget'
import Calendar from '@components/pages/app/Calendar'
import CreditCard from '@components/pages/app/CreditCard'
import Settings from '@components/pages/app/Settings'
import NewSubscription from '@components/pages/app/NewSubscription'
import NewCategory from '@components/pages/app/NewCategory'
import Subscription from '@components/pages/app/Subscription'

import ROUTES from './utils/constants/routes.js'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'welcome',
        element: <Welcome />
      },
      {
        path: 'signUp',
        element: <Register />
      },
      {
        path: 'signUpWithEmail',
        element: <Register2 />
      },
      {
        path: 'signIn',
        element: <Login />
      },
      {
        path: 'app',
        element: <AppLayout />,
        children: [
          {
            path: 'home',
            element: <Home />
          },
          {
            path: 'spendAndBudget',
            element: <SpendAndBudget />
          },
          {
            path: 'calendar',
            element: <Calendar />
          },
          {
            path: 'creditCards',
            element: <CreditCard />
          },
          {
            path: 'settings',
            element: <Settings />
          },
          {
            path: 'newSubscription',
            element: <NewSubscription />
          },
          {
            path: 'newCategory',
            element: <NewCategory />
          },
          {
            path: 'subscription/:id',
            element: <Subscription />
          }
        ]
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
