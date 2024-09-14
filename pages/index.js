import Image from 'next/image'
import { Inter } from 'next/font/google'
import Product from '../pages/Product'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   <h1></h1>
   <Product />
   </>
  )
}
