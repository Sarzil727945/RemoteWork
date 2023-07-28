import React from 'react';
import './Scanning.css'
import { useState } from 'react';
import { useEffect } from 'react';
import scanning from '../../assets/scanning.png'

const Scanning = () => {
     const [isLoading, setIsLoading] = useState(true);
     const [scanningData, setScanningData] = useState([])
     useEffect(() => {
          fetch('scanning.json')
               .then(res => res.json())
               .then(data => {
                    setScanningData(data);
                    setIsLoading(false)
               })
     }, [])
     return (
          <div >
               <div className=' mt-12'>
                    <p className=' font-bold text-[18px] w-80 mx-auto'>Please scan your items. Your scanned items will be displayed here</p>
                    <div className=' flex justify-center mt-5'>
                         <img src={scanning} alt="" />
                    </div>
               </div>

               <div className=' grid lg:grid-cols-1 gap-6 mb-8 justify-items-center mt-16 lg:mx-0 mx-4'>
                    {
                         scanningData.map(d => <div className=" lg:w-[36%]  border-2 w-full rounded-[10px]" key={d._id}>
                              <div>
                                   <div className=' border-b-2 bg-[#EAEAEA] flex items-center py-2 px-5'>
                                        <img className=' w-[38px] h-[38px]' src={d.image} alt="" />
                                        <h1 className=' ms-3'>{d.ID}</h1>
                                   </div>
                                   <div className=' py-2 px-5 text-[#878686]'>
                                        <span className=' me-8'>{d.weight}</span>
                                        <span>{d.volume}</span>
                                   </div>
                              </div>
                         </div>)
                    }
                    {
                         isLoading && <div className="text-center my-60">
                              <span> loading....</span>
                         </div>
                    }
                    <button className=" bg-[#FFCE38] text-white font-bold p-3 rounded-[8px]">Begin Cargo Packing</button>

               </div>
          </div>
     );
};

export default Scanning;