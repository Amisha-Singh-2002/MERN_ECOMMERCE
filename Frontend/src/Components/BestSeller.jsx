import React from 'react'
import { useContext , useState, useEffect} from 'react'
import { ShopContext } from '../Context/ShopContext'
import ProductItem from './ProductItem.jsx'
import Title from './Title.jsx'
const BestSeller = () => {

    const {products} = useContext(ShopContext)
    const [bestSeller, setBestSeller] = useState([])

    useEffect(()=>{
        if(!products) return;
        // assets data uses `bestseller` (all-lowercase) — match that field
        const bestProduct = products.filter((item) => item.bestseller);
        setBestSeller(bestProduct.slice(0,5));
    },[products])
  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            {console.log(bestSeller)}
            <Title text1={'BEST'} text2={'SELLERS'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                 Discover our best-selling products that customers love!
            </p>   
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    bestSeller.map((item, index)=>(
                     <ProductItem key={index} id={item._id} name={item.name} images={item.images} price={item.price}/>
                    ))
                }
        </div>
    </div>
  )
}

export default BestSeller;