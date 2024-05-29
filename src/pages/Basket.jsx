import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearBasket, getTotalItemCount } from '../redux/features/basketSlice'
import BasketCom from '../components/basket/BasketCom'
import { useNavigate } from 'react-router-dom'
import { IoStorefrontOutline } from "react-icons/io5";

const Basket = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { basket, totalAmount, itemCount } = useSelector(state => state.basket)
    console.log(basket)

    console.log(basket)

    useEffect(() => {

        dispatch(getTotalItemCount())
    }, [dispatch])

    return (

        <>


            {



                basket?.length > 0 ? <div>
                    < div className=' flex flex-row justify-end gap-2 items-center mt-0'>
                        <button onClick={() => dispatch(clearBasket())} className='w-[80] rounded-lg text-center bg-orange-400 border shadow-xl text-black px-2 py-2 cursor-pointer' >Sepeti Temizle</button>
                    </div>
                    {basket.map((dt, i) => (
                        <div key={i}>
                            <BasketCom dt={dt} />
                        </div>

                    ))}<div className='flex flex-row justify-end gap-10 items-center'>
                        <div className=' bg-white rounded-lg text-center p-2 font-bold shadow-2xl'>Toplam Tutar:{totalAmount}</div>
                        <div >

                            <button onClick={() => dispatch(clearBasket())} className='w-[80]  rounded-lg text-center bg-orange-400 border shadow-xl text-black px-2 py-2  cursor-pointer' >Ödeme Onay</button>

                        </div>


                    </div>


                </div> :
                    <div>
                        <div className='flex flex-col justify-center items-center gap-6'>
                        <IoStorefrontOutline size={200} />

                            <div className=' font-bold'>Sepetiniz Boş....</div>
                            <button onClick={() => navigate('/')} className='w-[80]  rounded-lg text-center bg-orange-400 border shadow-xl text-black px-2 py-2  cursor-pointer' >Mağaza </button>

                        </div>


                    </div>
            }

        </>




    )
}

export default Basket