import { configureStore } from '@reduxjs/toolkit'
import incDec from './reducer/incDec'
import incDecRooms from './reducer/incDecRooms'

export default configureStore({
  reducer: {
    counter:incDec,
    counterRooms:incDecRooms,
  }
})