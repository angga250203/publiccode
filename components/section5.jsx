import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import  SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/css/autoplay';
import "swiper/css/pagination";
import 'swiper/css';

function Section5() {
    SwiperCore.use([Autoplay]);
  return (
<>
    <div className="max-w-6xl mx-auto text-center py-32">
        <h3 className='text-2xl font-semibold text-gray-500'>Testimoni Kami</h3>
        <h2 className='text-4xl font-bold text-blue-500'>Apa Kata Mereka?</h2>
    </div>
    <div className='max-w-6xl -mt-12 mx-auto flex flex-wrap pb-12 justify-center px-3 '>
         <Swiper
   modules={[Autoplay, Pagination]}
   autoplay={{
    delay: 2500,
    pauseOnMouseEnter: true,
    disableOnInteraction: false
   }}
loop
      spaceBetween={10}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='cursor-grab'
    >
         <SwiperSlide>
        <div className='w-full rounded-xl shadow-2xl border-2 border-blue-500 px-4 py-3'>
            <p className='text-gray-500 italic'>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "</p>
            <h3 className='mt-5 font-semibold text-xl text-blue-400'>Bagaskoro</h3>
            <p className='text-lg text-gray-300'>CEO pt.woodenGo</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-full rounded-xl shadow-2xl border-2 border-blue-500 px-4 py-3'>
            <p className='text-gray-500 italic'>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "</p>
            <h3 className='mt-5 font-semibold text-xl text-blue-400'>Bagaskoro</h3>
            <p className='text-lg text-gray-400'>ceo pt.woodenindonesia</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-full rounded-xl shadow-2xl border-2 border-blue-500 px-4 py-3'>
            <p className='text-gray-500 italic'>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "</p>
            <h3 className='mt-5 font-semibold text-xl text-blue-400'>Bagaskoro</h3>
            <p className='text-lg text-gray-400'>ceo pt.woodenindonesia</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-full rounded-xl shadow-2xl border-2 border-blue-500 px-4 py-3'>
            <p className='text-gray-500 italic'>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "</p>
            <h3 className='mt-5 font-semibold text-xl text-blue-400'>Bagaskoro</h3>
            <p className='text-lg text-gray-400'>ceo pt.woodenindonesia</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-full rounded-xl shadow-xl border-2 border-blue-500 px-4 py-3'>
            <p className='text-gray-500 italic'>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "</p>
            <h3 className='mt-5 font-semibold text-xl text-blue-400'>Bagaskoro</h3>
            <p className='text-lg text-gray-400'>ceo pt.woodenindonesia</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-full rounded-xl shadow-xl border-2 border-blue-500 px-4 py-3'>
            <p className='text-gray-500 italic'>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "</p>
            <h3 className='mt-5 font-semibold text-xl text-blue-400'>Bagaskoro</h3>
            <p className='text-lg text-gray-400'>ceo pt.woodenindonesia</p>
        </div>
        </SwiperSlide>
        </Swiper>
    </div>
    </>
  )
}

export default Section5