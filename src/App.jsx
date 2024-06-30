import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import ShopPage from './Components/ShopPage/ShopPage'
import SoftwarePage from './Components/SoftwarePage/SoftwarePage'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/shop',
      element: <ShopPage />
    },
    {
      path: '/softwares',
      element: <SoftwarePage />
    }
  ])


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
