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

export default function SearchRoom() {
  const { Title, Text } = Typography;
return (
  <>
    <div className={styles.searchRoom}>
      {/* <Card> */}
        <div className={styles.container}>
          <div className={styles.image}>
           <CarouselComp />
          </div>
          <div className={styles.details}>
            <div className={styles.heading}>
              <Title level={3}  style={{lineHeight:0}}>Collection O Hotel Lotus Near Dwarka Sector 9</Title>
              <Title  level={5} type="secondary"  style={{lineHeight:0.5}}>Near Nexa Showroom Sector 9 Dwarka, Delhi</Title>
            </div>
            <div className={styles.amenities}>
              <Text level={5}  className={styles.feature} ><CarOutlined /> Parking facility</Text>
              <Text level={5}  className={styles.feature}  ><WifiOutlined /> Free Wifi</Text>
              <Text level={5}  className={styles.feature} > <WarningOutlined /> Geyser</Text>
              <Text level={5}  className={styles.feature} ><PoweroffOutlined /> Power backup</Text>
            </div>
            <div className={styles.price}>
              <div className={styles.text}>
              <Title level={3} type='danger'>998.00</Title>
              <Title level={5} delete  type="secondary" style={{lineHeight:0, paddingLeft:10}}>2040.00</Title>
            </div>
            <div className={styles.buttons}>
              <Button size='large' className={styles.button}>View Details</Button>
              <Button  type="primary" size='large'  className={styles.button}>Book Now</Button>
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
