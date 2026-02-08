import React from 'react';
import Banner from '../Components/Banner/Banner';
import Doctors from '../Components/Doctors/Doctors';
import { useLoaderData } from 'react-router';
import SuccessWork from '../Components/successWork/successWork';

const Home = () => {
    const DoctorsData=useLoaderData()
    return (
        <div className='bg-base-300 md:p-8'>
          <Banner></Banner> 
          <Doctors DoctorsData={DoctorsData}></Doctors> 
          <SuccessWork></SuccessWork>
        </div>
    );
};

export default Home;