import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import Book from '../components/Book'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Hero />
      <Banner />
      <Categories />
      <Book />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Home
