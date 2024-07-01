import React, { useEffect, useState, useRef, useContext } from 'react';
import Grid from '@mui/material/Grid';
import backbtn1 from '../assets/backbtn1.png'
import backbtn2 from '../assets/backbtn2.png'
import MainContext from '../context/mainContext';
import loader4 from '../assets/loader4.gif'

function MainSummary() {
    const [isHovered, setIsHovered] = useState(false);
    const {
        isSummaryPageOpen, setIsSummaryPageOpen,
        formData,
        publicEventChecked,
        privateEventChecked, ticketPrice,
        selectedEventValue,
        totalPersons,
        selectedVenueId, selectedDate, selectedSlotsVenue, formatDateToYYYYMMDD,
        selectedPackageDetails, calculatePackagePrice, calculateDecorPricing, selectedMdType, selectedCenterpieceType, selectedLightingType, selectedChairType, selectedTable, selectedSoundSystemType, isRoomSelected,
        sendBookingDetails, isBookingConfirming, selectedAppointmentSlot, selectedFoodTypeName, selectedFoodPackage, selectedDiningStyleType, selectedCutleryStyleTypeData, diningStyleTypesData, selectedArrangement, selectedStageTypeData,
        isValetSelected, eachValetCost,
        totalValetSelected, isSecuritySelected,
        eachGuardCost,
        totalGuardsSelected,
        selectedDiningStyleTypeData,
        calculateFoodSectionPrice,
        eventTitle


    } = useContext(MainContext);

    function combineTimeSlots(timeSlots) {
        // Function to convert 12-hour time to 24-hour time
        function convertTo24Hour(time) {
          let [hour, minute, period] = time.match(/(\d{2}):(\d{2}) (\w{2})/).slice(1);
          hour = parseInt(hour);
          minute = parseInt(minute);
          if (period === 'PM' && hour !== 12) hour += 12;
          if (period === 'AM' && hour === 12) hour = 0;
          return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        }
      
        // Function to convert 24-hour time to 12-hour time
        function convertTo12Hour(time) {
          let [hour, minute] = time.split(':').map(Number);
          const period = hour >= 12 ? 'PM' : 'AM';
          if (hour > 12) hour -= 12;
          if (hour === 0) hour = 12;
          return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')} ${period}`;
        }
      
        // Function to check if two times are contiguous
        function isContiguous(endTime, startTime) {
          const [endHour, endMinute] = endTime.split(':').map(Number);
          const [startHour, startMinute] = startTime.split(':').map(Number);
          const endTotalMinutes = endHour * 60 + endMinute;
          const startTotalMinutes = startHour * 60 + startMinute;
          const diff = startTotalMinutes - endTotalMinutes;
          return diff === 0; // Change to check for exact adjacency in case of time slots being contiguous
        }
      
        // Convert the time slots to 24-hour format and sort them by start time
        const timeSlots24 = timeSlots.map(slot => ({
          start: convertTo24Hour(slot.split(' - ')[0]),
          end: convertTo24Hour(slot.split(' - ')[1])
        })).sort((a, b) => a.start.localeCompare(b.start));
      
        const combinedSlots = [];
        let currentSlot = timeSlots24[0];
      
        for (let i = 1; i < timeSlots24.length; i++) {
          if (isContiguous(currentSlot.end, timeSlots24[i].start)) {
            // Extend the current slot to the end of the current time slot
            currentSlot.end = timeSlots24[i].end;
          } else {
            // Push the current slot to the result and start a new slot
            combinedSlots.push(currentSlot);
            currentSlot = timeSlots24[i];
          }
        }
        // Push the last slot
        combinedSlots.push(currentSlot);
      
        // Convert the combined slots back to 12-hour format
        const result = combinedSlots.map(slot => {
          const startTime12Hour = convertTo12Hour(slot.start);
          const endTime12Hour = convertTo12Hour(slot.end);
          return `${startTime12Hour} - ${endTime12Hour}`;
        });
      
        return result.join(', ');
      }
      
      
   
      
      
    return (
        <Grid container className='mainCenter'>
            <Grid item lg={1.5}></Grid>
            <Grid item lg={9}  sm={12} xs={12}>
                <div className="mainSummary">

                    <div className="mainSummaryHeader">
                        <div className="backButtonMSH" onMouseEnter={() => { setIsHovered(true) }} onMouseOut={() => { setIsHovered(false) }} onClick={() => { setIsSummaryPageOpen(false) }} >
                            <img src={isHovered ? backbtn1 : backbtn2} alt="" srcset="" />
                            <h3>Go Back</h3>
                        </div>
                        <h2>Summary</h2>

                    </div>



                    <div className="mainSummaryPage_0">
                        <div className='summaryHeading'>
                            <h2 className='heading2SH'>Customer</h2>
                        </div>

                        <div className="customer-details">
                            <div className="customer-detail">
                                <span className="label">Name:</span>
                                <span className="value">{formData.firstName}  {formData.lastName}</span>
                            </div>
                            <div className="customer-detail">
                                <span className="label">Email:</span>
                                <span className="value">{formData.email}</span>
                            </div>
                            <div className="customer-detail">
                                <span className="label">Phone:</span>
                                <span className="value">{formData.phone}</span>
                            </div>
                            <div className="customer-detail">
                                <span className="label">Zip / State</span>
                                <span className="value">{formData.zip} / {formData.state}</span>
                            </div>
                            <div className="customer-detail">
                                <span className="label">City:</span>
                                <span className="value">{formData.city}</span>
                            </div>
                        </div>



                        <div className='summaryHeading'>
                            <h2 className='heading2SH'>{eventTitle!==""?eventTitle:"Event"}</h2>
                        </div>

                        <div className='eventDetails_0' >
                            <div className="customer-details">
                                <div className="customer-detail">
                                    <span className="label">Event Type:</span>
                                    <span className="value">{publicEventChecked ? "Public" : "Private"}</span>
                                </div>
                               {ticketPrice!==""? <div className="customer-detail">
                                    <span className="label">Ticket Price:</span>
                                    <span className="value">  ${ticketPrice}</span>
                                </div>:<></>}
                                <div className="customer-detail">
                                    <span className="label">Event :</span>
                                    <span className="value">{selectedEventValue.toUpperCase()}</span>
                                </div>
                                <div className="customer-detail">
                                    <span className="label">Total Guest:</span>
                                    <span className="value">{totalPersons}</span>
                                </div>
                                <div className="customer-detail">
                                    <span className="label">Event Date:</span>
                                    <span className="value">{selectedDate.toString()}</span>
                                </div>
                                <div className="customer-detail">
                                    <span className="label">Event Slot:</span>
                                    <span className="value">{combineTimeSlots(selectedSlotsVenue)}</span>
                                </div>
                            </div>


                            <div className="customer-details">
                                <div className="customer-detail">
                                    <span className="label">Appointment Date:</span>
                                    <span className="value">{selectedAppointmentSlot}</span>
                                </div>
                                <div className="customer-detail">
                                    <span className="label">Appointment Slot:</span>
                                    <span className="value">{selectedAppointmentSlot}</span>
                                </div>
                                <div className="customer-detail">
                                    <span className="label">Venue:</span>
                                    <span className="value">{selectedVenueId.name}</span>
                                </div>

                            </div>
                        </div>
                        <div className='summaryHeading'>
                            <h2 className='heading2SH'>Other Selections</h2>
                        </div>

                        <div className="event-goods-details">
                      
                            {selectedFoodTypeName === 'None' ? <></> :

                                <>



                                    <div className="event-goods-detail">
                                        <div className="serial-no-EGD">
                                            1
                                        </div>
                                        <div className="name-no-EGD">
                                            {selectedFoodTypeName} {selectedFoodPackage}
                                        </div>
                                        <div className="pricing-no-EGD">
                                            $ 100
                                        </div>
                                    </div>
                                    <div className="event-goods-detail">
                                        <div className="serial-no-EGD">
                                            2
                                        </div>
                                        <div className="name-no-EGD">
                                            {selectedDiningStyleTypeData.name}
                                        </div>
                                        <div className="pricing-no-EGD">
                                            ${selectedDiningStyleTypeData.cost}
                                        </div>
                                    </div>
                                    <div className="event-goods-detail">
                                        <div className="serial-no-EGD">
                                            3
                                        </div>
                                        <div className="name-no-EGD">
                                            {selectedCutleryStyleTypeData.name}
                                        </div>
                                        <div className="pricing-no-EGD">
                                            ${selectedCutleryStyleTypeData.cost}
                                        </div>
                                    </div>



                                </>
                            }
                            <div className="event-goods-detail">
                                <div className="serial-no-EGD">
                                    4
                                </div>
                                <div className="name-no-EGD">
                                    {selectedVenueId.name} Venue
                                </div>
                                <div className="pricing-no-EGD">
                                    ${selectedVenueId.cpp*totalPersons}
                                </div>
                            </div>
                            <div className="event-goods-detail">
                                <div className="serial-no-EGD">
                                    4
                                </div>
                                <div className="name-no-EGD">
                                    {selectedArrangement} Style Seating Arrangement
                                </div>
                                <div className="pricing-no-EGD">
                                    $0
                                </div>
                            </div>
                            <div className="event-goods-detail">
                                <div className="serial-no-EGD">
                                    5
                                </div>
                                <div className="name-no-EGD">
                                    {selectedChairType.name}
                                </div>
                                <div className="pricing-no-EGD">
                                   ${selectedChairType.cost * totalPersons}
                                </div>
                            </div>
                            <div className="event-goods-detail">
                                <div className="serial-no-EGD">
                                    6
                                </div>
                                <div className="name-no-EGD">
                                    {selectedStageTypeData.label}
                                </div>
                                <div className="pricing-no-EGD">
                                    ${selectedStageTypeData.cost}
                                </div>
                            </div>
                            {selectedMdType !== null ? <div className="event-goods-detail">
                                <div className="serial-no-EGD">
                                    6
                                </div>
                                <div className="name-no-EGD">
                                    {selectedMdType.name}
                                </div>
                                <div className="pricing-no-EGD">
                                    ${selectedMdType.cost}
                                </div>
                            </div> : <></>}
                            {selectedCenterpieceType !== null ? <div className="event-goods-detail">
                                <div className="serial-no-EGD">
                                    7
                                </div>
                                <div className="name-no-EGD">
                                    {selectedCenterpieceType.name}
                                </div>
                                <div className="pricing-no-EGD">
                                    ${selectedCenterpieceType.cost}
                                </div>
                            </div> : <></>}
                            {selectedLightingType !== null ? <div className="event-goods-detail">
                                <div className="serial-no-EGD">
                                    8
                                </div>
                                <div className="name-no-EGD">
                                    {selectedLightingType.name}
                                </div>
                                <div className="pricing-no-EGD">
                                    ${selectedLightingType.cost}
                                </div>
                            </div> : <></>}
                            {selectedSoundSystemType !== null ? <div className="event-goods-detail">
                                <div className="serial-no-EGD">
                                    9
                                </div>
                                <div className="name-no-EGD">
                                    {selectedSoundSystemType.name}
                                </div>
                                <div className="pricing-no-EGD">
                                    ${selectedSoundSystemType.cost}
                                </div>
                            </div> : <></>}
                            {isRoomSelected ? <div className="event-goods-detail">
                                <div className="serial-no-EGD">
                                    10
                                </div>
                                <div className="name-no-EGD">
                                    Extra 1 Room
                                </div>
                                <div className="pricing-no-EGD">
                                    ${5 * totalPersons}
                                </div>
                            </div> : <></>}
                            {isValetSelected ? <div className="event-goods-detail">
                                <div className="serial-no-EGD">
                                    11
                                </div>
                                <div className="name-no-EGD">
                                    {totalValetSelected} Valets
                                </div>
                                <div className="pricing-no-EGD">
                                    ${eachValetCost * totalValetSelected}
                                </div>
                            </div> : <></>}
                            {isSecuritySelected ? <div className="event-goods-detail">
                                <div className="serial-no-EGD">
                                    11
                                </div>
                                <div className="name-no-EGD">
                                    {totalGuardsSelected} Guards
                                </div>
                                <div className="pricing-no-EGD">
                                    ${totalGuardsSelected * eachGuardCost}
                                </div>
                            </div> : <></>}
                        </div>

                        <div className="event-goods-Totals">
                            <div className="event-goods-Total">
                                <div>

                                </div>
                                <div className="total_section">
                                    <div className="total_section_0">
                                        <div className="total_section_0_1">
                                            <div className="sub_total_label">
                                                Sub Total 
                                            </div>
                                            <div className="sub_total_value">
                                                ${
                                            (    (calculateFoodSectionPrice(selectedPackageDetails)*totalPersons)
                                                + (selectedVenueId.cpp*totalPersons) 
                                                + (isValetSelected? (eachValetCost * totalValetSelected):0) 
                                                + (isSecuritySelected? (eachGuardCost * totalGuardsSelected):0)  
                                                + (isRoomSelected? (5 * totalPersons):0) 
                                                + (selectedSoundSystemType!==null?selectedSoundSystemType.cost:0) 
                                                + (selectedChairType.cost) 
                                                + (selectedMdType!==null? selectedMdType.cost :0) 
                                                + (selectedCenterpieceType !== null? selectedCenterpieceType.cost :0) 
                                                + (selectedLightingType !== null ? selectedLightingType.cost :0))}
                                            </div>
                                        </div>

                                        <div className="total_section_0_2">
                                        <div className="tax_label">
                                                Tax 6.625 %
                                            </div>
                                            <div className="tax_value">
                                                ${
                                                   ( (6.625/100 )*(
                                                        (calculateFoodSectionPrice(selectedPackageDetails)*totalPersons)
                                                        + (selectedVenueId.cpp*totalPersons) 
                                                        + (isValetSelected? (eachValetCost * totalValetSelected):0) 
                                                        + (isSecuritySelected? (eachGuardCost * totalGuardsSelected):0)  
                                                        + (isRoomSelected? (5 * totalPersons):0) 
                                                        + (selectedSoundSystemType!==null?selectedSoundSystemType.cost:0) 
                                                        + (selectedChairType.cost * totalPersons) 
                                                        + (selectedMdType!==null? selectedMdType.cost :0) 
                                                        +(selectedStageTypeData.cost)
                                                        + (selectedCenterpieceType !== null? selectedCenterpieceType.cost :0) 
                                                        + (selectedLightingType !== null ? selectedLightingType.cost :0)
                                                    )).toFixed(2)
                                                }
                                            </div>
                                        </div>
                                        <div className="total_section_0_3">
                                        <div className="sub_total_label">
                                                Grand Total
                                            </div>
                                            <div className="sub_total_value">
                                                ${
                                                    (( (6.625/100 )*(
                                                        (calculateFoodSectionPrice(selectedPackageDetails)*totalPersons)
                                                        + (selectedVenueId.cpp*totalPersons) 
                                                        + (isValetSelected? (eachValetCost * totalValetSelected):0) 
                                                        + (isSecuritySelected? (eachGuardCost * totalGuardsSelected):0)  
                                                        + (isRoomSelected? (5 * totalPersons):0) 
                                                        + (selectedSoundSystemType!==null?selectedSoundSystemType.cost:0) 
                                                        + (selectedChairType.cost * totalPersons) 
                                                        + (selectedMdType!==null? selectedMdType.cost :0) 
                                                        +(selectedStageTypeData.cost)
                                                        + (selectedCenterpieceType !== null? selectedCenterpieceType.cost :0) 
                                                        + (selectedLightingType !== null ? selectedLightingType.cost :0)
                                                    ))+
                                                    (
                                                        (calculateFoodSectionPrice(selectedPackageDetails)*totalPersons)
                                                        + (selectedVenueId.cpp*totalPersons) 
                                                        + (isValetSelected? (eachValetCost * totalValetSelected):0) 
                                                        + (isSecuritySelected? (eachGuardCost * totalGuardsSelected):0)  
                                                        + (isRoomSelected? (5 * totalPersons):0) 
                                                        + (selectedSoundSystemType!==null?selectedSoundSystemType.cost:0) 
                                                        + (selectedChairType.cost  * totalPersons) 
                                                        + (selectedMdType!==null? selectedMdType.cost :0) +
                                                        (selectedStageTypeData.cost)
                                                        + (selectedCenterpieceType !== null? selectedCenterpieceType.cost :0) 
                                                        + (selectedLightingType !== null ? selectedLightingType.cost :0)
                                                    )).toFixed(2)

                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className="customerDetailsSection_0">
                            {/* <div className="section01_0">
                                <div className="section01_0_sub">
                                    <div className="labelHeadingS">
                                        Name
                                    </div>
                                </div>
                                <div className="section02_0_sub">
                                    <div className="labelHeadingS">
                                        abdulsami.zellesolutions@gmail.com
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="section02_0">
                            <div className="section01_0_sub">
                                    <div className="labelHeadingS">
                                        Name
                                    </div>
                                </div>
                                <div className="section02_0_sub">
                                    <div className="labelHeadingS">
                                        abdulsami.zellesolutions@gmail.comksdksdkjadkjhkjh
                                    </div>
                                </div>
                            </div> */}
                        </div>


                        <div className="customerDetailsSection_0">
                            {/* <div className="section01_0">
                                <div className="section01_0_sub">
                                    <div className="labelHeadingS">
                                        Name
                                    </div>
                                </div>
                                <div className="section02_0_sub">
                                    <div className="labelHeadingS">
                                        abdulsami.zellesolutions@gmail.com
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="section02_0">
                            <div className="section01_0_sub">
                                    <div className="labelHeadingS">
                                        Name
                                    </div>
                                </div>
                                <div className="section02_0_sub">
                                    <div className="labelHeadingS">
                                        abdulsami.zellesolutions@gmail.comksdksdkjadkjhkjh
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>









                    {/* <div className="mainSummaryContent" style={{display:"flex",alignItems: 'center',
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
                    </div> */}

                    <div className="buttonSection">
                        <button onClick={sendBookingDetails} >Confirm Booking</button>
                    </div>


                    {isBookingConfirming ? <div className="bookingConfirmationOverlay">
                        <img src={loader4} alt="" srcset="" />
                    </div> : <></>}
                </div>
            </Grid>
            <Grid item lg={1.5}></Grid>
        </Grid>
    )
}

export default MainSummary;