import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { getDoctorData } from '../../../public/BookedDoctor';
import Doctor from '../Doctor/Doctor';
import {
 
  Area,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
} from 'recharts';

const Booking = () => {

 const navigate=useNavigate() 
const datas=useLoaderData()
const bookedId=getDoctorData()
const filterDoctored=datas.filter(data=>bookedId.includes(data.id))

  const [netDoctor,setNetDoctor]=useState(filterDoctored)
  const handleNavigate=()=>{
    navigate(-1)
  }
const handleDoctor=(id)=>{
  const netDoctors=filterDoctored.filter(doctor=>doctor.id!==id)
  const netId=bookedId.filter(bookId=>bookId!==id)
 setNetDoctor(netDoctors)
 localStorage.setItem('dataId',JSON.stringify(netId))
// console.log(netDoctors)
  }
  // console.log(netDoctor)
if (netDoctor.length === 0) {
    return (
    
      <div className="text-center my-20 text-gray-500">
        <h1 className="text-3xl font-semibold">You have no appointments today</h1>
        <p className='my-4 text-sm px-4'>Our platform connects with users, services, and modern technologies to create a seamless, reliable, and user-friendly digital experience. It ensures efficient communication, secure data handling, and smooth integration across all systems</p>
        <button  className=" btn px-4 py-1 text-white bg-blue-500 text-center rounded-xl" onClick={handleNavigate}>Book An Appointment</button>
      </div>
      
    );
  }
   
    return (
        <div className=''>
           <div className='my-5 w-full h-64 md:h-80 lg:h-96'>
         <BarChart
        width='100%'
        height='100%'
        data={netDoctor}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        
      <Bar dataKey='fee' fill='#8884d8' barSize={100}></Bar>
      
    
      </BarChart>   

           </div>
           <div>
         <div className='text-center'>
            <h1 className='text-3xl font-bold my-4'>My Today Appointments</h1>
            <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
         </div>
        {
         netDoctor.map(doctor=><Doctor handleDoctor={handleDoctor} doctor={doctor}></Doctor>)   
        }

            
            
              
            
            
            
            </div> 
        </div>
    );
};

export default Booking;