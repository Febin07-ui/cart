import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Cart() {
  return (
    <>
      <Header/>
        <div className='container py-5'>
          <div className="my-5">
            <h1 className='text-muted fw-bold my-3'>Cart Summary</h1>
            <div className='row'>
              <div className="col-md-8 border rounded p-5">
                <table className='table'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product</th>
                      <th>Image</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>...</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>title</td>
                      <td><img width={'50px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIMgndqDLqHSpzAvgD1CYtWgyI8i83Vh3UWQ&s" alt="" /></td>
                      <td>
                        <div className="d-flex">
                          <button className='btn fd-3 fw-bold'>-</button>
                          <input value={10} style={{width:'50px'}} className='form-control' type="text" readOnly/>
                          <button className='btn fd-3 fw-bold'>+</button>
                        </div>
                      </td>
                      <td>$ 200</td>
                      <td><button className='btn text-danger'><FontAwesomeIcon icon={faTrash}/></button></td>
                    </tr>
                  </tbody>

                </table>
              </div>
              <div className="col-md-4">
                <div className="border rounded p-5">
                  <h3 className='fw-bold'>Total Amount : <span className='text-danger'>$19.32</span></h3>
                  <hr />
                  <div className='d-grid mt-2'>
                    <button className="btn btn-success">Check Out</button>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
    </>
  )
}

export default Cart