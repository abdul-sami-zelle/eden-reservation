import { useState, useContext } from 'react'
import IndividualStepper from '../utils/indStepper';
import MainContext from '../context/mainContext';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import './style.css';

function Stepper() {

    const {activeStep,changeStepToPrevious,changeStepToNext,selectedPackageDetails} = useContext(MainContext);

    return <>
     <div className="topStepper">
        <IndividualStepper stepNo={1} activeState={activeStep===1}   />
        <IndividualStepper stepNo={2} activeState={activeStep===2}  />
        <IndividualStepper stepNo={3} activeState={activeStep===3}  />
        <IndividualStepper stepNo={4} activeState={activeStep===4 || activeStep===5 || activeStep===6 || activeStep===7}  />
        <IndividualStepper stepNo={5} activeState={activeStep===8}  />
        {/* <IndividualStepper stepNo={6} activeState={activeStep===8}  /> */}
        <IndividualStepper stepNo={6} activeState={activeStep===9}  />
     </div>



     <div className="topStepperMobile" onClick={()=>{
      console.log(selectedPackageDetails)
     }}>
        {activeStep===1?<div className="leftPartTSM">
            <h2>Event Selection</h2>
            <h4>Please Select Event Details</h4>
        </div>:
         activeStep===2 ?
         <div className="leftPartTSM">
         <h2>Venue Selection</h2>
         <h4>Please Select Venue</h4>
     </div>:
     activeStep===3 ? <div className="leftPartTSM">
     <h2>Event Date & Slot</h2>
     <h4></h4>
 </div>:
(activeStep===4 || activeStep===5 || activeStep===6 )?
 <div className="leftPartTSM">
     <h2>Selections</h2>
     <h4>Food, Decor and MIS selections.</h4>
 </div>
 :   activeStep===7? 
 <div className="leftPartTSM">
 <h2>Summary</h2>
 <h4>Food, Decor and MIS Summary.</h4>
</div>
:  activeStep===8? 
<div className="leftPartTSM">
 <h2>Consultancy</h2>
 <h4>Select Appointment Date & Slot</h4>
</div>
:activeStep===9?
<div className="leftPartTSM">
 <h2>Information</h2>
 <h4>Please Enter Your Details</h4>
</div>
:
 <></>
      }
        <div className="rightPartTSM">
           <div className="progressIndicatorStepper">
           <CircularProgressbar value={activeStep===1? 16 : activeStep===2 ? 32: activeStep===3? 48 : (activeStep===4 || activeStep===5 || activeStep===6 || activeStep===7) ? 64 : activeStep===8 ?80 : activeStep===9 ? 100 :"" } text={activeStep===1? `1 of 6` : activeStep===2 ? "2 of 6": activeStep===3? "3 of 6" : (activeStep===4 || activeStep===5 || activeStep===6 || activeStep===7) ? "4 of 6" : activeStep===8 ?"5 of 6" : activeStep===9 ? "6 of 6" :"" } />
           </div>
        </div>
     </div>

    </>
}

export default Stepper;