import React from 'react'
import Hero from '@/components/Hero'
import Clogo from '@/components/Clogo'
import Featured from '@/components/Featured'
import Categories from '@/components/Categories'
import Product from '@/components/Product'
import OurProduct from '@/components/Ourproduct'

const page = () => {
  return (
    <div>
      <Hero/>
      <Clogo/>
      <Featured/>
      <Categories/>
      <Product/>
      <OurProduct/>
    </div>
  )
}

export default page