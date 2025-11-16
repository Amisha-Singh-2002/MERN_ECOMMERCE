import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../Components/NewsLetterBox'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=""/>
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                <p className=''>Welcome to Forever — your one-stop online store for quality products at great prices. We offer a wide range of items, fast delivery, and a smooth shopping experience. Our goal is simple: to make online shopping easy, reliable, and enjoyable for everyone.</p>
                <p className=''>At Forever, we bring you handpicked products that match your lifestyle. From essentials to the latest trends, we focus on quality, affordability, and quick service. Our mission is to make your shopping simple, secure, and satisfying — every single time.</p>
                <b className='text-gray-800'>Our Mission</b>
                <p className=''>To provide a seamless online shopping experience that exceeds customer expectations through exceptional service and a curated selection of products.</p>
          </div>
      </div>
      <div className='text-4xl py-4'>
         <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Quality Assurance:</b>
              <p className='text-gray-600'>At Forever, we believe that trust starts with quality. Every product we offer goes through strict checks to ensure it meets our standards for durability, safety, and performance. Our team works daily to monitor suppliers, review customer feedback, and improve processes so you always receive the best. With us, quality isn’t just a promise — it’s our priority. </p>
          </div>
           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Convenience:</b>
              <p className='text-gray-600'>At Forever, we understand that convenience is key to a great shopping experience. That’s why we offer a user-friendly website, fast shipping, and easy returns. Our goal is to make your shopping journey as smooth as possible, so you can focus on finding the perfect products without any hassle.</p>
          </div>
           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Exceptional Customer Service:</b>
              <p className='text-gray-600'>At Forever, we are committed to providing exceptional customer service. Our team is always ready to assist you with any inquiries or concerns you may have. We value your feedback and continuously strive to improve our services to ensure your satisfaction. With us, you’re not just a customer — you’re part of the Forever family.</p>
          </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About