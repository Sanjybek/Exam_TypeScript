import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './initialState'
import { descProduct, getProduct } from './actions'

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProduct.fulfilled, (state,actions) => {
            state.products = actions.payload
            state.isLoad = false
        })
        builder.addCase(getProduct.rejected, (state, actions) => {
            state.error = actions.payload as string
            state.isLoad = false
            state.products=[];
        })
        builder.addCase(getProduct.pending, (state) => {
            state.isLoad = true
        })

        builder.addCase(descProduct.fulfilled, (state,actions) => {
            state.product = actions.payload
            state.isLoad = false
        })
        builder.addCase(descProduct.rejected, (state, actions) => {
            state.error = actions.payload as string
            state.isLoad = false
        })
        builder.addCase(descProduct.pending, (state) => {
            state.isLoad = true
        })
        
    }
})