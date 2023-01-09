
import React from 'react'
import Section3 from './section3'
import {jasa} from '../components/data/data'
import {motion} from 'framer-motion'
import Herosvg from '../components/svg/herosvg'

function Section2() {
  return (
  <> 
    <div className=''>
        <div className="max-w-6xl flex px-5 md:px-0   md:space-x-24 py-24  flex-wrap mx-auto">
            <div className='w-full md:w-6/12 py-10'>
                <h1 className='text-4xl font-bold text-blue-500'>Public Code</h1>
                <h1 className=' mb-12 mt-2 text-xl  text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</h1>
                <button className="learn-more z-50">
                        <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                        </span>
                        <span className="button-text cursor-pointer">Learn More</span>
                    </button>
                
            </div>
            <div className='w-full justify-center  md:w-5/12'>
              <Herosvg/>
              <motion.div
              animate={{y:30 }}
              transition= {{ delay:4, duration:2,repeatType:"reverse",repeat:Infinity,repeatDelay:1 }}
              className='relative'>
          <img src='../aset/image 1.png' alt='' className='absolute w-[13rem] md:w-[25rem] right-3 -rotate-12 top-12 z-30'/>
       </motion.div>
            </div>
           
        </div>
        <div className='bg4 -z-20 rounded-[2rem] bg-fixed'>
        <div className='mt-5 max-w-6xl mx-auto px-5 text-center justify-center py-24'>
      <h3 className='text-3xl text-white md:text-4xl font-semibold font-poppins '>Apa yang dapat kami Lakukan?</h3>

    <div className="lg:space-x-28 flex mb-12 px-7  flex-wrap text-center justify-center  py-12  ">
    {jasa.map((item) => {
        return(
        <div className='w-full bg-gradient-to-r  from-sky-100 mb-12 py-8 rounded-2xl shadow-2xl to-white z-20 md:w-3/12 px-5 relative' key={item.id}>
          <motion.div 
          animate={{x:30 }}
          transition= {{ delay:4, duration:2,repeatType:"reverse",repeat:Infinity,repeatDelay:1 }}
          className="w-[100px] blur-lg h-[100px] bottom-3 -z-10 rounded-full absolute bg-purple-300"></motion.div>
          <motion.div 
           animate={{x:-30 }}
           transition= {{ delay:1, duration:1,repeatType:"reverse",repeat:Infinity,}}
          className="w-[50px] h-[50px] blur-lg bottom-12 right-2 -z-10 rounded-full absolute bg-purple-300"></motion.div>
           
          <motion.div
            animate={{x:-30,y:40 }}
            transition= {{ delay:1, duration:2,repeatType:"reverse",repeat:Infinity,}}
          className="w-[70px] blur-lg h-[70px] top-5 right-2 -z-10 rounded-full absolute bg-blue-300"></motion.div>
           
            <img
            className='px-12 md:px-8 py-3'
            src={item.img}
            />
            <h3 className='text-xl text-blue-500 font-bold'>{item.title}</h3>
            <p className='text-gray-700'>{item.desc}</p>
        </div>

        )
    })}

      
</div>
        </div>  
       
        </div>
   

    
     
</div>  


   
</>   


  )
}

export default Section2