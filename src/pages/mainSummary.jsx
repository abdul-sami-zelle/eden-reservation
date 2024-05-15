import React, { useEffect, useState, useRef, useContext, act } from 'react';
import Grid from '@mui/material/Grid';
import backbtn1 from '../../public/backbtn1.png'
import backbtn2 from '../../public/backbtn2.png'

function MainSummary() {
    const [isHovered, setIsHovered] = useState(false);
    return(
        <Grid container>
            <Grid item lg={1.5}></Grid>
            <Grid item lg={9}>
                <div className="mainSummary">
                    <div className="mainSummaryHeader">
                        <div className="backButtonMSH" onMouseEnter={()=>{setIsHovered(true)}} onMouseOut={()=>{setIsHovered(false)}} >
                            <img src={isHovered? backbtn1 : backbtn2} alt="" srcset="" />
                            <h3>Go Back</h3>
                        </div>
                        <h2>Summary</h2>
                        
                    </div>
                    <div className="mainSummaryContent" style={{display:"flex"}}>
                        <div className="summaryContainer">
                        <h2>Event Information</h2>
                       
                       <div style={{display:"flex"}}>
                       <div style={{display:'flex',flexDirection:'column',width:'50%'}}>
                            <div className='summaryItem'>
                                <h5>Event Type</h5>
                                <h4>Private</h4>
                            </div>
                            <div className='summaryItem'>
                                <h5>Event</h5>
                                <h4>Anniversary</h4>
                            </div>
                            <div className='summaryItem'>
                                <h5>Total Guests</h5>
                                <h4>700</h4>
                            </div>
                        </div>
                        <div style={{display:'flex',flexDirection:'column',width:'50%'}}>
                            <div className='summaryItem'>
                                <h5>Venue</h5>
                                <h4>Ruby + Emerald</h4>
                            </div>
                            <div className='summaryItem'>
                                <h5>Event Date</h5>
                                <h4>24th May 2024</h4>
                            </div>
                            <div className='summaryItem'>
                                <h5>Event Slot</h5>
                                <h4>09:00 AM - 05:00 PM</h4>
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
                                <h4>Abdul Sami</h4>
                            </div>
                         
                            <div className='summaryItem'>
                                <h5>Phone No.</h5>
                                <h4>03242824117</h4>
                            </div>
                            <div className='summaryItem'>
                                <h5>Email</h5>
                                <h4>abdulsami.zelleoslutions@gmail.com</h4>
                            </div>
                        </div>
                        <div style={{display:'flex',flexDirection:'column',width:'50%'}}>
                            <div className='summaryItem'>
                                <h5>Postal Code</h5>
                                <h4>10002</h4>
                            </div>
                            <div className='summaryItem'>
                                <h5>City / State</h5>
                                <h4>New York/New York</h4>
                            </div>
                           
                        </div>
                       </div>
                     
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item lg={1.5}></Grid>
        </Grid>
    )
}

export default MainSummary;