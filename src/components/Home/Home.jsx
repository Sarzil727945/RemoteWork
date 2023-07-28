import React from 'react';
import './Home.css'
import { MdLocationOn } from 'react-icons/md';
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/Notification.svg'
import img from '../../assets/Group 7.png'
import windos from '../../assets/windos.png'
import box from '../../assets/box.png'
import bgP from '../../assets/pBg.png'
import cardP1 from '../../assets/cardP1.png'
import cardP2 from '../../assets/cardP2.png'
import leftA from '../../assets/leftarror.png'
import { Link } from 'react-router-dom';
const Main = () => {
     return (
          <div className='lg:mx-[100px] mx-[20px] mt-10'>
               <div className='  mb-20 w-full'>
                    <div className=' flex justify-between'>
                         <div>
                              <img src={icon1} alt="" />
                         </div>
                         <div>
                              <img src={icon2} alt="" />
                         </div>
                    </div>
                    <div className=' flex items-center lg:mt-20 mt-10 lg:ms-16'>
                         <div>
                              <img className='lg:h-[180%] lg:w-[180px] h-[100px] w-[100px] rounded-full ' src={img} alt="" />
                         </div>
                         <div className=' lg:ms-10 ms-5'>
                              <h1 className=' font-bold lg:text-[173%] text-[#FFCE38] text-[20px]'>Hi 👋 ,</h1>
                              <h2 className=' font-bold text-[#263238] my-1 lg:text-[173%] text-[20px]'>Mobina Sadat</h2>
                              <div className=' flex items-center'>
                                   <p className=' text-[#FFCE38] text-[150%] me-1'><span><MdLocationOn /></span></p>
                                   <p className=' lg:text-[18px] text-[15px]'>  Warehouse 9</p>
                              </div>
                         </div>
                    </div>
               </div>
               <div className=' flex  justify-center'>
                    <Link to='selection' className="card w-[333px] h-[155px] rounded-[10px] bg-base-100 shadow-2xl me-5 drop-shadow-2xl">
                         <div className="card-body relative">
                              <h2 className="card-title text-[#828282] font-bold">ULD Selection</h2>
                              <div className=' absolute bottom-[-18px] start-[-10px]'>
                                   <img src={box} alt="" />
                              </div>
                         </div>
                    </Link>
                         <Link to='/scanning' className="card w-[333px] h-[155px] rounded-[10px] bg-base-100 shadow-2xl drop-shadow-2xl">
                              <div className="card-body relative">
                                   <h2 className="card-title text-[#828282] font-bold">Package Scanning</h2>
                                   <div className=' absolute bottom-[-18px] right-[-10px]'>
                                        <img src={windos} alt="" />
                                   </div>
                              </div>
                    </Link>
               </div>
               <div className=' mt-24 lg:mx-10 mb-2'>
                    <h1 className=' font-bold text-2xl mb-8'>Notifications</h1>
                    <div className=' lg:flex mb-6'>
                         <div className="card w-full shadow-2xl lg:me-8 bg-[#FFCC30] lg:mb-0 mb-7">
                              <div className="card-body ">
                                   <div className='flex items-center justify-between'>
                                        <div className=' flex items-center'>
                                             <div className=' relative'>
                                                  <div>
                                                       <img className=' w-24 h-24' src={bgP} alt="" />
                                                  </div>
                                                  <div className=' absolute bottom-[18px] start-[26px]'>
                                                       <img className=' w-12 h-12' src={cardP1} alt="" />

                                                  </div>
                                             </div>
                                             <div>
                                                  <h1 className=' font-bold lg:text-3xl lg:ms-7 text-xl ms-3'>You have scanned <br />
                                                       5 packages</h1>
                                             </div>
                                        </div>
                                        <div>
                                             <img className=' w-12 h-12' src={leftA} alt="" />
                                        </div>
                                   </div>

                              </div>
                         </div>
                         <div className="card w-full shadow-2xl bg-[#e5e6e7]">
                              <div className="card-body ">
                                   <div className='flex items-center justify-between'>
                                        <div className=' flex items-center justify-between'>
                                             <div className=' relative'>
                                                  <div>
                                                       <img className=' w-24 h-24' src={bgP} alt="" />
                                                  </div>
                                                  <div className=' absolute bottom-[21px] start-[24px]'>
                                                       <img className=' w-12 h-12' src={cardP2} alt="" />

                                                  </div>
                                             </div>
                                             <div className=' font-bold lg:text-3xl lg:ms-7 text-2xl ms-2'>
                                                  <h1>0 Issues</h1>
                                             </div>
                                        </div>
                                        <div>
                                             <img className=' w-12 h-12' src={leftA} alt="" />
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Main;
