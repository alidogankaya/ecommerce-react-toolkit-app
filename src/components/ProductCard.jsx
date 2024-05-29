import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({product}) => {

const navigate=useNavigate()

  return (
    <div onClick={()=>navigate(`products/${product?.id}`)}   className='flex flex-col justify-center w-[300px] m-2 cursor-pointer h-[350px] rounded-md relative shadow-lg border bg-slate-50'>
        
        <div className=' m-auto px-3 text-center relative  font-bold align-middle pt-2'> {product.title}</div>
        <div><img className=' object-cover w-[200px] max-h-[200px] m-auto relative'   src={product?.image} alt='' />
        <div className=' bg-orange-400 text-white rounded-lg p-1 absolute pb-1 font-bold bottom-0 right-0 m-1'>{product.price} TL</div>
        
        </div>
                    


         <div className=' m-auto relative pb-2'>Trend Rate: {product.rating.rate}</div>


    </div>
  )
}

export default ProductCard