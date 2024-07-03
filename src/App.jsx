import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import ShopPage from './Components/ShopPage/ShopPage'
import SoftwarePage from './Components/SoftwarePage/SoftwarePage'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import AboutUs from './Components/AboutUs/AboutUs'
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy'
import RefundsCancellation from './Components/RefundsCancellation/RefundsCancellation'
import ContactUs from './Components/ContactUs/ContactUs'

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
    }, {
      path: '/:category/:title/:id/',
      element: <ProductDetails />
    },{
      path:'/aboutUs',
      element:<AboutUs/>
    },{
      path:'/privacy-policy',
      element:<PrivacyPolicy/>
    },{
      path:'/Refunds-Cancellations-Policy',
      element:<RefundsCancellation/>
    },{
      path:'/contact-us',
      element:<ContactUs/>
    }
  ])


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
