import { CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import logo from '../assets/LOGO.png';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getTotalItemCount } from "../redux/features/basketSlice";
import { useNavigate } from "react-router-dom";


const Navbar = () => {

const dispatch=useDispatch()
const {itemCount}=useSelector(state=>state.basket)
console.log(itemCount)


useEffect(()=>{

    dispatch(getTotalItemCount())
},[dispatch])

const navigate=useNavigate()

    return (
        <div className='flex  items-center  justify-between flex-wrap px-10 mx-10'>
            
            <img onClick={()=>navigate('/')} className="flex justify-start  items-center h-12 cursor-pointer" src={logo} alt="" />



            <div className=" flex  items-center  justify-end gap-4 flex-wrap my-6">
                <div className="flex  items-center  justify-end my-6 ">
                    <input  className=' bg-gray-100 rounded-full border py-2 px-3 shadow-lg outline-none' type='text' placeholder='Ürün Arama'/>

                    <CiSearch color="grey" size={30} className=' absolute m-3 cursor-pointer' />
                </div>
                <div onClick={()=>navigate("/basket")} className="flex  items-center  cursor-pointer justify-end ">
                    <SlBasket  color="grey" size={35} />
                    <span className=" rounded-full bg-orange-400 absolute px-2 -mr-3 mb-5 ">{itemCount}</span>
                </div>
            </div>
        </div>

    )
}

export default Navbar