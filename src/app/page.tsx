import React from 'react'
import Hero from '@/components/Hero'
import Clogo from '@/components/Clogo'
import Featured from '@/components/Featured'
import Categories from '@/components/Categories'
import Product from '@/components/Product'
import OurProduct from '@/components/Ourproduct'
import Payment from '@/components/payment'
import SignUpForm from './SignUpForm/Page'

const page = () => {
  return (
    <div>
      <Hero/>
      <Clogo/>
      <Featured/>
      <Categories/>
      <Product/>
      <OurProduct/>
      <SignUpForm/>
      <Payment/>
    </div>
  )
}

export default page