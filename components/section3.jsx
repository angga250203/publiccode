import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import  SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/css/autoplay';
import "swiper/css/pagination";
import 'swiper/css';
import Svg1 from './svg/svg1';
import Svg2 from './svg/svg2';
import Svg3 from './svg/svg3';
import Svg4 from './svg/svg4';
import {motion} from 'framer-motion'

function Section3() {
  SwiperCore.use([Autoplay]);
  return (
    <>
    <motion.div
              whileHover={{y:30 }}
              transition= {{ delay:4, duration:2,repeatType:"reverse",repeat:Infinity,repeatDelay:1 }}
              className='relative'>
          <img src='../aset/image 2.png' alt='' className='absolute w-[10rem] md:w-[18rem] left-12 md:left-24 rotate-12 -top-40  md:-top-60 z-30'/>
       </motion.div>
   <div className='max-w-6xl py-12 mx-auto flex flex-wrap '>
        <div className='w-full py-5 relative md:w-6/12 px-3'>
        <motion.div  
          animate={{x:30,y:40 }}
          transition= {{ delay:4, duration:2,repeatType:"reverse",repeat:Infinity,repeatDelay:1 }}
          className="w-[60px] blur-lg h-[60px] top-3 -z-10 rounded-full absolute bg-purple-400"></motion.div>
          <motion.div 
           animate={{x:-30 }}
           transition= {{ delay:1, duration:1,repeatType:"reverse",repeat:Infinity,}}
          className="w-[50px] h-[50px] blur-lg bottom-12 right-2 -z-10 rounded-full absolute bg-pink-500"></motion.div>

          <motion.div 
           animate={{x:-30 }}
           transition= {{ delay:1, duration:1,repeatType:"reverse",repeat:Infinity,}}
          className="w-[50px] h-[50px] blur-lg bottom-12 right-2 -z-10 rounded-full absolute bg-yellow-500"></motion.div>
           
          <motion.div 
          animate={{x:-30,y:40 }}
          transition= {{ delay:2, duration:2,repeatType:"reverse",repeat:Infinity,repeatDelay:1 }}
          className="w-[70px] blur-lg h-[70px] top-5 right-2 -z-10 rounded-full absolute bg-blue-300"></motion.div>
           <div className='py-12'>
          <h3 className='text-4xl lg:text-5xl font-bold   '>Memiliki <span className='text-blue-500'>website bisnis</span> itu penting banget!</h3>
          <p className='pt-5 pb-9 lg:text-xl text-gray-500'>website bisnis itu ibarat ‘rumah’ yang bisa dikunjungi para calon konsumen sebagai ‘tamu’, hanya dengan mencari di mesin pencarian,Sayang banget kalau bisnismu nggak memiliki website.</p>
          <button className="learn-more z-50">
                        <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                        </span>
                        <span className="button-text cursor-pointer">Konsultasi</span>
                    </button>
                    </div>
        </div>


        <div className='w-full text-center py-12 md:w-6/12 px-6  '>
        <Swiper
   modules={[Autoplay, Pagination]}
   autoplay={{
    delay: 2500,
    pauseOnMouseEnter: true,
    disableOnInteraction: false
   }}
loop
      spaceBetween={10}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='cursor-grab'
    >

<SwiperSlide>
            <div className=' relative  text-white px-3  py-16 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-xl shadow-2xl'>
            <div className='absolute left-1/2 -translate-x-1/2'>
              <Svg1/>
            </div>
              <h3 className='text-xl mt-36 font-semibold mb-2'>Menjangkau audiens lebih luas</h3>
              <p className='text-md text-gray-100'>Target audiens bisnis kamu mungkin sudah memiliki batasan yang bisa kamu sesuaikan untuk konten media sosial dan juga website bisnis. </p>
            </div>  
</SwiperSlide>
<SwiperSlide>
            <div className=' relative  text-white px-3  py-16 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-xl shadow-2xl'>
            <div className='absolute left-1/2 -translate-x-1/2'>
              <Svg2/>
            </div>
              <h3 className='text-xl mt-36 font-semibold mb-2'>Menjangkau audiens lebih luas</h3>
              <p className='text-md text-gray-100'>Target audiens bisnis kamu mungkin sudah memiliki batasan yang bisa kamu sesuaikan untuk konten media sosial dan juga website bisnis. </p>
            </div>  
</SwiperSlide>
<SwiperSlide>
            <div className=' relative  text-white px-3  py-16 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-xl shadow-2xl'>
            <div className='absolute left-1/2 -translate-x-1/2'>
              <Svg3/>
            </div>
              <h3 className='text-xl mt-36 font-semibold mb-2'>Menjangkau audiens lebih luas</h3>
              <p className='text-md text-gray-100'>Target audiens bisnis kamu mungkin sudah memiliki batasan yang bisa kamu sesuaikan untuk konten media sosial dan juga website bisnis. </p>
            </div>  
</SwiperSlide>
<SwiperSlide>
            <div className=' relative  text-white px-3  py-16 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-xl shadow-2xl'>
            <div className='absolute left-1/2 -translate-x-1/2'>
              <Svg4/>
            </div>
              <h3 className='text-xl mt-36 font-semibold mb-2'>Menjangkau audiens lebih luas</h3>
              <p className='text-md text-gray-100'>Target audiens bisnis kamu mungkin sudah memiliki batasan yang bisa kamu sesuaikan untuk konten media sosial dan juga website bisnis. </p>
            </div>  
</SwiperSlide>




</Swiper>
        </div>
   
    </div>
    </>
  )
}

export default Section3