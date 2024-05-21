import React, { useState, useRef, useEffect,useContext } from 'react';
import shivani from '../../public/shivani.png';
import video from '../../public/video.png';
import time from '../../public/time.png';
import AppointmentDateTabs from '../utils/appointDateTabs';
import video2 from '../../public/video2.png';
import inperson2 from '../../public/inperson2.png';
// import video from '../../public/video.png';
import inperson from '../../public/inperson.png';
import back from '../../public/back.png';
import { colors } from '../utils/colors';
import LabelHeading from '../utils/labelsHeading';
import CircularButtons from '../utils/circularButtons/circularButton';
import DateList from '../utils/appointmentDates';
import MainContext from '../context/mainContext';
import SelectField3 from '../utils/selectField3';
import Checkboxes from './checkbox/checkbox';

function ConsultantInfo() {
    const appointmentDatesRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [startX, setStartX] = useState(null);
    const [scrollLeft, setScrollLeft] = useState(0);
    const lastDate = new Date(2024, 5, 30);
    const {appointmentDates,selectedAppointmentDate,setSelectedAppointmentDate,formatDateToYYYYMMDD,availableAppointmentSlots,appointmentSlots,showSelectFieldAppointmentSlots,setSelectFieldAppointmentSlots,selectedAppointmentSlot,setAppointmentSlot,appointmentType,setAppointmentType} = useContext(MainContext);

    useEffect(() => {
        const handleScroll = () => {
            if (appointmentDatesRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = appointmentDatesRef.current;
                setCanScrollLeft(scrollLeft > 0);
                setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
            }
        };

        if (appointmentDatesRef.current) {
            appointmentDatesRef.current.addEventListener('scroll', handleScroll);
            handleScroll();
        }

        return () => {
            if (appointmentDatesRef.current) {
                appointmentDatesRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const handleMouseDown = (e) => {
        setStartX(e.pageX - appointmentDatesRef.current.offsetLeft);
        setScrollLeft(appointmentDatesRef.current.scrollLeft);
        appointmentDatesRef.current.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e) => {
        if (!startX) return;
        e.preventDefault();
        const x = e.pageX - appointmentDatesRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        appointmentDatesRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setStartX(null);
        appointmentDatesRef.current.style.cursor = 'grab';
    };

    return (
        <>
            <div className="mainContainerConsultantInfo">
                <div className="mainImageSectionCI">
                    <div className="imgSectionCI"></div>
                    <div className="imageSectionCI1">
                        <img src={shivani} alt="" />
                    </div>
                    <div className="imageSectionUnderline"></div>
                </div>

                <div className="descriptionCI">
                    <h3 onClick={()=>{console.log(appointmentDates)}}>Shivani Thalapally</h3>
                    <LabelHeading text={"Please Select Appointment Type"} color={colors.secondary} fontSize={"14px"} margin={"0px  0px 10px 0px"} family={'Montserrat'} weight={"500"} />
                    <div style={{ display: 'flex', marginTop: '5px' }}>
                        {/* <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img style={{ height: '25px', width: '25px' }} src={video} alt="" />
                            <p style={{ fontFamily: 'Montserrat', fontSize: "14px", fontWeight: "bold", margin: '0 0px 0 5px' }}>Zoom</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '0px' }}>
                            <img style={{ height: '22px', width: '22px' }} src={time} alt="" />
                            <p style={{ fontFamily: 'Montserrat', fontSize: "14px", fontWeight: "bold", margin: '0 0px 0 5px' }}>30 min</p>
                        </div> */}
                        <div onClick={()=>{
                            if(appointmentType===0){
                                setAppointmentType(null);
                            }else{
                                setAppointmentType("0");
                            }
                        }} className={appointmentType==="0"?"appointmentType selected":"appointmentType"}>
                            <img src={inperson} alt="" srcset="" />
                            <p>
                                In Person
                            </p>
                        </div>
                        <div onClick={()=>{
                                if(appointmentType===1){
                                  setAppointmentType(null);
                                }else{
                                  setAppointmentType("1");
                                }
                        }} className={appointmentType==="1"?"appointmentType selected":"appointmentType"}>
                            <img src={video2} alt="" srcset="" />
                            <p>
                                Video Call
                            </p>
                        </div>
                    </div>
                    <div style={{display:'flex',flexDirection:'column'}}> 
                    <div  style={{display:'flex',width:'350px',justifyContent:'space-between',alignItems:'center'}}>
                        <LabelHeading text={"Please Select Appointment Date"} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} weight={"500"} />
                        <div style={{ display:'flex' }}>
                           
                            {canScrollLeft && <CircularButtons type={"back"} onpressed={() => appointmentDatesRef.current.scrollBy({ left: -100, behavior: 'smooth' })} />}
                            {canScrollRight &&  <CircularButtons type={"forward"} onpressed={() => appointmentDatesRef.current.scrollBy({ left: 100, behavior: 'smooth' })} />}
                   
                        </div>
                    </div>
                    <div
                        className="appointmentDates"
                        ref={appointmentDatesRef}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                    >
                         {appointmentDates.map((date, index) => (
                            <AppointmentDateTabs day={date.toLocaleDateString('en-US', { weekday: 'short' })} date={date.getDate().toString().padStart(2, '0')} dated={date} isSelected={selectedAppointmentDate===formatDateToYYYYMMDD(date)} />
                       ))}
                        
                        {/* <AppointmentDateTabs />
                        <AppointmentDateTabs />
                        <AppointmentDateTabs />
                        <AppointmentDateTabs />
                        <AppointmentDateTabs />
                        <AppointmentDateTabs />
                        <AppointmentDateTabs />
                        <AppointmentDateTabs />
                        <AppointmentDateTabs />
                        <AppointmentDateTabs />
                        <AppointmentDateTabs /> */}
                    </div>
                   
                   {showSelectFieldAppointmentSlots ?(<div style={{display:'flex',flexDirection:'column'}}>
                   <LabelHeading text={"Please Select Appointment Slot"} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} weight={"500"} />
                  
    <SelectField3
        options={availableAppointmentSlots}
        placeholder={`Select Slot`}
        label=""
        onChange={setAppointmentSlot}
        value={selectedAppointmentSlot}
        width="300px"
        backgroundColor={colors.primary}
    />

                   </div>):<></>}

                
                    </div>
                    <div>
               {/* <ul>
               {appointmentDates.map((date, index) => (
                    <li key={index}>{date.toDateString()}</li>
                ))}
               </ul> */}
             
        </div>
                </div>
            </div>
        </>
    );
}

export default ConsultantInfo;