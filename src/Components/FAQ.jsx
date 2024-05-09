import React from 'react'

const FAQ = () => {
  return (
    <div className='section w-full h-auto flex justify-center items-center my-12'>
      <div className="container w-[90%] h-auto flex flex-col items-start justify-start">
        <div className='w-[97px] font-[Inter] font-[700] text-[48px] leading-[58.09px] tracking-[0.5%] text-transparent  bg-clip-text bg-gradient-to-b from-[#06286E] to-[#164EC0]'>FAQ</div>

        <div className="accordion_box w-[848px] h-[238px] flex flex-col gap-[32px] my-12">
          <div className='w-full h-[58px] rounded-[12px] border-[1px] border-[#164EC0] flex justify-start items-center px-[24px] text-black'>Can education flashcards be used for all age groups?</div>
          <div className='w-full h-[58px] rounded-[12px] border-[1px] text-transparent border-[#164EC0] bg-clip-text bg-gradient-to-b from-[#06286E] to-[#164EC0] flex justify-start items-center px-[24px] text-black'>How do education flashcards work?</div>
          <div className='w-full h-[58px] rounded-[12px] border-[1px] border-[#164EC0] flex justify-start items-center px-[24px] text-black'>Can education flashcards be used for test preparation?</div>
        </div>

     

      </div>
    </div>
  )
}

export default FAQ
