import React, { useState } from 'react'
import MySlider from '../components/MySlider'
import SortData from '../components/SortData'
import Category from '../components/Category'
import Products from '../components/Products'

const Home = () => {
const [sort,setShort]=useState(null)
const [category,setCategory]=useState(null)

  return (
    <>
      <MySlider />
      <SortData setShort={setShort}/>

      <div className='flex flex-sm-wrap'>
        <Category setCategory={setCategory}/>
        

        <Products  category={category} sort={sort}/>
      </div>
    </>
  )
}

export default Home