import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { addDoctorData, getDoctorData } from '../../../public/BookedDoctor';
import Booking from '../Booking/Booking';
  import { ToastContainer, toast } from 'react-toastify';
  

const DoctorDetails = () => {
      
  const navigate=useNavigate()
    const clickedId=useParams()
    const Doctors=useLoaderData()
    const DoctorAbout=Doctors.find(doctor=>parseInt(clickedId.id)===doctor.id)
    // `console.log(DoctorAbout)`
    const {name,availability,id,education,image,registrationNumber, workplace, fee}=DoctorAbout
    const arrDay=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday']
    const date=new Date()
    const day=date.getDay()
    const today=arrDay[day]
    console.log(today)

    const navigateBook=()=>{
       const recieveData=getDoctorData()
       const findData=recieveData.find(doctorid=>doctorid===id)
      
       console.log(date)
       if(!findData){
      
         addDoctorData(id)
          toast.success(`Appointment scheduled for ${name} successfully`);
          setTimeout(() => {
      navigate("/my-bookings");
    }, 1500);
        
        
       }
       else{
        toast.error(`Appointment already scheduled of ${name}`) 
       return 
       
       }
        
       
    }
    return (
        <div className='flex flex-col'>
            <div className=" bg-base-200">
  <div className="flex p-10 ">
    <img
      src={image}
      className="max-w-xs rounded-lg px-5"
    />
    <div className='py-3 text-start'>
      <h1 className="text-4xl font-semibold text-start">{name}</h1>
      <p className="py-1 text-start text-gray-600">{education}</p>
      <p className='text-gray-600 mt-3'>working at:</p>
      <p className='text-gray-600'>{workplace}</p>
      <div className='divider'></div>
      <p className='text-gray-600'>Reg No:{registrationNumber}</p>
      <div className='divider '></div>
      <div className='flex gap-2 items-center'>
       <p className='font-semibold'>Availability day:</p> {
        availability.map((day,index)=><p key={index} className='bg-amber-300 p-1 px-3 rounded-2xl'>{day}</p>)
       }
     </div>
     <p className='py-2 font-semibold'>Consultation Fee: Taka : <span className='text-blue-600'>{fee}</span> (incl. Vat) Per consultation</p>
   </div>
   
  </div>
</div>
<div className='bg-base-200 p-5 my-8'>
    <h1 className='text-center font-semibold text-3xl'>Book Appoinment</h1>
    <div className='border border-dotted border-gray-600 my-1 mt-4'></div>
    <div className='my-3 flex justify-between'><p className='ml-3'>Availabilty</p>
    {availability.includes(today) ? <p className='text-green-500 bg-green-100 px-2 rounded-xl'>Doctor available today</p>:<p className='text-red-500 bg-red-100 px-2 rounded-xl'>Doctor not available today</p>
    }</div>
   <div className='border border-dotted border-gray-600 my-1'></div>
    <button className={`btn bg-blue-500 rounded-3xl mt-4 ${availability.includes(today) || " bg-slate-300 text-gray-200"} text-white w-full`} onClick={navigateBook}>Book Appoinment Now</button>
    <ToastContainer />


   </div>


        </div>
    );
};

export default DoctorDetails;
