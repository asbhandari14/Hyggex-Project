import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar_section w-full h-[103px] flex justify-center items-center mb-4 font-[Inter]'>
      <div className="navbar_container container w-[90%] h-full flex justify-between items-center ">
          <div className="navbar_left flex justify-start items-center w-[191px] h-[39px]">
            <img src="../Images/Component40.png" alt="" className='w-full h-full' />
          </div>
          <div className="navbar_right w-[525px] h-[48px] flex items-center gap-[40px] list-none">
            <div className='flex justify-start items-center w-[282px] h-[22px] gap-[40px] text-[18px]'>
              <li>Home</li>
              <li>Flashcard</li>
              <li>Contact</li>
            </div>
            <li className='w-[35px] h-[22px]'>FAQ</li>
            <button className='w-[128px] h-[48px] rounded-[32px] bg-gradient-to-b from-[#06286E] to-[#164EC0] text-white py-[13px] px-[40px]'>Login</button>
          </div>

      </div>
    </div>
  )
}

export default Navbar
