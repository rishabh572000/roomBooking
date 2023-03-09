import style from '../../styles/booking.module.scss';
import { Input, Button } from 'antd';
import { decrement, increment } from '../app/reducer/incDec';
import { decrementRooms, incrementRooms } from '../app/reducer/incDecRooms';
import { useSelector, useDispatch } from 'react-redux'


export default function IncDecInput({label}) {
  const count = useSelector(state => state?.counter?.value)
  const rooms = useSelector(state => state?.counterRooms?.value)
  
  const dispatch = useDispatch()
  const inceremen = () =>{
    if(label=='guests'){
      dispatch(increment())
    }
    else{
      dispatch(incrementRooms())
    }
  }
  const decremen = () =>{
    if(label=='guests'){
      dispatch(decrement())
    }
    else{
      dispatch(decrementRooms())
    }
  }
return (
  <>
    <div className={style.IncDecInput}>
      <div className={style.inputSet}>
      <Button type="primary" size='large' onClick={() => decremen()}>- 1</Button>
      <Input className={style.input} placeholder="Basic usage" size='large' value={label=='guests' ? count : rooms}/>
      <Button type="primary" size='large' onClick={() => inceremen()}>+ 1</Button>
      </div>
    </div>
  </>
)
}
