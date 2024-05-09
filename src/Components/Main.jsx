import React from 'react'

const Main = () => {
  return (
    <div className='main_section w-full h-auto flex justify-center items-center'>
      <div className="container w-[90%] h-auto flex flex-col justify-center items-center">
        <div className="section_box w-[546px] h-[29px] flex justify-center items-center list-none gap-[40px] my-4 text-[20px]">
            <li className='text-[#06286E] font-[700] font-[Inter] px-[12px] py-0 border-b-2 border-[#06286E] text-[20px]'>Study</li>
            <li className='px-[12px] py-0 font-[500] text-[#696671]'>Quiz</li>
            <li className='px-[12px] py-0 font-[500] text-[#696671]'>Test</li>
            <li className='px-[12px] py-0 font-[500] text-[#696671]'>Game</li>
            <li className='px-[12px] py-0 font-[500] text-[#696671]'>Others</li>
        </div>

        <div className='display_box w-[712px] h-[485.19px] flex flex-col justify-start items-center gap-[32px]'>
            <div className="display_inner w-full h-[393.19px] flex flex-col justify-center items-center  bg-gradient-to-bl from-[#051A91] via-[#061C93] to-[#1F80EB] rounded-[42.51px] ">
                    <p className='w-[90%] flex justify-between items-start p-6'>
                        <img src="../Images/light.png" alt="" />
                        <img src="../Images/Volume.png" alt="" />
                    </p>
                    <div className='w-full h-full flex justify-center items-start leading-[196.5px] font-[Lato] font-[700] text-[38.26px] '><h1 className='w-[313px] h-[46px] text-white'>9 + 6 + 7x - 2x - 3</h1>
                    </div>
            </div>
            <div className="w-[612px] h-[60px] flex justify-between items-center gap-[140px]">
              <img src="../Images/BackArrow.png" alt="backArrow_img" />
              <div className='w-[272px] h-[60px] flex justify-between items-center gap-[43px]'>
                <img src="../Images/leftCircleArrow.png" alt="" />
                <p className='font-[Inter] w-[66px] h-[17px] flex justify-center items-center font-[700] text-[24px] leading-[29.05px]'>01/10</p>
                <img src="../Images/rightCircleArrow.png" alt="" />
              </div>
              <img src="../Images/zoomBox.png" alt="zoomBox_img" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main
