import React from 'react'
import HeroSection from '../components/Blogs/HeroSection';
import BlogCard from '../components/Blogs/BlogCard'
export const metadata = {
    title: 'Market Updates - Market Mavens',
    description:
      'Stay informed with our daily trading updates. Get the latest insights and trends to enhance your market strategies.',
  };

const page = () => {
  return (
    <>
    <HeroSection />
    <BlogCard />

    </>
  )
}

export default page