import React, { use } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {assets} from '../assets/frontend_assets/assets.js'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
const Navbar = () => {
    const [visible,setVisible]=React.useState(false);

    const {setShowSearch, getCartCount, navigate, token, setToken, setCartItems}=useContext(ShopContext);

    const logout = () => {
         navigate('/login');
        localStorage.removeItem('token');
        setToken('');
        setCartItems({});
       
    }

  return (
    <div className='flex justify-between items-center py-4 font-medium'>
     <Link to='/'>
        <img src={assets.logo} alt="logo" className='w-28'/>
     </Link>
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

            <NavLink to='/' className='flex flex-col items-center gap-1'>
                 <p>HOME</p>
                 <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                 <p>COLLECTION</p>
                 <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                 <p>ABOUT</p>
                 <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                 <p>CONTACT</p>
                 <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
           

        </ul>

        <div className='flex gap-6 items-center'>

            <img onClick={() => setShowSearch(true)} src={assets.search_icon} alt="search" className='w-5 cursor-pointer'/>

            <div className='group relative '>
               <img onClick={() =>token?null: navigate('/login')} src={assets.profile_icon} alt="user" className='w-5 '/>
                
                {token &&   <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                     <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        <p className='hover:text-black'>Profile</p>
                        <p onClick={() => navigate('/orders')} className='hover:text-black'>Order</p>
                        <p onClick={logout} className='hover:text-black'>Logout</p>
                     </div>
                </div>
                }
            </div>
            <Link to='/cart' className='relative'>
                <img src={assets.cart_icon} alt="cart" className='w-5 min-w-5 cursor-pointer'/>
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
            </Link>
            <img onClick={() => setVisible(true)} src={assets.menu_icon} alt="menu" className='w-6 cursor-pointer sm:hidden'/>
        </div>

        {/* sidebar menu for small screens  */}
        <div className={`absolute top-0 right-0 bottom-0  overflow-hidden bg-white  transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className ='flex flex-col text-gray-600'>
                <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-4 cursor-pointer'>
                    <img src={assets.dropdown_icon} alt="close" className='h-4 rotate-180'/>
                    <p>Back</p>
                </div>
                <NavLink onClick={() => setVisible(false)} to='/' className='p-4 border-t border-gray-200'>HOME</NavLink>
                <NavLink onClick={() => setVisible(false)} to='/collection' className='p-4 border-t border-gray-200'>COLLECTION</NavLink>
                <NavLink onClick={() => setVisible(false)} to='/about' className='p-4 border-t border-gray-200'>ABOUT</NavLink>
                <NavLink onClick={() => setVisible(false)} to='/contact' className='p-4 border-t border-gray-200'>CONTACT</NavLink>

            </div>
        </div>
        
    </div>
  )
}

export default Navbar