import React from 'react'
import SearchRoom from './SearchResult/SearchRoom'
import { useSelector } from 'react-redux'

export default function RoomSearchResult() {
    const allRoomSearch = useSelector(state => state.allRoomSearch.value)
return (
  <>
  {allRoomSearch?.map((val, ind)=> <SearchRoom value={val} key={ind} />)}

    
  </>
)
}
