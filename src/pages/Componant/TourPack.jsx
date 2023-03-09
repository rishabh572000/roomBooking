import React from 'react';
import styles from '../../styles/tourPack.module.scss'
import { Card, Typography, Button, Tabs, Segmented , Collapse , Menu, theme } from 'antd';
import Image from 'next/image';
import imageOne from '../../Media/blog-4.jpg'

export default function TourPack() {
  const { TabPane } = Tabs;
  const { Panel } = Collapse;
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const onChange = (key) => {
  console.log(key);
};

  const { Title, Text } = Typography;

  const onTabChange = (e) =>{
    console.log(e)
  }

  const OfferCard = () =>{
    return(
      <>
        <Card bordered={false} style={{ width: 400, margin:10 }}>
          <div className={styles.up}>
            <div className={styles.content}>
              <Image src={imageOne} alt='image' width={150} height={100} className={styles.image} />
              <div className={styles.text}>
                
                <Title level={4}>Mohan shingh</Title>
                <Text type="secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos ab corrupti autem nihil ipsam.</Text>
              </div>
            </div>
          </div>
         
          <Button style={{position:'absolute', bottom:10, right:10}}>Mohan</Button>
        </Card>
      </>
    )
  }


return (
  <>
    <div className={styles.tourPack}>
      <Card title="Popular Destinations" bordered={false} style={{ fontSize: '50px' }}  extra={<Segmented onChange={onTabChange} options={['Manali', 'Rajgir', 'Goa', 'Shimla', 'Jaipur']} />} >
     
        <div className={styles.mainCard}>
       <OfferCard />
       <OfferCard />
       <OfferCard />
       <OfferCard />
       </div>
      </Card>
    </div>
    <div className={styles.tourPack}>
      <Card title="Popular Destinations" bordered={false} >
      <Collapse defaultActiveKey={['1']} onChange={onChange} accordion={true} style={{width: '80vw'}}>
      <Panel header="This is panel header 1" key="1">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 2" key="2">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 3" key="3">
        <p>{text}</p>
      </Panel>
    </Collapse>
    </Card>
     
    </div>




  </>
)
}
