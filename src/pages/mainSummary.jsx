import React, { useEffect, useState, useRef, useContext } from 'react';
import Grid from '@mui/material/Grid';
import backbtn1 from '../../public/backbtn1.png'
import backbtn2 from '../../public/backbtn2.png'
import MainContext from '../context/mainContext';
import loader4 from '../../public/loader4.gif'

function MainSummary() {
    const [isHovered, setIsHovered] = useState(false);
    const {
        isSummaryPageOpen,setIsSummaryPageOpen,
        formData,
        publicEventChecked,
        privateEventChecked,ticketPrice,
        selectedEventValue,
        totalPersons,
        selectedVenueId,selectedDate,selectedSlotsVenue,formatDateToYYYYMMDD,
        selectedPackageDetails,calculatePackagePrice,calculateDecorPricing,selectedMdType,selectedCenterpieceType,selectedLightingType,selectedChairType,selectedTable,selectedSoundSystemType,isRoomSelected,
        sendBookingDetails,isBookingConfirming,selectedAppointmentSlot

    } = useContext(MainContext);
    return(
        <Grid container>
            <Grid item lg={1.5}></Grid>
            <Grid item lg={9}>
                <div className="mainSummary">
               
                    <div className="mainSummaryHeader">
                        <div className="backButtonMSH" onMouseEnter={()=>{setIsHovered(true)}} onMouseOut={()=>{setIsHovered(false)}} onClick={()=>{setIsSummaryPageOpen(false)}} >
                            <img src={isHovered? backbtn1 : backbtn2} alt="" srcset="" />
                            <h3>Go Back</h3>
                        </div>
                        <h2>Summary</h2>
                        
                    </div>
                    <div className="mainSummaryContent" style={{display:"flex",alignItems: 'center',
    justifyContent: 'center'}}>
                        <div className="summaryContainer">
                        <h2>Event Information</h2>
                       
                       <div style={{display:"flex"}}>
                       <div style={{display:'flex',flexDirection:'column',width:'50%'}}>
                            <div className='summaryItem'>
                                <h5>Event Type</h5>
                                <h4>{publicEventChecked?`Public (Ticket Price : $${ticketPrice})`:'Private'}</h4>
                            </div>
                            <div className='summaryItem'>
                                <h5>Event</h5>
                                <h4>{selectedEventValue}</h4>
                            </div>
                            <div className='summaryItem'>
                                <h5>Total Guests</h5>
                                <h4>{totalPersons}</h4>
                            </div>
                        </div>
                        <div style={{display:'flex',flexDirection:'column',width:'50%'}}>
                            <div className='summaryItem'>
                                <h5>Venue</h5>
                                <h4>{selectedVenueId && selectedVenueId.name}</h4>
                            </div>
                            <div className='summaryItem'>
                                <h5>Event Date</h5>
                                <h4>{selectedDate.format('YYYY-MM-DD')}</h4>
                            </div>
                            <div className='summaryItem'>
                                <h5>Event Slot</h5>
                                <h4>{selectedSlotsVenue}</h4>
                            </div>
                        </div>
                       </div>
                     
                        </div>


                        <div className="summaryContainer">
                        <h2>Contact Information</h2>
                       
                       <div style={{display:"flex"}}>
                       <div style={{display:'flex',flexDirection:'column',width:'50%'}}>
                            <div className='summaryItem'>
                                <h5>Full Name</h5>
                                <h4>{formData.firstName} {formData.lastName}</h4>
                            </div>
                         
                            <div className='summaryItem'>
                                <h5>Phone No.</h5>
                                <h4>{formData.phone}</h4>
                            </div>
                            <div className='summaryItem'>
                                <h5>Email</h5>
                                <h4>{formData.email}</h4>
                            </div>
                        </div>
                        <div style={{display:'flex',flexDirection:'column',width:'50%'}}>
                            <div className='summaryItem'>
                                <h5>Postal Code</h5>
                                <h4>{formData.zip}</h4>
                            </div>
                            <div className='summaryItem'>
                                <h5>City / State</h5>
                                <h4>{formData.city}/{formData.state}</h4>
                            </div>
                           
                        </div>
                       </div>
                     
                        </div>
                    </div>





                    <div className="mainSummaryContent" style={{display:"flex",alignItems:'center',justifyContent:'center'}}>

                      

                        <div className="summaryContainer2">
                        {/* <h2>Contact Information</h2> */}
                       <div style={{display:"flex"}}>
                       <div style={{display:'flex',flexDirection:'column',width:'25%'}}>
                            <div className='summaryItem'>
                                <h5>Venue Charges</h5>
                                <h4>${selectedVenueId&& (selectedVenueId.cpp*totalPersons)}</h4>
                            </div>
                         
                           
                        </div>
                        <div style={{display:'flex',flexDirection:'column',width:'25%'}}>
                            <div className='summaryItem'>
                                <h5>Food Charges</h5>
                                <h4>${calculatePackagePrice(selectedPackageDetails)}</h4>
                            </div>
                         
                           
                        </div>
                        <div style={{display:'flex',flexDirection:'column',width:'25%'}}>
                            <div className='summaryItem'>
                                <h5>Decor Charges</h5>
                                <h4>${calculateDecorPricing(selectedMdType,selectedCenterpieceType,selectedLightingType,selectedChairType)}</h4>
                            </div>
                         
                           
                        </div>

                        <div style={{display:'flex',flexDirection:'column',width:'25%'}}>
                            <div className='summaryItem'>
                                <h5>MIS Charges</h5>
                                <h4>${(isRoomSelected?totalPersons*5:0)+(selectedSoundSystemType!==null?selectedSoundSystemType.cost:0)}</h4>
                            </div>
                         
                           
                        </div>
                       </div>
                     
                        </div>
                    </div>


                    <div className="mainSummaryContent" style={{display:"flex",alignItems:'center',justifyContent:'center',marginTop:'10px'}}>

                      

                        <div className="summaryContainer2">
                        {/* <h2>Contact Information</h2> */}
                       <div style={{display:"flex"}}>
                       <div style={{display:'flex',flexDirection:'column',width:'25%'}}>
                            <div className='summaryItem'>
                                <h5>Venue Charges</h5>
                                <h4>Abdul Sami</h4>
                            </div>
                         
                           
                        </div>
                        <div style={{display:'flex',flexDirection:'column',width:'25%'}}>
                            <div className='summaryItem'>
                                <h5>Food Charges</h5>
                                <h4>Abdul Sami</h4>
                            </div>
                         
                           
                        </div>
                        <div style={{display:'flex',flexDirection:'column',width:'25%'}}>
                            <div className='summaryItem'>
                                <h5>Decor Charges</h5>
                                <h4>Abdul Sami</h4>
                            </div>
                         
                           
                        </div>

                        <div style={{display:'flex',flexDirection:'column',width:'25%'}}>
                            <div className='summaryItem'>
                                <h5>MIS Charges</h5>
                                <h4>Abdul Sami</h4>
                            </div>
                         
                           
                        </div>
                       </div>
                     
                        </div>
                    </div>

                    <div className="buttonSection">
                        <button onClick={sendBookingDetails} >Confirm Booking</button>
                    </div>

                    
                    {isBookingConfirming? <div className="bookingConfirmationOverlay">
                    <img src={loader4}  alt="" srcset="" />
                            </div>:<></>}
                </div>
            </Grid>
            <Grid item lg={1.5}></Grid>
        </Grid>
    )
}

export default MainSummary;