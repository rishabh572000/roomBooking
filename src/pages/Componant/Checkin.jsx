import React, {useState} from 'react';
import { Card, Space, Button, Divider , Form, Input, Typography, Col, Row  } from 'antd';
import styles from '../../styles/checkin.module.scss'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router';
import { apiPost } from '@/utils/apiFetch';
import MyModal from './Reuse/MyModal';

export default function Checkin() {
    const router = useRouter();
    const formInput = useSelector(state => state.searchInput.value)
    const allRoomSearch = useSelector(state => state.allRoomSearch.value)
    const myRoom = allRoomSearch?.filter((val, ind)=>{
      if(val?._id===router.query?.id){
        return val
      }
    })
    const { Title } = Typography;

    const [data, setData] = useState()
    const onFinish = async (values) => {
        try{
         const paylod = {
            hotel_name: myRoom[0]?.hotel_name,
            address: myRoom[0]?.address,
            price: myRoom[0]?.price, 
            discount: 120, 
            payable_amount: myRoom[0]?.price-120, 
            checkIn: formInput?.checkin,
            checkOut: formInput?.checkout, 
            no_of_room: formInput?.rooms, 
            guest: formInput?.guest,
            phone: parseInt(values?.phone)
          }
          const searchRoom = await apiPost('v1/rooms/room-booking', {...paylod, ...values})
          setData(searchRoom?.data)
          console.log("🚀 ~ file: Checkin.jsx:36 ~ onFinish ~ searchRoom:", searchRoom)
        }
        catch(err){
          console.log(err)
        }
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
return (
  <>
    <div className={styles.checkin}>
     <div className={styles.left}>
        <Card type="inner" size="default" title="Enter your details">
          <p>We will use these details to share your booking information</p>

        <Form name="basic" layout="vertical" initialValues={{ remember: true, }} onFinish={onFinish} onFinishFailed={onFinishFailed}  autoComplete="off" >
        <Form.Item
            label="Full Name"
            name="name"
            rules={[
            {
            required: true,
            message: 'Please enter your name!',
            },
            ]}
        >
        <Input />
        </Form.Item>

        <Form.Item
            label="Email Address"
            name="email"
            rules={[
            {
            required: true,
            message: 'Please enter your email!',
            },
            ]}
        >
        <Input />
        </Form.Item>

        <Form.Item
            label="Phone Number"
            name="phone"
            rules={[
            {
            required: true,
            message: 'Please enter your phone!',
            },
            ]}
        >
        <Input />
        </Form.Item>

        <Form.Item >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
        </Form.Item>

        </Form>
        </Card>
     </div>
     <div className={styles.right}>  
        <Card type="inner" size="default">
          <Title level={4}>We will use these details to share your booking information</Title>
            <Row>
                <Col span={16}><Title level={5} type="secondary">{formInput?.checkin}  {formInput?.checkout}</Title></Col>
                <Col span={8}><Title level={5} type="secondary">{formInput?.guest}Guest, {formInput?.rooms}Room</Title></Col>
            </Row>
            <Row>
                <Col span={12}><Title level={5} type="secondary">Classic</Title></Col>
            </Row>
            <Row>
                <Col span={20}><Title level={5} type="secondary">Room price for 1 Night X 2 Guests</Title></Col>
                <Col span={4}><Title level={5} type="secondary">{myRoom[0]?.price}</Title></Col>
            </Row>
            <Row>
                <Col span={20}>
                Instant discount
                </Col>
                <Col span={4} >
                  120
                </Col>
            </Row>
            <Divider />
            <Row>
                <Col span={20}><Title level={5}>Payable Amount</Title> </Col>
                <Col span={4}> <Title level={4}>{myRoom[0]?.price-120}</Title> </Col>
            </Row>
        </Card>
     </div>
    </div>

    <div className={styles.modal}>
      {data?.status ? <MyModal status={data?.status} message={data?.message} /> : null}
    </div>
  </>
)
}
