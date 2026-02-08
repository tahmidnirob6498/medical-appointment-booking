import React from 'react';

const SuccessWork = () => {
    return (
        <div className='mt-20'>
        <div>
         <h1 className='text-3xl font-bold '>We Provide Best Medical Services</h1> 
        <p className='text-gray my-1'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>    
       </div>
       <div className='grid grid-cols-2 lg:grid-cols-4 max-w-6/8 mx-auto gap-3 mt-5 py-3'>
<div className='flex flex-col gap-3 border border-black rounded-xl bg-base-100 items-center justify-center p-5'>
        <img src="../../../C001-assets/success-doctor.png" height={50} width={50} alt="" />
        <p className='text-4xl lg:text-5xl font-semibold'>199+</p>
        <p>Total Doctors</p>
        </div>  

        <div className='flex flex-col gap-3 border border-black rounded-xl bg-base-100 items-center justify-center p-5'>
        <img src="../../../C001-assets/success-doctor.png" height={50} width={50} alt="" />
        <p className='text-4xl lg:text-5xl font-semibold'>467+</p>
        <p>Total Doctors</p>
        </div>

       <div className='flex flex-col gap-3 border border-black rounded-xl bg-base-100 items-center justify-center p-5'>
        <img src="../../../C001-assets/success-doctor.png" height={50} width={50} alt="" />
        <p className='text-4xl lg:text-5xl font-semibold'>300+</p>
        <p>Total Doctors</p>
        </div>

       <div className='flex flex-col gap-3 border border-black rounded-xl bg-base-100 items-center justify-center p-5'>
        <img src="../../../C001-assets/success-doctor.png" height={50} width={50} alt="" />
        <p className='text-4xl lg:text-5xl font-semibold'>199+</p>
        <p>Total Doctors</p>
        </div>
        </div>

       </div>
       
    );
};

export default SuccessWork;