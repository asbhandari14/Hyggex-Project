import React from 'react'

const PublishedBy = () => {
  return (
    <div className='section w-full h-auto flex justify-center items-center my-24'>
        <div className="container w-[90%] h-auto flex justify-between items-center">
            
            <div className='w-[217px] h-[80.6px] flex justify-between items-start gap-[21.26px]'>
              <div className="w-[80.6px] h-[80.6px] flex justify-center items-center rounded-[50%] bg-slate-300">
                <img src="../Images/Logo.png" alt="" />
              </div>
              <div className="w-[115.14px] h-[60.17px] flex flex-col justify-start items-center">
                <p className='w-full text-[#696671]'>Published By</p>
                <img src="../Images/HygexxLogo.png" alt="" />
              </div>
            </div>

            <div className="createFlashCard_box w-[299px] h-[60px] flex justify-between items-center gap-[8px]">
              <button className='w-[50px] h-[50px] rounded-[50%] bg-gradient-to-b from-[#06286E] to-[#164EC0] text-4xl text-white'>+</button>
              <p className='w-full h-full flex justify-center items-center text-transparent  bg-clip-text bg-gradient-to-b from-[#06286E] to-[#164EC0] font-[Inter] leading-[33.89px] font-[600] text-[28px]'>Create Flashcard</p>
            </div>
        </div>
    </div>
  )
}

export default PublishedBy
