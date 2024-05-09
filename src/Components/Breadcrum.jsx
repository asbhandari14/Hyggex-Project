import React from 'react'

const Breadcrum = () => {
  return (
    <div className='breadcrum_section w-full h-[9vh] flex justify-center items-center my-5 font-[Inter]'>
      <div className="container w-[90%] h-full flex justify-start items-center ">
            <div className="breadcrum_box w-[487px] h-[30px] flex justify-start items-center text-[18px]">
                <img src="../Images/Home.png" alt="" />
                <img src="../Images/RightArrow.png" alt="" />
                <h5 className='font-[500]'>Flashcard</h5>
                <img src="../Images/RightArrow.png" alt="" />
                <h5 className='font-[500]'>Mathematics</h5>
                <img src="../Images/RightArrow.png" alt="" />
                <h5 className='font-[600]'>Relation and Function</h5>

            </div>
      </div>
    </div>
  )
}

export default Breadcrum
