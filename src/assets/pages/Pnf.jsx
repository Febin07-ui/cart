import React from 'react'
import { Link } from 'react-router-dom'
function Pnf() {
  return (
     <div style={{ height: '80vh' }} className="d-flex justify-content-center align-items-center p-5 my-3 flex-column">
      <img 
        width={'50%'} 
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" 
        alt="page not found" 
      />
      <h1>404!</h1>
      <h4>Page Not Found</h4>
      <Link to={'/'} className="btn btn-success">
        Go to Home
      </Link>
    </div>
  )
}

export default Pnf