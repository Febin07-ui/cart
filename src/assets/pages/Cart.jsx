import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { removeCartItem , incrementCartItem,decrementCartItem, emptyCart } from '../../redux/slices/cartSlice'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function Cart() {
  const userCart = useSelector(state => state.cartReducer)
  const [sum,setSum] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    setSum(userCart?.reduce((acc,curr)=>acc+curr.totalPrice,0))
  },[userCart])

  const handleDecrementCart = (product)=>{
    if(product.quantity>1){
      dispatch(decrementCartItem(product))
    }else{
      dispatch(removeCartItem(product.id))
    }
  }

  const checkout = () => {
      dispatch(emptyCart())
      navigate('/')
      Swal.fire({
          title: 'Order placed Successfully...',
          text: "Thank you for purchasing with us",
          icon: 'success',
          confirmButtonText: 'Ok'
        })    
  }

  return (
    <>
      <Header />
      <div className='container py-5'>
        {
          userCart?.length > 0 ?
            <div className="my-5">
              <h1 className='text-muted fw-bold my-3'>Cart Summary</h1>
              <div className="row">
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
                      {
                        userCart?.map((product, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{product?.title}</td>
                            <td><img width={'50px'} src={product?.thumbnail} alt="" /></td>
                            <td>
                              <div className="d-flex">
                                <button onClick={()=>handleDecrementCart(product)} className='btn fd-3 fw-bold'>-</button>
                                <input value={product?.quantity}
                                  style={{ width: '50px' }}
                                  className='form-control'
                                  type="text"
                                  readOnly />
                                <button onClick={()=>dispatch(incrementCartItem(product))} className='btn fd-3 fw-bold'>+</button>
                              </div>
                            </td>
                            <td>{product?.price}</td>
                            <td>
                              <button onClick={()=>dispatch(removeCartItem(product?.id))} className='btn text-danger'>
                                <FontAwesomeIcon icon={faTrash} />
                              </button>
                            </td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                  <div className='float-end mt-3'>
                      <button onClick={()=>dispatch(emptyCart())} className='btn btn-danger me-2'>Empty Cart</button>
                      <Link to={'/'} className='btn btn-primary'>SHOP MORE</Link>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="border rounded p-5">
                    <h3 className='fw-bold'>
                      Total Amount :
                      <span className='text-danger'>${sum}</span>
                    </h3>
                    <hr />
                    <div className='d-grid mt-2'>
                      <button onClick={checkout} className="btn btn-success">Check Out</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            :
            <div className='text-center py-5'>
              <h3>Your cart is empty</h3>
            </div>
        }
      </div>
    </>
  )
}

export default Cart
