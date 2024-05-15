import React, { useEffect, useState, useRef } from 'react';
import './App.css'
import IndividualStepper from './utils/indStepper'
import Stepper from './components/stepper'
import Grid from '@mui/material/Grid';
import Step1 from './components/step1';
import Step2 from './components/step2';
import Step3 from './components/step3';
import Step4 from './components/step4';
import MainContextProvider from './context/mainContextProvider';
import BookingSystemPage from './pages/bookingSystem';
import MainSummary from './pages/mainSummary';

function App() {
  const [count, setCount] = useState(0)

  return (
    <MainContextProvider>
      <BookingSystemPage/>
      {/* <MainSummary/> */}
    </MainContextProvider>
  )
}

export default App
