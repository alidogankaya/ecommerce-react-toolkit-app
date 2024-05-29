import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTotalItemCount, removeFromBasket } from '../../redux/features/basketSlice'
import { useLocation } from 'react-router-dom'

import { MdDeleteForever } from "react-icons/md";




const BasketCom = ({ dt }) => {

    const dispatch = useDispatch()
    const { basket, totalAmount, itemCount } = useSelector(state => state.basket)

    const locations = useLocation()

    useEffect(() => {

        dispatch(getTotalItemCount())
    }, [dispatch, locations])



    return (


            <div className='flex flex-row justify-between items-center  shadow-xl  bg-slate-50 font-bold my-5 p-2 rounded-lg'>
                <div className='flex flex-col object-cover '>
                    <img className=' min-w-[60px] min-h-[60px] max-h[60px] max-w-[60px]' src={dt?.image} alt='' />

                </div>
                <div className='w-[300px] text-wrap text-center'>

                    {dt?.title}

                </div>
                <div>

                    {dt?.quantity}&emsp;Adet

                </div>
                <div>

                    {dt?.price} TL

                </div>
                <div >

                    Tutar:&emsp;{dt?.price * dt?.quantity}
                </div>
                <MdDeleteForever size={40} color='orange' onClick={() => dispatch(removeFromBasket(dt?.id))} className=' cursor-pointer' />

            </div>




    )
}

export default BasketCom