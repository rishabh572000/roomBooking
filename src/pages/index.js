import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Hero from './Componant/Hero'
import Header from './Componant/Header'
import BookingModal from './Componant/BookingModal'
import SearchRoom from './Componant/SearchResult/SearchRoom'
import App from './App'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600&display=swap" rel="stylesheet" />
      </Head>
     {/* <Hero /> */}
     <Header />
       <App />
     {/* <BookingModal /> */}
     {/* <SearchRoom /> */}
    </>
  )
}
