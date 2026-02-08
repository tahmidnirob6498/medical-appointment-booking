import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Components/Footer/Footer';

const Static = () => {
    const navigation=useNavigation()
    const isNavigating=Boolean(navigation.location)
    return (
        <div className="">
           <Navbar></Navbar> 
        <div className='flex justify-center items-center'>
        {
            isNavigating && <span className="loading loading-bars loading-xl"></span>
        }
        </div>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Static;