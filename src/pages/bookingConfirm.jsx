import React, { useEffect, useState, useRef, useContext } from 'react';
import Grid from '@mui/material/Grid';
import backbtn1 from '../assets/backbtn1.png'
import backbtn2 from '../assets/backbtn2.png'
import MainContext from '../context/mainContext';
import check from '../assets/check.png'

function BookingConfirmed() {
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
        sendBookingDetails,selectedAppointmentDate,selectedAppointmentSlot

    } = useContext(MainContext);

    function convertTimeToISO(date, timeRange, slot) {
        // Parse the date in the format YYYY-MM-DD
        const [year, month, day] = date.split('-');
      
        // Parse the start and end time in the format hh:mm AM/PM - hh:mm AM/PM
        const [startTimeStr, endTimeStr] = timeRange.split(' - ');
      
        // Determine which time to use based on the slot parameter
        const [startHourStr, startMinuteStr, startMeridiem] = startTimeStr.split(/:| /);
        const [endHourStr, endMinuteStr, endMeridiem] = endTimeStr.split(/:| /);
      
        let hour, minute;
        if (slot === 1) {
            hour = parseInt(startHourStr, 10);
            minute = parseInt(startMinuteStr, 10);
            // Adjust hour for PM
            if (startMeridiem.toLowerCase() === 'pm' && hour < 12) {
                hour += 12;
            }
        } else if (slot === 2) {
            hour = parseInt(endHourStr, 10);
            minute = parseInt(endMinuteStr, 10);
            // Adjust hour for PM
            if (endMeridiem.toLowerCase() === 'pm' && hour < 12) {
                hour += 12;
            }
        } else {
            throw new Error("Invalid slot parameter. Use 1 for start time or 2 for end time.");
        }
      
        // Pad single digit hour with zero
        const paddedHour = hour.toString().padStart(2, '0');
      
        // Generate ISO string
        const time = `${year}${month}${day}T${paddedHour}${minute}00`;
      
        return time;
      }
    return(
        <Grid container>
            <Grid item lg={2.5}></Grid>
            <Grid item lg={7}>
                <div className="BookingConfirm">
                    <div className="upperAreaBC">
                        <img src={check} alt="" srcset=""/>
                        <h1>Your Inquiry Is In Processing</h1>
                    </div>

                    <div className="lowerAreaBC">
                        <div className="buttonSection">
                            <button onClick={()=>{}} >Go to Home</button>
                            <button onClick={()=>{
                                window.open(` https://calendar.google.com/calendar/render?action=TEMPLATE&text=Appointment&details=Event%20Appointment%20text&dates=${convertTimeToISO(selectedAppointmentDate,selectedAppointmentSlot,1)}/${convertTimeToISO(selectedAppointmentDate,selectedAppointmentSlot,2)}&location=${formData.city}`, '_blank', 'noopener,noreferrer');
                               
                            }} >Add to Calendar</button>
                        </div>
                      
                    </div>
            
            





                
                </div>
            </Grid>
            <Grid item lg={2.5}></Grid>
        </Grid>
    )
}

export default BookingConfirmed;