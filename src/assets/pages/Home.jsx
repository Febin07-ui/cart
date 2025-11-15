import React from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Header/>
      <div className='container py-5 '>
        <div className="row my-5">
          <div className="col-md-3 mb-2">
            <Card>
              <Card.Img height={'250px'} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIMgndqDLqHSpzAvgD1CYtWgyI8i83Vh3UWQ&s" />
              <Card.Body>
                <Card.Title>HeadPhone</Card.Title>
                <Link to={'/products/id/view'} className='btn btn-secondary' >View More</Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home