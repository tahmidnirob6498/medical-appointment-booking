import React from 'react';
import { createBrowserRouter } from "react-router";
import Static from './Static';
import Home from './Home';
import DoctorDetails from '../Components/DoctorDetails/DoctorDetails';
import Booking from '../Components/Booking/Booking';


   export const router = createBrowserRouter([
  {
    path: "/",
    Component:Static,
    children:[
        {
            index:true,
        Component:Home,
        loader:async()=>{
         const res=  await fetch('/Doctors.json')
           return res.json()
        },
        },
        {
          path:"body/:id",
          Component:DoctorDetails,
          loader:async()=>{
         const res=  await fetch('/Doctors.json')
           return res.json()
        }
        },
        {
          path:"my-bookings",
          Component:Booking,
          loader:async()=>{
          const res=await fetch('/Doctors.json')
          return res.json()
          }
        }
    ]

    
  },
]);

