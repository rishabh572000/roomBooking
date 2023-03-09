import { createSlice } from '@reduxjs/toolkit'

export const searchInput = createSlice({
  name: 'searchInput',
  initialState: {
    value: 20
  },
  reducers: {
    inputData: (state, action) => {
        state.value = action.payload
    },
  }
})

export const { inputData } = searchInput.actions

export default searchInput.reducer