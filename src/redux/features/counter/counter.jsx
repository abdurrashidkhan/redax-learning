import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState = {
  count : 0
}

const  counterSlice =createSlice ({
  name:'counter',
  initialState,
  reducers:{}
})
export default counterSlice.reducer
