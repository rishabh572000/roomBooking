import React, {useState} from 'react'
import styles from '../../styles/header.module.scss';
import Image from 'next/image';
import logo from '../../Media/logo.png'
import { Typography, Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

export default function Header() {
  const { Title } = Typography;
  const [current, setCurrent] = useState('mail');

  const items = [
    {
      label: 'Home',
      key: 'mail',
      icon: <MailOutlined />,
    },
    {
      label: 'Login',
      key: 'app',
      icon: <AppstoreOutlined />,
    },
    {
      label: 'About us',
      key: 'SubMenu',
      icon: <SettingOutlined />,
      children: [
        {
          type: 'group',
          label: 'Contact us',
          children: [
            {
              label: 'Option 1',
              key: 'setting:1',
            },
            {
              label: 'Option 2',
              key: 'setting:2',
            },
          ],
        },

      ],
    },
 
  ];
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

return (
  <>
    <div className={styles.header}>
        <div className={styles.logoSection}>
            <Title level={4}>Bed&Beyond</Title>
        </div>
        <div className={styles.menuSection}>
          <Menu onClick={onClick} theme='dark' selectedKeys={[current]} mode="horizontal" items={items} />
        </div>
    </div>
  </>
)
}
