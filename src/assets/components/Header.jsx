import { faCartShopping, faHeart, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Nav,Navbar,Container, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <Navbar expand="lg" className="bg-primary position-fixed w-100">
      <Container>
        <Navbar.Brand><Link to={'/'} className='text-decoration-none text-light fw-bold'><FontAwesomeIcon icon={faTruckFast}/>Daily Cart </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-md-flex align-items-center gap-3">
            <Link to={'/wishlist'} className='text-white text-decoration-none fw-bold'> <FontAwesomeIcon className='text-danger' icon={faHeart}/> WishList<Badge pill bg='dark'>9</Badge> </Link>
            <Link to={'/cart'} className='text-white text-decoration-none fw-bold'> <FontAwesomeIcon className='text-white' icon={faCartShopping}/> Cart<Badge pill bg='dark'>19</Badge> </Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header