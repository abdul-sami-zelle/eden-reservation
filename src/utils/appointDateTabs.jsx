import React,{useContext} from "react";
import MainContext from "../context/mainContext";


function AppointmentDateTabs({isSelected,day,date,dated}) {
    const {setSelectedAppointmentDate,formatDateToYYYYMMDD,selectedAppointmentDate,fetchAppointmentDates} = useContext(MainContext);
    return(
        <div onClick={()=>{setSelectedAppointmentDate(formatDateToYYYYMMDD(dated));console.log(selectedAppointmentDate);fetchAppointmentDates(formatDateToYYYYMMDD(dated),"Shivani")}} className={isSelected?'calendarAppointmentCard selected':'calendarAppointmentCard'}>
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