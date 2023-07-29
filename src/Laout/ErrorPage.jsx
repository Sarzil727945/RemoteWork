import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import img from '../assets/error.png'
import cardP2 from '../assets/cardP2.png'
import bgP from '../assets/pBg.png'

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section className='my-2'>
      <div className='container px-5  my-8'>
        <p className=' font-bold text-[25px] lg:w-[30%] mx-auto mt-12 mb-3 ps-5 lg:ps-0'>Packing Area View</p>
        <div>
          <div className=' flex justify-center  '>
            <img src={img} className=' lg:w-[444px] lg:h-[286px] ' alt="" />
          </div>
          <p className=' font-bold text-[25px] lg:w-[30%] mx-auto mt-6 mb-5 ps-5 lg:ps-0'>Place listed packages in shown  positions. </p>
          <div className=" flex justify-center mx-auto card w-full lg:w-[444px] shadow-2xl bg-[#FF4354]">
            <div className="card-body ">
              <div className='flex items-center justify-between'>
                <div className=' flex items-center justify-between'>
                  <div className=' relative'>
                    <div>
                      <img className=' w-20 h-20' src={bgP} alt="" />
                    </div>
                    <div className=' absolute bottom-[21px] start-[18px]'>
                      <img className=' w-10 h-10' src={cardP2} alt="" />

                    </div>
                  </div>
                  <div className=' font-bold ms-5 text-2xl '>
                    <h1>Cargo is out of ULD Bounds!</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=' text-center my-12'>
            <Link to='/' className=" bg-[#FFCE38] text-white font-bold py-4 px-10  text-lg  rounded-[8px]">Check Fixed Cargo</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage
