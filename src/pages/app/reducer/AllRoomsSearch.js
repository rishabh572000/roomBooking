import { createSlice } from '@reduxjs/toolkit'

export const AllRoomsSearch = createSlice({
  name: 'AllRoomsSearch',
  initialState: {
    value: 20
  },
  reducers: {
    allRooms: (state, action) => {
        state.value = action.payload
    },
  }
})

export const { allRooms } = AllRoomsSearch.actions

export default AllRoomsSearch.reducer