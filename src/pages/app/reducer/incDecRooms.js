import { createSlice } from '@reduxjs/toolkit'

export const incDecRooms = createSlice({
  name: 'counterRooms',
  initialState: {
    value: 1
  },
  reducers: {
    incrementRooms: state => {
      if(state.value<10){
        state.value += 1
      }
    },
    decrementRooms: state => {
      if(state.value>1){
        state.value -= 1
      }
    }
  }
})

export const { incrementRooms, decrementRooms } = incDecRooms.actions

export default incDecRooms.reducer