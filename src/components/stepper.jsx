import { useState, useContext } from 'react'
import IndividualStepper from '../utils/indStepper';
import MainContext from '../context/mainContext';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import './style.css';

function Stepper() {

    const {activeStep,changeStepToPrevious,changeStepToNext} = useContext(MainContext);

    return <>
     <div className="topStepper">
        <IndividualStepper stepNo={1} activeState={activeStep===1}   />
        <IndividualStepper stepNo={2} activeState={activeStep===2}  />
        <IndividualStepper stepNo={3} activeState={activeStep===3}  />
        <IndividualStepper stepNo={4} activeState={activeStep===4 || activeStep===5 || activeStep===6}  />
        <IndividualStepper stepNo={5} activeState={activeStep===7}  />
        {/* <IndividualStepper stepNo={6} activeState={activeStep===8}  /> */}
        <IndividualStepper stepNo={6} activeState={activeStep===8}  />
     </div>



     <div className="topStepperMobile">
        <div className="leftPartTSM">
            <h2>Event Selection</h2>
            <h4>Please Select Event Details</h4>
        </div>
        <div className="rightPartTSM">
           <div className="progressIndicatorStepper">
           <CircularProgressbar value={60} text={`1 of 7`} />;
           </div>
        </div>
     </div>

    </>
}

export default Stepper;