import { createSlice } from "@reduxjs/toolkit";
import { registerAction , loginAction} from './actions'

export const loginSlice = createSlice ({
    name: 'login',
    initialState: {error: '', isLoad: false},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerAction.fulfilled, (state, action) => {
            state.isLoad = false
        })
        builder.addCase(registerAction.rejected, (state, action) => {
            state.isLoad = false
            state.error = action.payload as string
            
        })
        builder.addCase(registerAction.pending, (state, action) => {
            state.isLoad = true
        })
        
        builder.addCase(loginAction.fulfilled, (state, action) => {
            state.isLoad = false
        })
        builder.addCase(loginAction.rejected, (state, action) => {
            state.isLoad = false
            state.error = action.payload as string
            
        })
        builder.addCase(loginAction.pending, (state, action) => {
            state.isLoad = true
        })
    }
})