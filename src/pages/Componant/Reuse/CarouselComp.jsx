import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
import room2 from '../../../Media/room/room-2.jpg'
import styles from '../../../styles/reuse/Carousel.module.scss'

const CarouselComp = ({docs}) => (
  <Carousel autoplay>
   {docs?.map((val, ind)=>{
      return(
         <>
            <div>
               <Image src={room2} alt='' width='100%' height='100%' />
            </div>
         </>
      )
   })}
   
  </Carousel>
);

export default CarouselComp;