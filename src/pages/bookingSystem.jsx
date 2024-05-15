import React, { useEffect, useState, useRef, useContext, act } from 'react';
import MainContext from '../context/mainContext';
import '../App.css'
import Grid from '@mui/material/Grid';
import Step1 from '../components/step1';
import Step2 from '../components/step2';
import Step3 from '../components/step3';
import Step4 from '../components/step4';
import Stepper from '../components/stepper';
import bg1 from '../../public/bg1.jpg';
import Step5 from '../components/step5';
import Step6 from '../components/step6';
import Step7 from '../components/step7';

function BookingSystemPage() {

    const {activeStep,changeStepToPrevious,changeStepToNext} = useContext(MainContext);

    
    return (
        <Grid container >
        <Grid item lg={1.5}></Grid>
        <Grid className='mainSection' item lg={9}>
          <div className="topSection">
            <Stepper/>
            <div className="divider">

            </div>
          </div>    
          <div  className="middleSection">
            {
                activeStep===1?
                <Step1/>:
                activeStep===2?
                <Step2/>:
                activeStep===3?
                <Step3/>:
                (activeStep===4 || activeStep===5 || activeStep===6 )?
                <Step4/>:
                activeStep===7?
                <Step5/>:
                activeStep===8?
                <Step7/>:
                activeStep===9?
                <Step6/>:
                <></>  
                }
          </div> 
          <div className="lowerSection">
          <div className="divider"></div>
          <div className="buttonSection">
         { activeStep === 1? <div></div> : <button onClick={()=>{
            changeStepToPrevious();
         }}>
                Previous
            </button>}
            <button onClick={()=>{
                changeStepToNext();
            }} >
               { 
                activeStep===1? 
                'Select Venue': 
                activeStep===2? 
                'Select Event Date':
                activeStep===3?
                'Select Food':
                activeStep===4?
                'Select Decor':
                activeStep===5?
                'Select MIS':
                activeStep===6?
                'Book Appointment':
                activeStep===7?
                'Customer Info':
                activeStep===8?
                'View Summary':
                activeStep===9?
                'View Summary':
                ''
               }
            </button>
          </div>
          </div>
        </Grid>
        <Grid item lg={1.5}></Grid>
        </Grid>
    )
}

export default BookingSystemPage;