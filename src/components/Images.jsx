import React from 'react'
import one   from '../assets/images/hero/1.JPG'
import two   from '../assets/images/hero/2.JPG'
import three from '../assets/images/hero/3.JPG'

const Images = () => {
  return (
    <div className="relative max-w-[110rem] mx-auto overflow-hidden bg-white">
      <div className="flex justify-center gap-6 ">
        <div className="-ml-[400px] w-[900px] h-[500px] flex-shrink-0
                         border border-gray-200  overflow-hidden relative">
          <img src={one} alt="Left card" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}

export default Images
