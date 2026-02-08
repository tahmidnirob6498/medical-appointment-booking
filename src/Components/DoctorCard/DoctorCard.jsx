import React from 'react';
import { Link } from 'react-router';

const DoctorCard = ({doctor}) => {
    const {id,image,name,education,registrationNumber}=doctor

// console.log(doctor)
    return (
       
            <div className=" bg-base-100 p-0 rounded-xl  shadow-sm">
  <figure className=" flex justify-center items-center rounded-2xl pt-3">
    <img
      src={image}
      className="rounded-xl h-64 object-cover w-60" />
  </figure>
  <div className="card-body text-start">
    <h2 className="card-title text-2xl font-bold">{name}</h2>
    <p className='text-gray-700  font-semibold'>{education}</p>
    
    <div className="card-actions border-t pt-3 gap-4 mt-3 border-dotted flex flex-col">
        <p className=' text-gray-700'>Reg No: {registrationNumber}</p>
      <Link to={`/body/${id}`}><button className=" btn px-4 py-1 border border-blue-500 text-center rounded-xl"><p className='text-center text-blue-500'>View Details</p></button></Link>
    </div>
  </div>
</div>
        
    );
};

export default DoctorCard;
