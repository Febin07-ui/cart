import React from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'

function Wishist() {
  return (
    <>
      <Header/>
      <div className='container py-5'>
        {/* Whishlist with content */}
        <div className='row my-5 '>
          <div className="col-md-3 mb-2">
            <Card>
              <Card.Img height={'250px'} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIMgndqDLqHSpzAvgD1CYtWgyI8i83Vh3UWQ&s" />
              <Card.Body>
                <Card.Title>My WishList</Card.Title>
                <div className='d-flex justify-content-evenly my-1'>
                  <button className='btn text-danger fs-4'> <FontAwesomeIcon icon={faHeartCircleXmark}/> </button>
                  <button className='btn text-success fs-4'> <FontAwesomeIcon icon={faCartPlus}/> </button>
                </div>
              </Card.Body>
            </Card>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Wishist