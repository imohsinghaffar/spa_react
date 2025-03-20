import React from 'react'
import CasestudiesCards from './CasestudiesCards'

const CaseStudies = () => {
  return (
    <>  
<div className="flex flex-col items-center justify-center gap-4 pt-30 pb-10 w-full">
      <div className="flex flex-col items-center gap-4 justify-center pb-10">
        <h1 className="text-4xl font-medium">Our case studies</h1>
        <p className="text-center text-lg font-md text-[#6e6e6e]">
        Lorem ipsum dolor sit amet, tincidunt vestibulum.
        </p>
      </div>
</div>
< div className="flex flex-row justify-center gap-8 w-full px-42">
      <CasestudiesCards title='Know more about Online marketing' bg='bg-[#000637]' img='assets/Group95.svg' paragraph1='Online Marketing' tags='SEO, Marketing'/>
      <CasestudiesCards title='Know more about Web Development' bg='bg-[#ffad00]' img='assets/Group108.svg'  paragraph1='Web Development' tags='Developing, Designing'/>
      <CasestudiesCards title='Know more about Web Designing' bg='bg-[#BBBBF2]' img='assets/Group126.svg'  paragraph1='Web Designing' tags='Designing, Developing'  />
      <CasestudiesCards title='Know more about Software Development' bg='bg-[#5FD6B3]'  img='assets/Group115.svg'  paragraph1='Software Development' tags='Developing, Designing'/>
</div>
    </>
  )
}

export default CaseStudies
