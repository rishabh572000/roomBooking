import React from 'react'
import styles from '../../../styles/searchRoom.module.scss';
import room2 from '../../../Media/room/room-2.jpg'
import Image from 'next/image';
import { Card, Typography, Button, Divider  } from 'antd';
import {
  WifiOutlined,
  PoweroffOutlined,
  CarOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import CarouselComp from '../Reuse/CarouselComp';
import Link from 'next/link';

export default function SearchRoom({value}) {
  const { Title, Text } = Typography;
return (
  <>
    <div className={styles.searchRoom}>
      {/* <Card> */}
        <div className={styles.container}>
          <div className={styles.image}>
           <CarouselComp docs={value?.docs} />
          </div>
          <div className={styles.details}>
            <div className={styles.heading}>
              <Title level={3}  style={{lineHeight:0}}>{value?.hotel_name}</Title>
              <Title  level={5} type="secondary"  style={{lineHeight:0.5}}>{value?.address}</Title>
            </div>
            <div className={styles.amenities}>
              <Text level={5}  className={styles.feature} ><CarOutlined /> Parking facility</Text>
              <Text level={5}  className={styles.feature}  ><WifiOutlined /> Free Wifi</Text>
              <Text level={5}  className={styles.feature} > <WarningOutlined /> Geyser</Text>
              <Text level={5}  className={styles.feature} ><PoweroffOutlined /> Power backup</Text>
            </div>
            <div className={styles.price}>
              <div className={styles.text}>
              <Title level={3} type='danger'>{value?.price}</Title>
              <Title level={5} delete  type="secondary" style={{lineHeight:0, paddingLeft:10}}>{value?.price *2.5}</Title>
            </div>
            <div className={styles.buttons}>
              <Button size='large' className={styles.button}>View Details</Button>
              <Button  type="primary" size='large'  className={styles.button}><Link href={{ pathname: '/Componant/Checkin', query: {id:value?._id} }}>Book Now</Link></Button>
            </div>
            </div>
          </div>
        </div> 
        <Divider />
      {/* </Card> */}
    </div>
  </>
)
}
