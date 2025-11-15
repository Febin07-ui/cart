import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function View() {
  return (
    <>
      <Header/>
      <div className="container py-5">
        <div className="row my-5">
          <div className="col-md-6 text-center">
            <img className='img-fluid' src="https://www.jiomart.com/images/product/original/rv70aehavj/auteur-exclusive-elegant-801-gold-platted-metal-roller-ball-pen-with-golden-trims-and-arrow-shaped-clip-premium-pen-for-gifting-men-women-office-school-college-roller-ball-pen-product-images-orv70aehavj-p609318407-3-202406101912.png?im=Resize=(1000,1000)" alt="img" />
            <div className='d-flex justify-content-evenly mt-5'>
              <button className='btn btn-primary'>Add to wishlist</button>
              <button className='btn btn-success'>Add to Cart</button>
            </div>
          </div>
          <div className="col-md-6">
            <h1>title</h1>
            <h3 className='text-danger'>$ price</h3>
            <h5>Brand :</h5>
            <h5>Category :</h5>
            <h4>Description :</h4>

            <h4 className='my-3'>Client Reviews</h4>
            <div className="border rounded p-3 shadow">
              <p><span className='fw-bolder'>Username :</span>Michel</p>
              <p>Rating : 3 <FontAwesomeIcon className='text-warning' icon={faStar}/></p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default View