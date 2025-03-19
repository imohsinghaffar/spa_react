import React from 'react'
import Buttons from './Buttons'

const SecondHeroSection = ({flex, img, display}) => {
  return (
    <>
    <div className={`flex flex-${flex} items-center justify-center w-full px-42 gap-8`}>
        <div className='flex flex-col w-[50%]'>
        <h1 className='text-3xl font-medium mb-8'>We Offer a Full Range <br /> of Digital Marketing Services!</h1>
        <p className='mb-8 pr-40 text-md font-sm text-[#6e6e6e]'>Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.</p>
        <p className='mb-8 pr-40 text-md font-medium text-[#6e6e6e]'>Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer</p>
        <div className={`${display}`}>
      <Buttons
              btnText="Learn More"
              bg="[#b7eddd]"
              textColor="[#5ed6b3]"
              borderWidth="2"
              textHoverColor="[#5ed6b3]"
              borderColor="[#5ed6b3]"
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
