import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../redux/features/categorySlice'

const Category = ({setCategory}) => {

  const dispath = useDispatch()
  const { categories } = useSelector(state => state.categories)


  console.log(categories)

  useEffect(() => {

    dispath(getCategory())

  }, [dispath])


  return (
    <>
      <div className=' m-2 bg-slate-300 md:w-2/6  sm:w-3/6 p-2 max-h-screen'>


        <div className='border-b pb-1 text-xl pl-3 font-bold '>Kategori</div> 
        {
          categories.map((dt, i) => ( 
            <div onClick={()=>setCategory(dt)}  className=" flex  mt-3 cursor-pointer text-lg hover:bg-slate-100 rounded-full px-3 py-2 " key={i}>{dt}</div>


          ))

        }


      </div>

     


    </>
  )
}

export default Category