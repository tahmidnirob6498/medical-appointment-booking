import React from 'react';
// import { getDoctorData } from '../../../public/BookedDoctor';




const Doctor = ({doctor,handleDoctor}) => {
    const {fee,name,id,education}=doctor
    // console.log(id)
    return (             
    
        <div>
             

        
    <div className='bg-base-200 p-5 my-8'>

    <div className='border border-dotted border-gray-600 my-1 mt-4'></div>
    <div className='my-3 flex justify-between items-center'><div className='text-start'>
        <h1 className='text-3xl font-semibold'>{name}</h1>
        <p className='my-3'>{education}</p>
    </div>
    <p>Appointment Fee : {fee} Taka + Vat</p></div>
   <div className='border border-dotted border-gray-600 my-1'></div>
    <button className='btn border-red-600 rounded-3xl mt-4 text-black w-full' onClick={()=>handleDoctor(id)}>Cancel Request</button>


   </div>   </div>
        
    );
};

export default Doctor;