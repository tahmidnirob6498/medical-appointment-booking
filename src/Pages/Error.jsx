import React from 'react';

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div>
        <img height='200px' width='300px' src="https://i.ibb.co.com/k2K8FW7S/istockphoto-827247322-612x612-1.jpg"/>
            </div>
            
                <div className=' rounded-xl'>
        <h1 className='text-4xl pb-3'>No Data Found</h1> 
        <p className=''>Please input valid URL</p>   
        </div>
            
        </div>
    );
};

export default Error;