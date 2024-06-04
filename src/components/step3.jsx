import { Calendar } from "antd";
import React, { useState,useContext,useRef } from 'react';
import dayjs from "dayjs";
import forward from '../assets/forward.png';
import back from '../assets/back.png';
import { colors } from "../utils/colors";
import LabelHeading from "../utils/labelsHeading";
import MainContext from '../context/mainContext';
import loader4 from '../assets/loader4.gif'


function Step3() {
    const {selectedDate, setSelectedDate,fetchSlotsDate,availableSlots,setAvailableSlots ,banquetSlots,isSlotsLoading, setSlotsLoading,generateDateList,appointmentDates,selectedSlotsVenue, setSelectedSlotsVenue} = useContext(MainContext);
    const [selectedSlots, setSelectedSlots] = useState([]);

    const handleSlotClick = (slot) => {
        // Toggle the 'selected' attribute of the clicked slot
        const updatedSlots = availableSlots.map(item => {
            if (item._id === slot._id) {
                return { ...item, selected: !item.selected };
            }
            return item;
        });
        
        // Update the state with the updated slots
        setAvailableSlots(updatedSlots);
    
        // If the slot is selected, add its time to the list
        if (!slot.selected) {
            setSelectedSlotsVenue(prevSelectedSlots => [...prevSelectedSlots, slot.slot]);
        } else {
            // If the slot is deselected, remove its time from the list
            setSelectedSlotsVenue(prevSelectedSlots => prevSelectedSlots.filter(selectedSlot => selectedSlot !== slot.slot));
        }
        console.log(selectedSlotsVenue);
    };
    



    const [value, setValue] = useState(dayjs(new Date()));
    const [hoveredDate, setHoveredDate] = useState(null);
    const [transitionDirection, setTransitionDirection] = useState(null);



    
    const [selectedCellStyle, setSelectedCellStyle] = useState({
        height: '50px',
        textAlign: 'center',
        lineHeight: '50px',
        background: '#b78953', // Default background color for selected dates
        color: '#fff', 
        margin:'5px'
        // Default text color for selected dates
    });

    const containerRef = useRef(null);

  const scrollDown = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        top: 400, // Adjust this value to scroll down by a specific amount
        behavior: 'smooth',
      });
    }
  };
    const onSelect = (date) => {
        scrollDown();
        fetchSlotsDate(date?.format('YYYY-MM-DD'));
        setSelectedDate(date);
        generateDateList(date?.format('YYYY-MM-DD'));
        // console.log(appointmentDates);
        console.log(date?.format('YYYY-MM-DD'));
    };

    const customHeaderRender = ({ value, type }) => {
        const headerText = type === 'year' ? value.year() : value.format('MMMM YYYY');
        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
        const renderDayNames = () => (
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#fff', fontWeight: '600', width: '90%',padding: '5px 0px' }}>
                {dayNames.map((day, index) => (
                    <div key={index} style={{ fontSize: '14px' }}>{day}</div>
                ))}
            </div>
        );
    
        return (
            <div>
                <div style={{ padding: '5px', textAlign: 'center', background: '#fff', color: '#fff', borderRadius: '10px', display:"flex",alignItems:'center',justifyContent:'space-between',boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
                    <span onClick={() => {
                        setValue(type === 'year' ? value.subtract(1, 'year') : value.subtract(1, 'month'));
                        setTransitionDirection('backward');
                    }} style={{ fontSize: '18px', cursor: 'pointer',border:`1px solid ${colors.primary}`,padding:"4px 12px",borderRadius:"100%" ,userSelect:"none"}}>
                        <img style={{
                            height:"12px",
                            width:"12px"
                        }} src={back} alt="" />
                    </span>
                    <span style={{ padding:"4px" ,fontSize:'12px',borderRadius:"5px",backgroundColor:colors.secondary}}>{headerText}</span>
                    <span onClick={() => {
                        setValue(type === 'year' ? value.add(1, 'year') : value.add(1, 'month'));
                        setTransitionDirection('forward');
                    }} style={{ fontSize: '18px', cursor: 'pointer',border:`1px solid ${colors.primary}`,padding:"4px 12px",borderRadius:"100%" ,userSelect:"none"}}>
                        <img style={{
                                height:"12px",
                                width:"12px"
                            }} src={forward} alt="" />
                    </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0px',backgroundColor:colors.secondary }}>
                    {renderDayNames()}
                </div>
            </div>
        );
    };
    
    const customDateCellRender = (date) => {
        const isSelected = date.isSame(selectedDate, 'day');
        const isCurrentMonth = date.isSame(value, 'month');
        const isFutureDate = date.isAfter(dayjs(), 'day');
        const isToday = date.isSame(dayjs(), 'day');
    
        // Check if the date is in the current month
        const isInCurrentMonth = date.isSame(value, 'month');
    
        // Render the cell only if it's in the current month
        if (!isInCurrentMonth) {
            return null;
        }
    
        // Set color based on whether it's future, today, or past
        let textColor = isFutureDate || isToday ? '#fff' : 'rgb(116, 111, 111)';
    
        return (
            <div
            style={{
                ...selectedCellStyle,
                background: isSelected ? selectedCellStyle.background : (hoveredDate && hoveredDate.isSame(date, 'day')) ? selectedCellStyle.background : 'transparent',
                borderRadius: "4px",
                color: isSelected ? selectedCellStyle.color : (hoveredDate && hoveredDate.isSame(date, 'day')) ? selectedCellStyle.color : textColor,
                cursor: isFutureDate ? 'pointer' : 'not-allowed', // Enable click for future dates
            }}
                onMouseEnter={() => {
                    if (isFutureDate) {
                        setHoveredDate(date);
                    }
                }}
                onMouseLeave={() => setHoveredDate(null)}
                onClick={() => {
                    if (isFutureDate) {
                        onSelect(date);
                    }
                }}
                className='dates'
            >
                {date.date()}
            </div>
        );
    };

    
    
    

    return (
        <div className="dateTimeSelectionEvent" ref={containerRef}>
            <div className="calendarEventDateSelection" style={{ width: '35%',height:'100px',marginTop:'15px' }}>
            <div onClick={()=>{
                console.log(selectedSlots);
            }}><LabelHeading text={"Please Select Event Date"} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} weight={"500"} /></div>
                <Calendar
                    value={value}
                    headerRender={customHeaderRender}
                    fullCellRender={customDateCellRender}
                    style={{ height: "100%", marginTop: "10px" }}
                />
            </div>

            <div className="spacer1" style={{width:'3%'}}>

            </div>

            <div className="eventSlotsSelection" style={{ width: '35%',height:'' }}>

                <div className="slotsEvents">
                    <LabelHeading text={"Please Select Event Slot(s)"} color={colors.secondary} fontSize={"14px"} margin={"0px 0px 15px 0"} family={'Montserrat'} weight={"500"} />
                   {!isSlotsLoading? <div className="slots">
                        {availableSlots.length>0 ?
                            (availableSlots.map((item, index) => (
                                <div key={item._id} onClick={() => handleSlotClick(item)} className={`slotInd ${item.availability === "no" ? "deactivate" : ""} ${item.selected ? "selected" : ""}`}>
                                {item.slot}
                            </div>
                             ))):(
                                banquetSlots.map((item, index) => (
                                    <div className={`slotInd ${item.availability==="no"?"deactivate":""}`}>
                                    {item.slot}
                                </div>
                                ))
                             )
                        }
                       
                    </div>:
                    <div>
                      <div className="slots">
                         
                          { banquetSlots.map((item, index) => (
                                <div className="slotInd">
                                    {item.slot}
                                </div>
                                ))}

                            
                                
                      
                        </div>
                    </div>
                    }
                    <div onClick={()=>{
                        console.log(appointmentDates);
                    }} className="instructionTimeSlot">
                            <img src="https://cdn-icons-png.flaticon.com/128/9195/9195785.png"
                                            alt="" srcset="" />
    
                                        All Times in Eastern Standard Time (USA)
                    </div>

                   {isSlotsLoading? <div className="slotsLoaderOverlay">
                    <img src={loader4}  alt="" srcset="" />
                            </div>:<></>}
                </div>
            </div>
        </div>
    )
}

export default Step3;
