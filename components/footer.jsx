import React from 'react'

function Footer() {
  return (
    <div className='bg-blue-800 '>
        <div className="max-w-6xl mx-auto py-20 relative ">
            <h3 className='text-center text-4xl font-bold font-poppins text-white'>Apakah anda tertarik dengan kami?</h3>
            <p className='text-center text-gray-200 text-xl semi-bold'>kontak kami untuk konsultasi mengenai web anda</p>
            <a className='bg-white text-blue-500 py-2 px-5 absolute -translate-x-1/2 left-1/2 mt-16 rounded-2xl text-xl font-semibold '>contact</a>
        </div>
        <div className='max-w-6xl mx-auto flex justify-center items-center gap-12 mt-24 py-3 '>
            <a className=''>
                <img src="../aset/fb.svg" className='w-6' alt="" />
            </a>
            <a className=''>
                <img src="../aset/linked.svg" className='w-6' alt="" />
            </a>
            <a className=''>
                <img src="../aset/ig.svg" className='w-6' alt="" />
            </a>

        </div>
        <p className='text-white text-center bg-blue-900'>Develop By Angga.dev</p>
    </div>
  )
}

export default Footer