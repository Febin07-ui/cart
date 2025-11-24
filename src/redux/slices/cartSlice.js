import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
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
        },
        removeCartItem:(state,action)=>{
           return state.filter(item=>item.id!=action.payload)
        },
        incrementCartItem:(state,action)=>{
            const existingProducts = state.find(item=>item.id==action.payload.id)
            existingProducts.quantity++
            existingProducts.totalPrice = existingProducts.quantity * existingProducts.price
            const remainingProducts = state.filter(item=>item.id!=existingProducts.id)
            state = [...remainingProducts,existingProducts]
        },
        decrementCartItem:(state,action)=>{
            const existingProducts = state.find(item=>item.id==action.payload.id)
            existingProducts.quantity--
            existingProducts.totalPrice = existingProducts.quantity * existingProducts.price
            const remainingProducts = state.filter(item=>item.id!=existingProducts.id)
            state = [...remainingProducts,existingProducts]
        },
        emptyCart:(state)=>{
            return []
        }

    }
})

export const {addToCart,removeCartItem,incrementCartItem,decrementCartItem,emptyCart } = cartSlice.actions
export default cartSlice.reducer