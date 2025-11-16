import React from 'react'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Login from './Pages/Login.jsx'
import Cart from './Pages/Cart.jsx'
import Collection from './Pages/Collection.jsx'
import Orders from './Pages/Orders.jsx'
import PlaceOrder from './Pages/PlaceOrder.jsx'
import Product from './Pages/Product.jsx'
import { Routes , Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer.jsx'
import SearchBar from './Components/SearchBar.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/product/:productId' element={<Product />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App