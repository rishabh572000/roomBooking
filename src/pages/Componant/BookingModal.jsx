import {useState} from 'react'
import style from '../../styles/booking.module.scss';
import { Input, DatePicker, Button, Icon,Spin , Space, Typography   } from 'antd';
import IncDecInput from './IncDecInput';
import { useSelector, useDispatch } from 'react-redux'
import { allRooms } from '../app/reducer/AllRoomsSearch';
import { inputData } from '../app/reducer/searcInput';
import { apiGet } from '@/utils/apiFetch';
import { EnvironmentOutlined } from '@ant-design/icons'
import Link from 'next/link';
import moment from 'moment/moment';



export default function BookingModal() {
  const [input, setInput] = useState({})
  const [load, setLoading] = useState(false)
  const rooms = useSelector(state => state?.counterRooms?.value)
  const guest = useSelector(state => state?.counter?.value)
  const { RangePicker } = DatePicker;
  const { Text } = Typography;
  
  const dispatch = useDispatch()

const checkingDate = (date, dateString) => {
  setInput({...input,checkin:dateString[0], checkout:dateString[1]})
};
const handleSubmit = async () =>{
  try{
    setLoading(true)
    const searchRoom = await apiGet('v1/rooms/search-rooms', {rooms, guest, ...input})
    dispatch(allRooms(searchRoom.data))
    dispatch(inputData({rooms, guest, ...input}))
  }
  catch(err){
    console.log(err)
  }
  // setLoading(false)
}

function disabledDate(current) {
  return current && (current < moment().startOf('day') || current > moment().add(60, 'days').endOf('day'));
}


return (
<>
<div className={style.background}>
  
    <div className={style.bookingModal}>
      <div className={style.heading}>
        <h3>Booking Your Hotel</h3>
      </div>
      <form>
      <div className={style.form}>
        <div className={style.formGroup}>
        <Text className={style.label}>Place:</Text>
        <Input
        placeholder="Enter City Name"
        size='large'
        onChange={(e)=>setInput({...input, place:e.target.value})}
        suffix={<EnvironmentOutlined style={{ color: 'rgba(0,0,0,.45)' }} />}
        />
       
        </div>
        <div className={style.formGroup}>
        <Text className={style.label}>Stay:</Text>
        <RangePicker
        format="DD-MM-YYYY"
        size='large' className={style.date}
        disabledDate={disabledDate}
        onChange={(date, dateString)=>checkingDate(date, dateString)}
        />
      </div>
        <div className={style.formGroup}>
        <Text className={style.label}>Guests:</Text>
        <IncDecInput label='guests'/>
        </div>
        <div className={style.formGroup}>
        <Text className={style.label}>Room:</Text>
        <IncDecInput label='rooms'/>
        </div>
       
      </div>
       <div className={style.formGroup}>
       {/* <Button type="primary" loading>
          Loading
        </Button> */}

      <Button size='large' onClick={()=>handleSubmit()}  ><Link href="/Componant/RoomSearchResult">Check Availability{load?<Spin/> :null}</Link></Button>
       </div>
      </form>
    </div>
</div>
</>
)
}
