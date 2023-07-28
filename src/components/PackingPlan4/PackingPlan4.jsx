import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const PackingPlan4 = () => {
     const { id } = useParams()
     const [isLoading, setIsLoading] = useState(true);
     const [scanningData, setScanningData] = useState([])
     const [selectData, setSelectData] = useState([])
     useEffect(() => {
          fetch('../../../public/scanning.json')
               .then(res => res.json())
               .then(data => {
                    setScanningData(data)
                    const selectData = data.filter(f => f._id === id)
                    setSelectData(selectData);
                    setIsLoading(false)
               })
     }, [])
     console.log(selectData);
     return (
          <div>
                 {
                    selectData.map(d => <div key={d._id}>
                         <p className=' font-bold text-[25px] lg:w-[30%] mx-auto mt-12 mb-5  ps-5 lg:ps-0'>Packing Area View</p>
                         <div className=' flex justify-center'>
                              <img className=' lg:w-[30%] lg:h-72' src={d.packingImg} alt="" />
                         </div>
                         <p className=' font-bold text-[25px] lg:w-[30%] mx-auto mt-8 mb-5 ps-5 lg:ps-0'>Place listed packages in shown  positions. </p>
                         <div className='lg:mx-0 mx-5'>
                              <div className=" lg:w-[30%]  border-2 w-full rounded-[10px] lg:mx-auto">
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
                              </div>
                         </div>
                    </div>)
               }
               {
                    isLoading && <div className="text-center my-60">
                         <span> loading....</span>
                    </div>
               }
               <div className=' text-center my-12'>
                    <Link to={`/packingPlan5/${scanningData[4]?._id}`} className=" bg-[#FFCE38] text-white font-bold py-3 px-10 rounded-[8px]">Next Package</Link>
               </div>
          </div>
     );
};

export default PackingPlan4;