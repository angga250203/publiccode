import React, { useEffect } from 'react';
import { FiMail } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';
import AnimatedTextCharacter from '../components/animation/Animated';
import Herosvg from './svg/herosvg';

function Hero() {
  const { ref, inView } = useInView({
		rootMargin: '-100px',
	});

  useEffect(() => {
		console.log(inView);
	}, [inView]);

  return (
   <div className= 'bg h-[100vh]  md:h-[60vh] lg:h-screen'>
     <div className="z-10  w-full object-cover h-[100vh] md:h-full absolute left-0  ">
       <img src="../aset/hero-pattern-bg-lg.png" className='h-[100vh] object-cover -mt-12 '/>
       <img src="../aset/hero-guy-1.png" className='absolute bottom-0 mt-24  md:-mt-[50vh]'/>
       </div>
     
    <div className='max-w-6xl  mx-auto  md:px-7  '>

              <div className='text-4xl text-center -mt-24 leading-relaxed  lg:text-5xl font-poppins font-bold text-white'>
              <h3> Laynan Pembuatan Website Yang anda Butuhkan</h3>
            </div>
                <p className='text-xl text-center mt-5 px-3 mb-7 text-gray-300'>Buat website dengan waktu cepat,praktis dan langsung pakai tanpa banyak tunggu</p>
            <div ref={ref} className='relative flex '>
              <div className='absolute   h-[100vh] w-full  top-0'>
                <a href='' className={inView ? 'awal' : 'corner z-50'}>{inView ? (
									<>Contact</>
								) : (
									<FiMail color="white" size="2.3rem " className='bg-blue-500 w-16 h-16 px-2 py-2 rounded-full' />
								)}</a>
              </div>
              
            </div>   
          
            </div>
          
        </div>


   
  )
}

export default Hero