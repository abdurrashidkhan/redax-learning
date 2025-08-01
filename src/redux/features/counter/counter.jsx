import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState = {
  count : 0
}

const  counterSlice =createSlice ({
  name:'counter',
  initialState,
  reducers:{
    increment : (state) =>{
      state.count = state.count + 1 
    },
    decrement: (state) => {
      state.count = state.count - 1 
    }
  }
})
export const {increment , decrement } = counterSlice.reducer
export default counterSlice.reducer
