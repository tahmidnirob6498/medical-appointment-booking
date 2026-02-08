import React from 'react';

const Banner = () => {
    return (
       <div className="hero bg-base-100 min-h-screen mt-2 md:mt-3 mb-5 md:mb-10 border-2 border-base-300 rounded-xl">
  <div className="hero-content flex-col-reverse">
    <div className='flex flex-col items-center md:flex-row h-64 object-cover gap-4'>
<img
      src="https://i.ibb.co.com/WWb4mtrs/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-cro.jpg"
      className="max-w-1/2  shadow-2xl rounded-xl"
    />
    <img src="https://i.ibb.co.com/YBD1wQd3/240-F-145106710-EAZHZic-G5-GN8-Xzok-N23-Ae-FLr-Ia-V4-P3-IT.jpg" className="max-w-1/2 rounded-lg shadow-2xl" />

    </div>
    
    <div className=''>
      <h1 className="text-3xl font-bold">Dependable Care, Backed by Trusted Professionals.</h1>
      <p className="py-6">
       Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
      </p>
    </div>
  </div>
</div>
    );
};

export default Banner;