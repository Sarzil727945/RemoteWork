import React, { useEffect, useState } from 'react';
import box from '../../assets/box.png'


const Selection = () => {
     const [isLoading, setIsLoading] = useState(true);
     const [selectionData, setSelectionData] = useState([])
     useEffect(() => {
          fetch('selection.json')
               .then(res => res.json())
               .then(data => {
                    setSelectionData(data);
                    setIsLoading(false)
               })
     }, [])
     return (
          <div>
               <div className=' mt-12'>
                    <div className=' flex justify-center mt-5 items-center'>
                         <div>
                              <img src={box} alt="" />
                         </div>
                         <p className=' font-bold text-[18px] ms-4'>Please pick a ULD for your <br />cargo.</p>
                    </div>

                    <div className=' mt-10'>
                         {
                           selectionData?.map(d =><div key={d._id}>
                               <div className=' flex justify-center mb-5'>
                                   <img src={d.image} alt="" />
                               </div>
                           </div>)   
                         }
                    </div>
                    {
                         isLoading && <div className="text-center my-60">
                              <span> loading....</span>
                         </div>
                    }
               </div>
          </div>
     );
};

export default Selection;