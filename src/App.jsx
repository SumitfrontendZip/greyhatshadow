import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import ShopPage from './Components/ShopPage/ShopPage'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/shop',
      element: <ShopPage />
    }
  ])


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
