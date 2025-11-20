import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducer:{
        //add to cart  action.payload is product to be added in cart
        addToCart:(state,action)=>{
            const existingProduct = state.find(item=>item.id==action.payload.id)
            if(existingProduct){
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
                const remainingProducts = state.filter(item=>item.id!=existingProduct.id)
                state = [...remainingProducts,existingProduct]
            }else{
                state.push({...action.payload,quantity:1,totalPrice:action.payload.price})
            }
        }
    }
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer