import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


//action with asynchronous function call
export const getAllProducts = createAsyncThunk('products/getAllProducts',async()=>{
    const result =  await axios.get('https://dummyjson.com/products')
    // console.log(result.data.products)
    sessionStorage.setItem('products',JSON.stringify(result.data.products))
    return result.data.products

})

const productsSlice = createSlice({
    name:'products',
    initialState:{
        allProducts :[],
        loading:true,
        error:""
    },
    reducers:{
        //action are syncrpnous
    },
    //reducer to handle asyncronous 
    extraReducers:(builder)=>{
        builder.addCase(getAllProducts.fulfilled,(state,action)=>{
            state.allProducts = action.payload
            state.loading = false 
            state.error = ""
        })
        builder.addCase(getAllProducts.pending,(state)=>{
            state.allProducts = []
            state.loading = true 
            state.error = ""
        })
        builder.addCase(getAllProducts.rejected,(state)=>{
            state.allProducts = []
            state.loading = false 
            state.error = "Something went wrong!!! API Call failed..."
        })

        
    }
})

export default productsSlice.reducer