import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../redux/features/basketSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';

const DetailsComp = ({ productsDetail }) => {
    const notify = () => toast.success("Ürününüz eklendi!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,

    });
    const [count, setCount] = useState(0)

    const dispatch = useDispatch()

    const arttir = () => {
        
        
        if (count < productsDetail?.rating?.count)
            setCount(count + 1)

    }
    const azalt = () => {
        if (count > 0)
            setCount(count - 1)

    }
    const AddBasket = () => {
        if (count > 0)
            notify();

        dispatch(addToBasket({ id: productsDetail?.id, price: productsDetail?.price, title: productsDetail?.title, quantity: count, image: productsDetail?.image }))
        setCount(0)
    }


    return (
        <div className='flex justify-center items-start gap-4'>
            <img className='max-h-[600px] max-w-[500px] shadow-2xl object-fill' src={productsDetail?.image} alt='' />

            <div className='flex flex-col justify-between'>
                <div className=' text-4xl font-bold text-center '>{productsDetail?.title}</div>

                <div className=' p-4'>{productsDetail?.description}</div>
                <div className='flex flex-row justify-start items-start '>
                    <div className='flex justify-center items-center m-2 gap-2 bg-white px-3 w-[100px]  py-2 shadow-xl border rounded-full'>
                        <FaHeart color='red' />
                        <div>{productsDetail?.rating?.rate}</div>

                    </div>

                    <div className=' w-[100px] items-center m-2  bg-white px-3  py-2 shadow-xl border rounded-full'>Stok: {productsDetail?.rating?.count}</div>

                </div>


                <div className=' w-[400px] items-center m-2 px-3 py-2 text-4xl'>{productsDetail?.price} TL</div>

                <div className='flex justify-center items-center gap-6'>
                    <div className='flex flex-row justify-center items-center gap-3 mt-4 mr-0'>
                        <div onClick={arttir} className='bg-orange-300 border shadow-xl rounded-full py-2 px-4 font-bold cursor-pointer'>+</div>
                        <input id='inputId'  value={count} onChange={(e) => {
                            const newCount = parseInt(e.target.value); newCount >= 0 && newCount <= productsDetail?.rating?.count && setCount(newCount);
                        }} className='p-1 w-11 rounded-md text-center' />
                        <div onClick={azalt} className='bg-orange-300 border shadow-xl rounded-full py-2 px-4 font-bold cursor-pointer'>-</div>
                    </div>
                    <div onClick={AddBasket} className='w-[200px] mt-3 rounded-lg text-center bg-orange-400 border shadow-xl text-black px-2 py-2 max-w-40 cursor-pointer'>Sepete Ekle</div>
                    <ToastContainer
                        className="toast-position" 
                       
                    />
                </div>

            </div>



        </div>
    )
}

export default DetailsComp