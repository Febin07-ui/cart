import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../redux/slices/productSlice'



function Home() {

  

  const dispatch =useDispatch()
  const {loading,allProducts,error} = useSelector(state=>state.productReducer)
  
  // console.log(allProducts)

  useEffect(()=>{
    dispatch(getAllProducts())
  },[])

  return (
    <>
      <Header/>
      <div className='container py-5 '>
        {
          loading?
            <div className='text-center my-5 fw-bolder fs-5'><img src="https://cdn.pixabay.com/animation/2023/10/08/03/19/03-19-26-213_512.gif" alt="" /></div>
          :
          <div className="row my-5">
          {
            allProducts?.length>0?
              allProducts?.map(product=>(
              <div key={product?.id} className="col-md-3 mb-2">
                <Card>
                  <Card.Img height={'250px'} variant="top" src={product?.thumbnail} />

                  <Card.Body>
                    <Card.Title>{product?.title}</Card.Title>
                    <Link to={`/products/${product.id}/view`} className='btn btn-secondary' >View More</Link>
                  </Card.Body>
                </Card>
              </div>
              )) 
              :
              <p className='fs-5 fw-bold my-5'>Product Not Found</p>
          }
          </div>
          
        }

      </div>
    </>
  )
}

export default Home