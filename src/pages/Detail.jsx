import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductsDetails } from '../redux/features/productSlice'
import DetailsComp from '../components/details/DetailsComp'
import Loading from '../components/Loading'

const Detail = () => {

  const { id } = useParams()
  const dispatch = useDispatch()
  const { productsDetail, productsDetailSTATUS } = useSelector(state => state.products)

  useEffect(() => {

    dispatch(getProductsDetails(id))
  }, [dispatch, id])
  console.log(productsDetail)
  return (
    <div>
      {

        productsDetailSTATUS == 'LOADING' ? <Loading /> : <DetailsComp productsDetail={productsDetail} />
      }


    </div>
  )
}

export default Detail