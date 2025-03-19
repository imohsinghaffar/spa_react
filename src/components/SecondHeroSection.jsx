import React from 'react'
import Buttons from './Buttons'

const SecondHeroSection = ({flex, img, display, secHead}) => {
  return (
    <>
    <div className={`flex flex-${flex} items-center justify-center w-full px-42 gap-8`}>
        <div className='flex flex-col w-[50%]'>
        <h1 className='text-3xl font-medium mb-8'>{secHead}</h1>
        <p className='mb-8 pr-40 text-md font-sm text-[#6e6e6e]'>Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.</p>
        <p className='mb-8 pr-40 text-md font-medium text-[#6e6e6e]'>Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer</p>
        <div className={`${display}`}>
        <Buttons
            btnText="Contact Us"
            bg="[#1998ff]"
            textColor="white"
            borderColor="[#3CA8FF]"
            borderWidth="1"
            textHoverColor="[#3CA8FF]"
          />
      </div>
      </div>
      <div className='flex items-center justify-center w-[50%]'>
        <img src={img} alt="image not found" />
      </div>
    </div>
    </>
  )
}

export default SecondHeroSection
