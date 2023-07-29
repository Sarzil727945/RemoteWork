import React from 'react';
import job from '../../assets/job.png'
import { Link } from 'react-router-dom';


const GreatJob = () => {
     return (
          <div>
               <div className=' flex justify-center mt-14'>
                    <img className=' w-[250px] h-[400px]' src={job} alt="" />
               </div>
               <div className=' mt-10'>
                    <h1 className=' text-[#FFCE38] text-3xl font-bold text-center lg:px-0 px-3'>
                         Cargo has been resolved
                    </h1>
                    <h2 className=' text-3xl font-bold text-center mt-3'>
                         Great Job!
                    </h2>
               </div>
               <div className=' text-center my-12'>
                    <Link to='/' className=" bg-[#FFCE38] text-white font-bold py-3 px-6  rounded-[8px]">Back To Home</Link>
               </div>
          </div>
     );
};

export default GreatJob;