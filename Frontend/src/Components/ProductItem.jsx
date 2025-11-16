import React from 'react'
import { ShopContext } from '../Context/ShopContext.jsx';
import { Link } from 'react-router-dom';
const ProductItem = ({id, images, name, price}) => {
    const {currency} = React.useContext(ShopContext);
  return (
    <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer'>
      <div className='overflow-hidden '>
        {console.log(images,name, id, price)}
        <img src={images?.[0] || '/placeholder.jpg'} alt={name} className='hover:scale-110 transition ease-in-out' />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>

  )
}

export default ProductItem