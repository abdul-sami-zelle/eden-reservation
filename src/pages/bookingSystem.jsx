import React, { useEffect, useState, useRef, useContext, act } from 'react';
import MainContext from '../context/mainContext';
import '../App.css'
import Grid from '@mui/material/Grid';
import Step1 from '../components/step1';
import Step2 from '../components/step2';
import Step3 from '../components/step3';
import Step4 from '../components/step4';
import Stepper from '../components/stepper';
import bg1 from '../assets/bg1.jpg';
import Step5 from '../components/step5';
import Step6 from '../components/step6';
import Step7 from '../components/step7';
import border1 from '../assets/border1.png'
import border2 from '../assets/border2.png'
import border3 from '../assets/border3.png'
import WarningInfoModal from '../utils/warningModal';
import SubmitButton from '../utils/formSubmitButton';

function BookingSystemPage() {

    const [isHover,setIsHover] = useState(false);
    const {
      activeStep,
      changeStepToPrevious,
      changeStepToNext,
      handleFormSubmit,
      formData,
      selectedVenueId,
      totalPersons,
      selectedPackageDetails,
      calculateFoodSectionPrice,
      calculateDecorPricing,
      selectedMdType,
      selectedCenterpieceType,
      selectedLightingType,
      selectedChairType
      ,selectedTable,
      selectedSoundSystemType,
      isRoomSelected,
      isSecuritySelected,
      isValetSelected,
      isSummaryPageOpen,
      setIsSummaryPageOpen,
      postData2,
      selectedStageTypeData,
      selectedCutleryStyleTypeData,
      selectedFoodPackage,
      selectedFoodTypeName
   } = useContext(MainContext);

    
    return (
      <>
        <Grid container  className='mainCenter'>
        <Grid item lg={1.5} md={0} sm={0}></Grid>
        <Grid className='mainSection' item lg={9} md={12} sm={12}>
        <div className={isHover?"backDropMainSection show":"backDropMainSection"}>

        </div>
        <div onMouseEnter={()=>{
          setIsHover(true);
        }} onMouseLeave={()=>{
          setIsHover(false);
        }} className="bannerSlider">
                         <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                            <h4>Total</h4>
                            <h2>${(selectedVenueId&& (Number(selectedVenueId.personCharges)*totalPersons))+(calculateFoodSectionPrice(selectedPackageDetails))+calculateDecorPricing(selectedMdType,selectedCenterpieceType,selectedLightingType,selectedChairType,selectedStageTypeData)+(isRoomSelected?totalPersons*5:0)+(selectedSoundSystemType!==null?selectedSoundSystemType.cost:0)}</h2>
                         </div>
                         {/* <img  src={border3} alt="" srcset="" /> */}
                         <div style={{
                           width:'100%',
                           height:'10px',
                           borderBottom:'2px solid var(--primary-color)'
                         }}   ></div>
                         <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                            <h5>Venue Charge</h5>
                            <h6>${selectedVenueId&& (Number(selectedVenueId.personCharges)*totalPersons)}</h6>
                         </div>
                         <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                            <h5>Food Charges</h5>
                            <h6>${calculateFoodSectionPrice(selectedPackageDetails)}</h6>
                         </div>
                         <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                            <h5>Decor Charges</h5>
                            <h6>${calculateDecorPricing(selectedMdType,selectedCenterpieceType,selectedLightingType,selectedChairType,selectedStageTypeData)}</h6>
                         </div>
                         <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                            <h5>MIS Charges</h5>
                            <h6>${(isRoomSelected?totalPersons*5:0)+(selectedSoundSystemType!==null?selectedSoundSystemType.cost:0)}</h6>
                         </div>
                         <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                            <h5>Tax 6.625%</h5>
                            <h6>${((6.625/100 ).toFixed(2)*((selectedVenueId&& (Number(selectedVenueId.personCharges)*totalPersons))+(calculateFoodSectionPrice(selectedPackageDetails))+(calculateDecorPricing(selectedMdType,selectedCenterpieceType,selectedLightingType,selectedChairType,selectedStageTypeData))+(isRoomSelected?totalPersons*5:0)+(selectedSoundSystemType!==null?selectedSoundSystemType.cost:0))).toFixed(2)}</h6>
                         </div>
                    </div>

          


                    <div  className="bannerSlider0">
                    <img src="https://edengardensbanquet.com/wp-content/uploads/2024/01/EG-Logo-2.png" alt="" srcset="" />

                         
                    </div>
          <div className="topSection">
            <Stepper/>
            {(activeStep===4 || activeStep===5 || activeStep===6 )? <div className="divider mobile"></div>: <div className="divider">

            </div>}
          </div>    
          <div  className="middleSection">
            {
                activeStep===1?
                <Step1/>:
                activeStep===2?
                <Step2/>:
                activeStep===3?
                <Step3/>:
                (activeStep===4 || activeStep===5 || activeStep===6 || activeStep===7 )?
                <Step4/>:
                activeStep===8?
                <Step5/>:
                activeStep===9?
                <Step7/>:
                activeStep===10?
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
            {activeStep!==9? <button onClick={()=>{
                changeStepToNext();
            }} >
               { 
                activeStep===1? 
                'Next': 
                activeStep===2? 
                'Next':
                activeStep===3?
                'Next':
                activeStep===4?
                (selectedFoodTypeName !== 'None' ? 'Next': 'Skip'):
                activeStep===5?
                'Next':
                activeStep===6?
                ((selectedSoundSystemType !==null || isRoomSelected ===true  || isValetSelected === true || isSecuritySelected === true)?'Next' : 'Skip'):
                activeStep===7?
                'Next':
                activeStep===8?
                'Next':
                activeStep===9?
                'View Summary':
                activeStep===10?
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
        <Grid item lg={1.5} md={0} sm={0}></Grid>
        </Grid>
        <WarningInfoModal/>
      </>
    )
}

export default BookingSystemPage;