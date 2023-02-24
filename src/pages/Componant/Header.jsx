import React from 'react'
import styles from '../../styles/header.module.scss';
import Image from 'next/image';
import logo from '../../Media/logo.png'

export default function Header() {
return (
  <>
    <div className={styles.header}>
        <div className={styles.logoSection}>
            <Image src={logo} />
        </div>
        <div className={styles.dropdownSection}>
          <ul>
            <li>Home</li>
            <li>Rooms</li>
            <li>About us</li>
            <li>News</li>
            <li>Contact us</li>
          </ul>
        </div>
    </div>
  </>
)
}
