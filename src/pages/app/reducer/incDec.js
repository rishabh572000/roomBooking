import { createSlice } from '@reduxjs/toolkit'

export const incDec = createSlice({
  name: 'counter',
  initialState: {
    value: 1
  },
  reducers: {
    increment: state => {
      if(state.value<10){
        state.value += 1
      }
    },
    decrement: state => {
      if(state.value>1){
        state.value -= 1
      }
    }
  }
})

export const { increment, decrement } = incDec.actions

export default incDec.reducer