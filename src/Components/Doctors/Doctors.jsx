import React from 'react';
import DoctorCard from '../DoctorCard/DoctorCard';

const Doctors = ({DoctorsData}) => {
    // console.log(DoctorsData)
    return (
        <div className=' max-w-7/8 mx-auto'>
            <div className='mt-20 mb-10 max-w-6/7 mx-auto'>
                <h1 className='text-2xl font-bold my-3'>Our Best Doctors</h1>
            <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className='grid grid-cols-3 gap-4 max-w-8/9 mx-auto '>
                {
                    DoctorsData.map(doctor=><DoctorCard key={doctor.id} doctor={doctor}></DoctorCard>)
                }
            </div>

       
        </div>
    );
};

export default Doctors;