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
import border1 from '../../public/border1.png'
import border2 from '../../public/border2.png'
import border3 from '../../public/border3.png'
import WarningInfoModal from '../utils/warningModal';
import SubmitButton from '../utils/formSubmitButton';

function BookingSystemPage() {

    const [isHover,setIsHover] = useState(false);
    const {activeStep,changeStepToPrevious,changeStepToNext,handleFormSubmit,formData,selectedVenueId,totalPersons,selectedPackageDetails,calculatePackagePrice,calculateDecorPricing,selectedMdType,selectedCenterpieceType,selectedLightingType,selectedChairType,selectedTable,selectedSoundSystemType,isRoomSelected,isSummaryPageOpen,setIsSummaryPageOpen,postData2} = useContext(MainContext);

    
    return (
      <>
        <Grid container >
        <Grid item lg={1.5}></Grid>
        <Grid className='mainSection' item lg={9}>
        <div className={isHover?"backDropMainSection show":"backDropMainSection"}>

        </div>
        <div onMouseEnter={()=>{
          setIsHover(true);
        }} onMouseLeave={()=>{
          setIsHover(false);
        }} className="bannerSlider">
                         <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                            <h4>Total</h4>
                            <h2>${(selectedVenueId&& (selectedVenueId.cpp*totalPersons))+(calculatePackagePrice(selectedPackageDetails))+(calculateDecorPricing(selectedMdType,selectedCenterpieceType,selectedLightingType,selectedChairType))+(isRoomSelected?totalPersons*5:0)+(selectedSoundSystemType!==null?selectedSoundSystemType.cost:0)}</h2>
                         </div>
                         <img  src={border3} alt="" srcset="" />
                         <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                            <h5>Venue Charge</h5>
                            <h6>${selectedVenueId&& (selectedVenueId.cpp*totalPersons)}</h6>
                         </div>
                         <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                            <h5>Food Charges</h5>
                            <h6>${calculatePackagePrice(selectedPackageDetails)}</h6>
                         </div>
                         <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                            <h5>Decor Charges</h5>
                            <h6>${calculateDecorPricing(selectedMdType,selectedCenterpieceType,selectedLightingType,selectedChairType)}</h6>
                         </div>
                         <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                            <h5>MIS Charges</h5>
                            <h6>${(isRoomSelected?totalPersons*5:0)+(selectedSoundSystemType!==null?selectedSoundSystemType.cost:0)}</h6>
                         </div>
                         <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                            <h5>Tax 6.625%</h5>
                            <h6>${(6.625/100 )*(selectedVenueId&& (selectedVenueId.cpp*totalPersons))+(calculatePackagePrice(selectedPackageDetails))+(calculateDecorPricing(selectedMdType,selectedCenterpieceType,selectedLightingType,selectedChairType))+(isRoomSelected?totalPersons*5:0)+(selectedSoundSystemType!==null?selectedSoundSystemType.cost:0)}</h6>
                         </div>
                    </div>

          


                    <div  className="bannerSlider0">
                    <img src="https://edengardensbanquet.com/wp-content/uploads/2024/01/EG-Logo-2.png" alt="" srcset="" />

                         
                    </div>
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
            {activeStep!==8? <button onClick={()=>{
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
            </button>:<button form='form1' type="submit" onClick={()=>{
               if (formData.firstName!=='' && formData.lastName!=='' && formData.phone!=='' && formData.zip!=='' && formData.state!=='' && formData.city!=='' && formData.email!=='') {
                  setIsSummaryPageOpen(true);
               } else {
                  setIsSummaryPageOpen(false);
               }
            }} >
            Proceed
        </button>}
          </div>
          </div>
        </Grid>
        <Grid item lg={1.5}></Grid>
        </Grid>
        <WarningInfoModal/>
      </>
    )
}

export default BookingSystemPage;