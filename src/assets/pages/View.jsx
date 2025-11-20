import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import {useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../../redux/slices/wishlistSlice'
import Swal from 'sweetalert2'
import { addToCart } from '../../redux/slices/cartSlice'

function View() {
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const userCart = useSelector(state=>state.cartReducer)

  const dispatch = useDispatch()
  const {id} = useParams()
  

  console.log(id)

  const [product,setProduct] = useState({})
  
  console.log(product)
  useEffect(()=>{
    if(sessionStorage.getItem("products")){
      const allProducts = JSON.parse(sessionStorage.getItem("products"))
      setProduct(allProducts.find(item=>item.id==id))
    }
  },[])

  const handleWishlist = () =>{
    const existingProduct = userWishlist?.find(item=>item.id==id)
    if(existingProduct){
      Swal.fire({
        title: 'Sorry',
        text: 'Product alredy in your wishlist',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }else{
      dispatch(addToWishlist(product))
    }
  }

  const handleCart = () =>{
    const existingProduct = userCart?.find(item=>item.id==id)
    dispatch(addToCart(product))
    Swal.fire({
        title: 'Completed',
        text: existingProduct?`Quantity of ${product.title}, is updated successfully `: `Product added to your cart...`,
        icon: 'success',
        confirmButtonText: 'Ok'
      })
  }


  return (
    <>
      <Header/>
      <div className="container py-5">
        <div className="row my-5">
          <div className="col-md-6 text-center">
            <img className='img-fluid' src={product?.images} alt="img" />
            <div className='d-flex justify-content-evenly mt-5'>
              <button onClick={handleWishlist} className='btn btn-primary'>Add to wishlist</button>
              <button onClick={handleCart} className='btn btn-success'>Add to Cart</button>
            </div>
          </div>
          <div className="col-md-6">
            <h1>{product?.title}</h1>
            <h3 className='text-danger'>$ {product?.price}</h3>
            <h5>Brand : {product?.brand}</h5>
            <h5>Category :{product?.category}</h5>
            <h4>Description :{product?.description}</h4>

            <h4 className='my-3'>Client Reviews</h4>
            {
              product?.reviews?.map((item,index)=>(
                <div key={index} className="border rounded p-3 shadow">
                  <p><span className='fw-bolder'>{item?.reviewerName} :</span>{item?.comment}</p>
                  <p>Rating : {item?.rating} <FontAwesomeIcon className='text-warning' icon={faStar}/></p>
                </div>
              ))
            }
           

          </div>
        </div>
      </div>
    </>
  )
}

export default View