import { configureStore } from '@reduxjs/toolkit'
import AllRoomsSearch from './reducer/AllRoomsSearch'
import incDec from './reducer/incDec'
import incDecRooms from './reducer/incDecRooms'
import searcInput from './reducer/searcInput'

export default configureStore({
  reducer: {
    counter:incDec,
    counterRooms:incDecRooms,
    allRoomSearch:AllRoomsSearch,
    searchInput:searcInput,
  }
})