import {useState} from 'react'
import style from '../../styles/booking.module.scss';
import { Input, DatePicker, Button, Icon,Tooltip  } from 'antd';
import IncDecInput from './IncDecInput';
import { useSelector, useDispatch } from 'react-redux'
import { apiGet } from '@/utils/apiFetch';
import { EnvironmentOutlined } from '@ant-design/icons'
import Link from 'next/link';


export default function BookingModal() {
  const [input, setInput] = useState({})

  const rooms = useSelector(state => state?.counterRooms?.value)
  const guest = useSelector(state => state?.counter?.value)

const onChangeIn = (date, dateString, type) => {
    console.log(date, dateString, type);
    setInput({...input, checkin:dateString})
};
const onChangeOut = (date, dateString, type) => {
    setInput({...input, checkout:dateString})
};
const handleSubmit = () =>{
  console.log(rooms, 'guest', guest)
  console.log(input);
  
  apiGet('v1/rooms/search-rooms', {rooms, guest, ...input})
}

return (
<>
    <div className={style.bookingModal}>
      <div className={style.heading}>
        <h1>Booking Your Hotel</h1>
      </div>
      <form>
      <div className={style.form}>
        <div className={style.formGroup}>
        <p className={style.label}>Place:</p>
        <Input
        placeholder="Enter City Name"
        size='large'
        onChange={(e)=>setInput({...input, place:e.target.value})}
        suffix={<EnvironmentOutlined style={{ color: 'rgba(0,0,0,.45)' }} />}
        />
       
        </div>
        <div className={style.formGroup}>
        <p className={style.label}>Check In:</p>
        <DatePicker onChange={(date, dateString)=>onChangeIn(date, dateString, 'checkin')} size='large' className={style.date}/>
        </div>
        <div className={style.formGroup}>
        <p className={style.label}>Check Out:</p>
        <DatePicker onChange={(date, dateString)=>onChangeOut(date, dateString, 'checkout')} size='large' className={style.date}/>
        </div>
        <div className={style.formGroup}>
        <p className={style.label}>Guests:</p>
        <IncDecInput label='guests'/>
        </div>
        <div className={style.formGroup}>
        <p className={style.label}>Room:</p>
        <IncDecInput label='rooms'/>
        </div>
      </div>
      <Button size='large' warning onClick={()=>handleSubmit()}><Link href="/Componant/SearchResult/SearchRoom">Check Availability</Link></Button>
      </form>
    </div>
</>
)
}
