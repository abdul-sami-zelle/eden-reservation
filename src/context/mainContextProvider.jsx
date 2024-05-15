import React , {useState} from "react";
import MainContext from "./mainContext";
import dayjs from "dayjs";
import { message } from "antd";


const MainContextProvider = ({children})=>{

    // <------------Step 1 States------------>:
    // public events

    const publicEvents = [
        {
            label:"Independence Day",
            value:"independence day",
            icon1:"../../public/independence.png",
            icon2:"../../public/independence1.png",
        },
        {
            label:"New Year Celebration",
            value:"new year celebration",
            icon1:"../../public/hny.png",
            icon2:"../../public/hny0.png",
        },
        {
            label:"Music Concert",
            value:"music concert",
            icon1:"../../public/music.png",
            icon2:"../../public/music0.png",
        },
        {
            label:"Art Exhibition",
            value:"art exhibition",
            icon1:"../../public/artexh.png",
            icon2:"../../public/artexh0.png",
        },
        {
            label:"Trade Show",
            value:"trade show",
            icon1:"../../public/tradeShow.png",
            icon2:"../../public/tradeShow0.png",
        },
    ]


      // private events


    const privateEvents = [
        {
            label:"Wedding",
            value:"wedding",
            icon1:"../../public/independence.png",
            icon2:"../../public/independence1.png",
        },
        {
            label:"Anniversary",
            value:"anniversary",
            icon1:"../../public/hny.png",
            icon2:"../../public/hny0.png",
        },
        {
            label:"Birthday",
            value:"birthday",
            icon1:"../../public/music.png",
            icon2:"../../public/music0.png",
        },
        {
            label:"Engagement",
            value:"engagement",
            icon1:"../../public/artexh.png",
            icon2:"../../public/artexh0.png",
        },
        {
            label:"Other",
            value:"other",
            icon1:"../../public/tradeShow.png",
            icon2:"../../public/tradeShow0.png",
        },
    ];



    const [publicEventChecked, setPublicEventChecked] = useState(true);
    const [privateEventChecked, setPrivateEventChecked] = useState(false);

    const handleCheckboxEventType = (id) => {
        if (id === 'cbx-1') {
            setSelectedEventValue(null);
            setPublicEventChecked(true);
            setPrivateEventChecked(false);
        } else if (id === 'cbx-2') {
            setSelectedEventValue(null);
            setPublicEventChecked(false);
            setPrivateEventChecked(true);
        }
    };


    const [selectedEventValue, setSelectedEventValue] = useState(null);

    const handleEventChange = (selectedValue) => {
        setSelectedEventValue(selectedValue);
    };


    // slider states:
    const [totalPersons, setTotalPersons] = useState(300);
    const changeTotalPersons = (newValue) => {
        setTotalPersons(newValue);
    };



    // <------------Step 2 States------------>:

    const venuesDetails = [
        {
            id:"1",
            name:"Diamond",
            mainImage:"https://regalpartyhall.com/main/ballrooms/dia.jpg",
            capacity:350,
            icon:"../../public/diamond.png",
            images:[]
        },
        {
            id:"2",
            name:"Ruby",
            mainImage:"https://regalpartyhall.com/main/ballrooms/rub.jpg",
            capacity:350,
            icon:"../../public/ruby.png",
            images:[]
        },
        {
            id:"3",
            name:"Emerald",
            mainImage:"https://regalpartyhall.com/main/ballrooms/emr.jpg",
            capacity:350,
            icon:"../../public/emerald.png",
            images:[]
        },
        {
            id:"4",
            name:"Ruby + Emerald",
            mainImage:"https://regalpartyhall.com/main/ballrooms/rub-emr.jpg",
            capacity:700,
            icon:"../../public/emerald.png",
            images:[]
        },
        {
            id:"5",
            name:"Topaz",
            mainImage:"https://regalpartyhall.com/main/ballrooms/top.jpg",
            capacity:100,
            icon:"../../public/topaz.png",
            images:[]
        },
        {
            id:"6",
            name:"Sapphire",
            mainImage:"https://regalpartyhall.com/main/ballrooms/sha.jpg",
            capacity:200,
            icon:"../../public/sapphire.png",
            images:[]
        },
    ];

    const  [selectedVenueId, setSelectedVenueId] = useState(null);






    // Step 4 States:


    const foodTypes = [
        {  
            id:"1",
            name:"Breakfast",
            value:"breakfast",
            packages : [
                {
                    label:"Package 1",
                    value:"pkg1",
                    icon1:"../../public/independence.png",
                    icon2:"../../public/independence1.png",
                },
                {
                    label:"Package 2",
                    value:"pkg2",
                    icon1:"../../public/hny.png",
                    icon2:"../../public/hny0.png",
                },
                {
                    label:"Package 3",
                    value:"pkg3",
                    icon1:"../../public/music.png",
                    icon2:"../../public/music0.png",
                },
                {
                    label:"Package 4",
                    value:"pkg4",
                    icon1:"../../public/artexh.png",
                    icon2:"../../public/artexh0.png",
                },
                {
                    label:"Package",
                    value:"pkg5",
                    icon1:"../../public/tradeShow.png",
                    icon2:"../../public/tradeShow0.png",
                },
            ]
        },
        {
            id:"2",
            name:"Lunch",
            value:"lunch",
            packages : [
                {
                    label:"Package 1",
                    value:"pkg1",
                    icon1:"../../public/independence.png",
                    icon2:"../../public/independence1.png",
                },
                {
                    label:"Package 2",
                    value:"pkg2",
                    icon1:"../../public/hny.png",
                    icon2:"../../public/hny0.png",
                },
                {
                    label:"Package 3",
                    value:"pkg3",
                    icon1:"../../public/music.png",
                    icon2:"../../public/music0.png",
                },
           
                
            ]
        },
        {
            id:"3",
            name:"Dinner",
            value:"dinner",
            packages : [
                {
                    label:"Package 1",
                    value:"pkg1",
                    icon1:"../../public/independence.png",
                    icon2:"../../public/independence1.png",
                },
                {
                    label:"Package 2",
                    value:"pkg2",
                    icon1:"../../public/hny.png",
                    icon2:"../../public/hny0.png",
                },
                {
                    label:"Package 3",
                    value:"pkg3",
                    icon1:"../../public/music.png",
                    icon2:"../../public/music0.png",
                },
              
            ]
        },
    ];

    const [selectedFoodType, setFoodType] = useState("1");
    const [selectedFoodTypeName, setFoodTypeName] = useState("Breakfast");
    const [selectedFoodPackages,setSelectedFoodPackages] = useState(foodTypes[0].packages);


    const [selectedFoodPackage, setSelectedFoodPackage] = useState(null);
    const setFoodPackage = (selectedValue) => {
             setSelectedFoodPackage(selectedValue);
    };

  





    const  [beveragesModalState, setBeveragesModal] = useState(false);

    const  [seatingArrangementModalState, setSeatingArrangementModalState] = useState(false);

    const  [tableTypeModalState, setTableTypeModalState] = useState(false);

    const  [chairTypeModalState, setChairTypeModalState] = useState(false);

    const  [centerpieceModalState, setCenterpieceModalState] = useState(false);

    const  [mdModalState, setMDModalState] = useState(false);

    const  [soundSystemModalState, setSoundSystemModalState] = useState(false);

    const  [diningStyleModalState, setDiningStyleModalState] = useState(false);

    const  [cutleryTypeModalState, setCutleryTypeModalState] = useState(false);

    const [user,setUser] =useState(null); 
    const [activeStep,setActiveStep] =useState(1); 
    function changeStepToNext() {
        setActiveStep(activeStep+1);
    }
    function changeStepToPrevious() {
        setActiveStep(activeStep-1);
    }
    function changeStepTo(step) {
        setActiveStep(step);
    }


    const StageTypes = [
        {
            label:"Large Stage",
            value:"lg",
        },
        {
            label:"Medium Stage",
            value:"md",
        },
        {
            label:"Small Stage",
            value:"sm",
        }
    ]

    const [selectedStageType, setSelectedStageType] = useState(null);
    const setStageType = (selectedValue) => {
        setSelectedStageType(selectedValue);
    };




  const [selectedDate, setSelectedDate] = useState(null);



   const banquetSlots = [
        {
                slot: "08:00 AM - 09:00 AM",
                availability: "yes"
            },
            {
                slot: "09:00 AM - 10:00 AM",
                availability: "yes"
            },
            {
                slot: "10:00 AM - 11:00 AM",
                availability: "yes"
            },
            {
                slot: "11:00 AM - 12:00 PM",
                availability: "yes"
            },
            {
                slot: "12:00 PM - 01:00 PM",
                availability: "yes"
            },
            {
                slot: "01:00 PM - 02:00 PM",
                availability: "yes"
            },
            {
                slot: "02:00 PM - 03:00 PM",
                availability: "yes"
            },
            {
                slot: "03:00 PM - 04:00 PM",
                availability: "yes"
            },
            {
                slot: "04:00 PM - 05:00 PM",
                availability: "yes"
            },
            {
                slot: "05:00 PM - 06:00 PM",
                availability: "yes"
            },
            {
                slot: "06:00 PM - 07:00 PM",
                availability: "yes"
            },
            {
                slot: "07:00 PM - 08:00 PM",
                availability: "yes"
            },
            {
                slot: "Full Day",
                availability: "yes"
            },
            

        ]

    const appointmentSlots =  [
        {
            slot: "09:00 AM - 09:30 AM",
            availability: "yes"
        },
        {
            slot: "09:30 AM - 10:00 AM",
            availability: "yes"
        },
        {
            slot: "10:00 AM - 10:30 AM",
            availability: "yes"
        },
        {
            slot: "10:30 AM - 11:00 AM",
            availability: "yes"
        },
        {
            slot: "11:00 AM - 11:30 AM",
            availability: "yes"
        },
        {
            slot: "11:30 AM - 12:00 PM",
            availability: "yes"
        },
       
        {
            slot: "12:00 PM - 12:30 PM",
            availability: "yes"
        },
        {
            slot: "12:30 PM - 01:00 PM",
            availability: "yes"
        },
        {
            slot: "01:00 PM - 01:30 PM",
            availability: "yes"
        },
        {
            slot: "01:30 PM - 02:00 PM",
            availability: "yes"
        },
        {
            slot: "02:00 PM - 02:30 PM",
            availability: "yes"
        },
        {
            slot: "02:30 PM - 03:00 PM",
            availability: "yes"
        },
        {
            slot: "03:00 PM - 03:30 PM",
            availability: "yes"
        },
        {
            slot: "03:30 PM - 04:00 PM",
            availability: "yes"
        },
        {
            slot: "04:00 PM - 04:30 PM",
            availability: "yes"
        },
        {
            slot: "04:30 PM - 05:00 PM",
            availability: "yes"
        },
    ]








   

    // states of fetching slots


    const [availableSlots,setAvailableSlots] = useState([])

    const [availableAppointmentSlots,setAvailableAppointmentSlots] = useState([])

    const [selectedAppointmentSlot, setSelectedAppointmentSlot] = useState(null);
    const setAppointmentSlot = (selectedValue) => {
        setSelectedAppointmentSlot(selectedValue);
    };

    const [appointmentType,setAppointmentType] = useState(null)






    async function postData(url = "", data = {},type) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: "POST", 
            mode: "cors", 
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data),
        });
        if (response.status===200) {
            if (type==="event") {
                const updatedSlots = banquetSlots.map(slot => ({ ...slot, selected: false }));
                setAvailableSlots(updatedSlots);
            } else if (type==="appointment"){
                const updatedSlots = appointmentSlots.map(slot => ({ ...slot, selected: false }));
                setAvailableAppointmentSlots(updatedSlots);
                console.log(availableAppointmentSlots);
                setSelectFieldAppointmentSlots(true);
            }
            else{

            }
        }
        return response.json(); 
    }




    const url = "https://eden-garden-backend.vercel.app/api/v1";

    const [isSlotsLoading, setSlotsLoading] = useState(false);

    const [selectedSlotsVenue, setSelectedSlotsVenue] = useState([]);

    const [slotsData, setSlotsData] = useState([]);
    const fetchSlotsDate = async (date) => {
        setSlotsLoading(true);
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        const raw = JSON.stringify({
            "venue": "Ruby",
            "date": date
        });
        
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };
        
        try {
            setSlotsLoading(true);
            const response = await fetch("https://ballroom-backend.vercel.app/api/v1/Booking/CheckBooking", requestOptions);
            const result = await response.json();
            if (response.status===200 && result["message"]==="Please create a slot this date") {
                postData("https://eden-garden-backend.vercel.app/api/v1/Slot/Add",{
                    date:date,
                    venue:"Ruby",
                    slots:banquetSlots
                },"event")
                setSlotsLoading(false);
            }
            else if(response.status===200 && result["status"]===200){
                console.log(response);
                const updatedSlots = result.data[0].slots.map(slot => ({ ...slot, selected: false }));
                setAvailableSlots(updatedSlots);
                setSlotsLoading(false);
            }
            else{
                setSlotsLoading(false);
            }

        } catch (error) {
            setSlotsLoading(false);
            console.error(error);
        }
    }


    const [appointmentDates, setAppointmentDates] = useState([]);
    const [selectedAppointmentDate,setSelectedAppointmentDate] = useState(null);

    // Your existing functions...
    const currentDate = new Date();

    const addDays = (date, days) => {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    };

    const isWithin15Days = (lastDate) => {
        const differenceInTime = lastDate.getTime() - currentDate.getTime();
        const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
        return differenceInDays <= 15;
    };

    const generateDateList = (lastDate1) => {
        const lastDate = new Date(lastDate1);
        let endDate = lastDate;
        if (!isWithin15Days(lastDate)) {
            endDate = addDays(currentDate, 14);
        }
        let currentDatePointer = new Date(currentDate);
        const dates = [];
        while (currentDatePointer <= endDate) {
            dates.push(new Date(currentDatePointer));
            currentDatePointer = addDays(currentDatePointer, 1);
        }
        setAppointmentDates(dates);
    };


    function formatDateToYYYYMMDD(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }









    const [showSelectFieldAppointmentSlots,setSelectFieldAppointmentSlots] = useState(false)


    const fetchAppointmentDates = async (date,consultantName) => {
        // setSlotsLoading(true);
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        const raw = JSON.stringify({
            "date": date,
            "name": consultantName
        });
        
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };
        
        try {
            setSlotsLoading(true);
            const response = await fetch("https://eden-garden-backend.vercel.app/api/v1/Appointment/CheckAppointment", requestOptions);
            const result = await response.json();
            if (response.status===400 && result["message"]==="Appointment Not Availabe") {
                // console.log(response);
                postData("https://eden-garden-backend.vercel.app/api/v1/Appointment/Add",{
                    date:date,
                    name:consultantName,
                    slots:appointmentSlots
                },"appointment")
                // setSlotsLoading(false);
            }
            else if(response.status===200){
                console.log(result);
                const updatedSlots = result.data[0].slots.map(slot => ({ ...slot, selected: false }));
                setAvailableAppointmentSlots(updatedSlots);
                
                setSelectFieldAppointmentSlots(true);
                console.log(availableAppointmentSlots)
                

            }
            else{
                setSlotsLoading(false);
            }

        } catch (error) {
            setSlotsLoading(false);
            console.error(error);
        }
    }




    const [showSummary,setShowSummary] = useState(false);





















    return(
        <MainContext.Provider value = {{
            user,setUser,
            beveragesModalState,setBeveragesModal,
            seatingArrangementModalState, setSeatingArrangementModalState,
            tableTypeModalState, setTableTypeModalState,
            chairTypeModalState, setChairTypeModalState,
            centerpieceModalState, setCenterpieceModalState,
            mdModalState, setMDModalState,
            soundSystemModalState, setSoundSystemModalState,
            diningStyleModalState, setDiningStyleModalState,
            cutleryTypeModalState, setCutleryTypeModalState,
            activeStep,setActiveStep,changeStepToNext,changeStepToPrevious,changeStepTo,
            publicEventChecked,privateEventChecked,handleCheckboxEventType,
            publicEvents,privateEvents,
            selectedEventValue,handleEventChange,
            totalPersons,changeTotalPersons,
            venuesDetails,selectedVenueId, setSelectedVenueId,
            foodTypes,selectedFoodType, setFoodType, selectedFoodTypeName, setFoodTypeName , selectedFoodPackages,setSelectedFoodPackages,selectedFoodPackage, setSelectedFoodPackage, setFoodPackage,
            StageTypes,selectedStageType, setSelectedStageType ,setStageType,
            selectedDate, setSelectedDate,fetchSlotsDate,availableSlots,setAvailableSlots,banquetSlots,isSlotsLoading, setSlotsLoading,
            formatDateToYYYYMMDD,generateDateList,appointmentDates,selectedAppointmentDate,setSelectedAppointmentDate,
            fetchAppointmentDates,appointmentSlots,showSelectFieldAppointmentSlots,setSelectFieldAppointmentSlots,availableAppointmentSlots,setAvailableAppointmentSlots,selectedAppointmentSlot,setAppointmentSlot,appointmentType,setAppointmentType
            }}>
            {children}
        </MainContext.Provider>
    )
}

export default MainContextProvider;