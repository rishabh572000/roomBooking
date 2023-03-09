import React, { useEffect, useState } from 'react';
import { Button, Modal,  Col, Row, Space } from 'antd';
import { CheckCircleTwoTone, CloseCircleOutlined, SmileTwoTone } from '@ant-design/icons';

const MyModal = ({status, message}) => {
  const [isModalOpen, setIsModalOpen] = useState(status);

  const showModal = () => {
    setIsModalOpen(true);
  };
  useEffect(()=>{
    console.log('rama', isModalOpen, status)
    setIsModalOpen(status)
  },[status])

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    
      <Modal title="Payment Status" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        
        <Row>
          <Col span={24} offset={8}>
          <Space direction="vertical">
            {status? <CheckCircleTwoTone twoToneColor="#52c41a" style={{fontSize:150}} /> :
            <CloseCircleOutlined twoToneColor="#52c41a" style={{fontSize:150}} /> }
            {message}
          </Space>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default MyModal;