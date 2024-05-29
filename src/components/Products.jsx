import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, getProductsCategory } from '../redux/features/productSlice'
import Loading from './Loading'
import ProductCard from './ProductCard'
import ReactPaginate from 'react-paginate';

const Products = ({category,sort}) => {
  const dispatch = useDispatch()
  const { products, productsStatus } = useSelector(state => state.products)


  console.log(products)
  useEffect(() => {
    if(category){
      dispatch(getProductsCategory(category))
    }else{
      dispatch(getProducts())

    }
    

  }, [dispatch,category])


  console.log(sort)

  const [itemOffset, setItemOffset] = useState(0);
  
  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const itemsPerPage=8;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };



  return (
    <div>


        {

          productsStatus == "LOADING" ? <Loading /> :
            <div className='flex flex-wrap justify-center items-center gap-2 ml-1'>
              {
                currentItems?.sort((a,b)=>sort == "artan" ? a.price-b.price : sort == "azalan" ? b.price-a.price:"")?.map((product, i) => (

                 
                    <ProductCard key={i}  product={product}/>
                  

                ))
              }

            </div>

        }

      <ReactPaginate
        className="paginate"
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />


    </div>
  )
}

export default Products