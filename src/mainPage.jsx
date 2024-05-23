import React, { useEffect, useState, useRef,useContext } from 'react';
import './App.css'
import BookingSystemPage from './pages/bookingSystem';
import MainSummary from './pages/mainSummary';
import MainContext from './context/mainContext';
import BookingConfirmed from './pages/bookingConfirm';

function MainPage() {
  const{isSummaryPageOpen,setIsSummaryPageOpen,isBookingConfirmed} = useContext(MainContext);

  return (
    <>
      
   {!isBookingConfirmed? 
    (!isSummaryPageOpen? <BookingSystemPage/>:
      <MainSummary/>) : <BookingConfirmed/>}
      {/* <BookingConfirmed/> */}
      
    </>
  )
}

export default MainPage