import React,{useContext} from "react";
import MainContext from "../context/mainContext";


function AppointmentDateTabs({isSelected,day,date,dated}) {
    const {setSelectedAppointmentDate,formatDateToYYYYMMDD,selectedAppointmentDate,fetchAppointmentDates,setAppointmentSlotsLoading} = useContext(MainContext);
    return(
        <div onClick={()=>{
            setAppointmentSlotsLoading(true);
            setSelectedAppointmentDate(formatDateToYYYYMMDD(dated));
            console.log(selectedAppointmentDate);
            fetchAppointmentDates(formatDateToYYYYMMDD(dated),"Shivani")}} className={isSelected?'calendarAppointmentCard selected':'calendarAppointmentCard'}>
            <div className="dateAppointmentCard">
                {date}
            </div>
            <div className="dayAppointmentCard">
                {day}
            </div>
        </div>
    )
}

export default AppointmentDateTabs;