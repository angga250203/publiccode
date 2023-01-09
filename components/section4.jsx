import React from 'react'
import {motion} from 'framer-motion'

function Section4() {
  return (
    
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap md:space-x-28 items-center">
          <div className="w-full md:w-4/12 relative py-12 text-center mt-12 ">
            <h3 className='text-4xl font-bold  text-blue-500'>Kenapa Harus kami?</h3>
            <p className='text-gray-500 py-3'>apa saja kelebihan jika anda memilih kami dalam urusan pembuatan maupun pengembang web</p>
            <img src="../aset/image 3.png" className='px-12 md:px-0' alt="icon" />
          </div>
          <div className="w-full md:w-6/12 py-3 md:py-12">
            <div className="flex flex-wrap px-3 justify-center md:px-0">

              <motion.div 
               whileHover={{ scale: 1.1 }}
              className="w-[5rem] h-[5rem] md:w-[18rem] md:h-[18rem] py-20  bg-yellow-300 ">
                <img src="../aset/toolkit.svg" alt="toolkit" className='w-24 mx-auto ' />
                <p className='text-center px-5 py-2 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </motion.div>
              <motion.div 
              whileHover={{ scale: 1.1 }}
              className=" w-[5rem] h-[5rem] md:w-[18rem] md:h-[18rem] py-20 bg-blue-500">
                 <img src="../aset/jam.svg" alt="toolkit" className='w-24 mx-auto ' />
                <p className='text-center px-5 py-2 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </motion.div>
              <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-[5rem] h-[5rem] md:w-[18rem] md:h-[18rem] py-20 bg-pink-500">
                 <img src="../aset/cs.svg" alt="toolkit" className='w-24 mx-auto ' />
                <p className='text-center px-5 py-2 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </motion.div>
              <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-[5rem] h-[5rem] py-20 md:w-[18rem] md:h-[18rem] bg-purple-600">
                  <img src="../aset/tutor.svg" alt="toolkit" className='w-24 mx-auto ' />
                <p className='text-center px-5 py-2 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </motion.div>
            </div>
          </div>
        </div>
        </div>
  
  )
}

export default Section4