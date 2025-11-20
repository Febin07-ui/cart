import { faCartShopping, faHeart, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Nav,Navbar,Container, Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function Header() {
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const userCart = useSelector(state=>state.cartReducer)
  
  return (
    <Navbar expand="lg" className="bg-primary position-fixed w-100 z-1">
      <Container>
        <Navbar.Brand><Link to={'/'} className='text-decoration-none text-light fw-bold'><FontAwesomeIcon icon={faTruckFast}/>Daily Cart </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-md-flex align-items-center gap-3">
            <Link to={'/wishlist'} className='text-white text-decoration-none fw-bold'> <FontAwesomeIcon className='text-danger' icon={faHeart}/> WishList<Badge pill bg='dark'>{userWishlist?.length}</Badge> </Link>
            <Link to={'/cart'} className='text-white text-decoration-none fw-bold'> <FontAwesomeIcon className='text-white' icon={faCartShopping}/> Cart<Badge pill bg='dark'>{userCart?.length}</Badge> </Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header