import React , {useState,useRef} from "react";
import MainContext from "./mainContext";
import dayjs from "dayjs";
import { message } from "antd";


const MainContextProvider = ({children})=>{

    // <------------Step 1 States------------>:
    // public events

    const[publicEvents,setPublicEvents] = useState([]);
    const[privateEvents,setPrivateEvents] = useState([]);



    // const publicEvents = [
    //     {
    //         label:"Religious",
    //         value:"religious",
    //         icon1:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Fqu1.png?alt=media&token=78f7f5d0-b1a6-4f43-8160-ac902c1eebca",
    //         icon2:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Fqu0.png?alt=media&token=8cd46e04-cdfe-46ec-8040-0d4f59e327a9",
    //     },
    //     {
    //         label:"Community",
    //         value:"fund raising",
    //         icon1:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Fmu1.png?alt=media&token=1acebce2-682d-46b7-bf7e-78d3f80dfe90",
    //         icon2:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Fmu0.png?alt=media&token=9b843ee3-af3e-47fa-9fbf-d56fe8db408f",
    //     },
    //     // {
    //     //     label:"Meet up",
    //     //     value:"meet up",
    //     //     icon1:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Fmu1.png?alt=media&token=1acebce2-682d-46b7-bf7e-78d3f80dfe90",
    //     //     icon2:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Fmu0.png?alt=media&token=9b843ee3-af3e-47fa-9fbf-d56fe8db408f",
    //     // },
     
    // ]




    //   // private events


    // const privateEvents = [
    //     {
    //         label:"Wedding",
    //         value:"wedding",
    //         icon1:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Fhny.png?alt=media&token=b90a6c14-87d9-477a-a444-0f09832ae2b9",
    //         icon2:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Fhny0.png?alt=media&token=522fd815-c3c6-4627-991e-cffc9a389407",
    //     },
    //     {
    //         label:"Anniversary",
    //         value:"anniversary",
    //         icon1:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2FtradeShow.png?alt=media&token=4be61246-7ed2-4cc0-9bad-81ccfd75a5dd",
    //         icon2:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2FtradeShow0.png?alt=media&token=98001fa7-29e5-4cc5-9762-e68d36fd1078",
    //     },
    //     {
    //         label:"Birthday",
    //         value:"birthday",
    //         icon1:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Fartexh.png?alt=media&token=68695b47-5858-425d-9a36-79c86b8d5f67",
    //         icon2:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Fartexh0.png?alt=media&token=142134fe-939b-410c-8ffe-fa8c5980ef61",
    //     },
    //     {
    //         label:"Engagement",
    //         value:"engagement",
    //         icon1:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Findependence.png?alt=media&token=7d0a45a0-8fde-4d98-8401-2b972d1881f2",
    //         icon2:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Findependence1.png?alt=media&token=4a628f0f-8ed5-47b7-b3e6-0a6d61fba01c",
    //     },
    //     {
    //         label:"Other",
    //         value:"other",
    //         icon1:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Findependence.png?alt=media&token=7d0a45a0-8fde-4d98-8401-2b972d1881f2",
    //         icon2:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Findependence1.png?alt=media&token=4a628f0f-8ed5-47b7-b3e6-0a6d61fba01c",
    //     },
    // ];



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



    const [isRoomSelected, setIsRoomSelected] = useState(false);
    const [totalRoomsSelected, setTotalRoomsSelected,] = useState(1);
    const [eachRoomCost , setEachRoomCost] = useState(5);
    

    const handleRoomSelectedChange = () => {
        setIsRoomSelected(!isRoomSelected);
    };


    const [totalRooms, setTotalRoom] = useState(null)
    const handleTotalRoomInputChange = (e) => {
      setEventTitle(e.target.value)
        console.log(ticketPrice)
    }




    const [isSecuritySelected, setIsSecuritySelected] = useState(false);
    const [eachGuardCost , setEachGuardCost] = useState(2);

    const handleSecuritySelectedChange = () => {
        setIsSecuritySelected(!isSecuritySelected);
    };
    const [totalGuardsSelected, setTotalGuardsSelected,] = useState(5);


    const [totalSecurity, setTotalSecurity] = useState(null)
    const handleTotalSecurityInputChange = (e) => {
        setTotalSecurity(e.target.value)
        console.log(ticketPrice)
    }



    const [isValetSelected, setIsValetSelected] = useState(false);
    const [eachValetCost , setEachValetCost] = useState(2);
    const handleValetSelectedChange = () => {
        setIsValetSelected(!isValetSelected);
    };

    const [totalValetSelected, setTotalValetSelected] = useState(5);


    
    const [totalValet, setTotalValet] = useState(null)
    const handleTotalValetInputChange = (e) => {
        setTotalValet(e.target.value)
        console.log(ticketPrice)
    }






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


    const [venuesDetails,setVenueDetails] = useState([]);

    // const venuesDetails = [
    //     {
    //         id:"1",
    //         name:"Diamond",
    //         mainImage:"https://regalpartyhall.com/main/ballrooms/dia.jpg",
    //         capacity:350,
    //         icon:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Fdiamond.png?alt=media&token=23415501-8c1c-40b5-975a-38f161f8883e",
    //         images:[],
    //         personCharges:2
    //     },
    //     {
    //         id:"2",
    //         name:"Ruby",
    //         mainImage:"https://regalpartyhall.com/main/ballrooms/rub.jpg",
    //         capacity:350,
    //         icon:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Fruby.png?alt=media&token=3d4572d7-0501-43c4-a8c6-99b2bf27ed7a",
    //         images:[],
    //         personCharges:2
    //     },
    //     {
    //         id:"3",
    //         name:"Emerald",
    //         mainImage:"https://regalpartyhall.com/main/ballrooms/emr.jpg",
    //         capacity:350,
    //         icon:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Femerald.png?alt=media&token=ee438fbb-b531-4e63-865b-9faf56e15e97",
    //         images:[],
    //         personCharges:3
    //     },
    //     {
    //         id:"4",
    //         name:"Ruby + Emerald",
    //         mainImage:"https://regalpartyhall.com/main/ballrooms/rub-emr.jpg",
    //         capacity:700,
    //         icon:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Femerald.png?alt=media&token=ee438fbb-b531-4e63-865b-9faf56e15e97",
    //         images:[],
    //         personCharges:4

    //     },
    //     {
    //         id:"5",
    //         name:"Topaz",
    //         mainImage:"https://regalpartyhall.com/main/ballrooms/top.jpg",
    //         capacity:100,
    //         icon:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Ftopaz.png?alt=media&token=8ad77580-6232-4a7f-8ebf-755ac0547980",
    //         images:[],
    //         personCharges:2
    //     },
    //     {
    //         id:"6",
    //         name:"Sapphire",
    //         mainImage:"https://regalpartyhall.com/main/ballrooms/sha.jpg",
    //         capacity:200,
    //         icon:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Ftopaz.png?alt=media&token=8ad77580-6232-4a7f-8ebf-755ac0547980",
    //         images:[],
    //         personCharges:3
    //     },
    // ];

    const  [selectedVenueId, setSelectedVenueId] = useState({ 
        _id: "",
        name: "",
        capacity: "",
        venueImageName: "",
        venueImagePath: "",
        fixedCharges: "",
        personCharges: "",
    });


    const [activeHeadingPopUp,setActiveHeadingPopUp] = useState(null);
    const [activeHeadingPopUpLabel,setActiveHeadingPopUpLabel] = useState(null);

    const [activeDataSet,setActiveDataSet] = useState(null);


  

    
    







    // Step 4 States:



    const [foodByUs, setFoodByUs] = useState(null);
    const [foodByCustomer, setFoodByCustomer] = useState(false);
  
  
  
    const handleCheckboxFoodBy = (id) => {
      if (id === 'cbx-11') {
        setFoodByUs(false);
        setFoodByCustomer(false);
      } else if (id === 'cbx-22') {
        setFoodByUs(false);
        setFoodByCustomer(true);
      }
    };

    const [restaurantName, setRestaurantName] = useState("");
    const [foodByCustDescription, setFoodByCustDescription] = useState("");



 


    const foodTypes = [
        {
            id:"5",
            name:"None",
            value:"none",
            packages : [
             
            ]
        },
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
                    appetizers:[
                        {
                            id: 'aptz1',
                            name:'Appetizer 1',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                        {
                            id: 'aptz2',
                            name:'Appetizer 2',
                            pacFor:'1',
                            cost:4,
                            constant1:"true",
                        },
                    ],
                    mainEntrees:[
                        {
                            id: 'me1',
                            name:'Main Entree 1',
                            pacFor:'1',
                            cost:4,
                            constant1:"true",
                        },
                        {
                            id: 'me2',
                            name:'Main Entree 2',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                    ],
                    desserts:[
                        {
                            id: 'dess1',
                            name:'Dessert 1',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                        {
                            id: 'dess2',
                            name:'Dessert 2',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                    ],
                    teaCoffee:[],
                    juicesDrinks:[]

                },
                {
                    label:"Package 2",
                    value:"pkg2",
                    icon1:"../../public/hny.png",
                    icon2:"../../public/hny0.png",
                    appetizers:[
                        {
                            id: 'aptz1',
                            name:'Appetizer 1',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                        {
                            id: 'aptz2',
                            name:'Appetizer 2',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                    ],
                    mainEntrees:[
                        {
                            id: 'me1',
                            name:'Main Entree 1',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                        {
                            id: 'me2',
                            name:'Main Entree 2',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                    ],
                    desserts:[
                        {
                            id: 'dess1',
                            name:'Dessert 1',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                        {
                            id: 'dess2',
                            name:'Dessert 2',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                    ],
                    
                    teaCoffee:[],
                    juicesDrinks:[]

                    
                },
                {
                    label:"Package 3",
                    value:"pkg3",
                    icon1:"../../public/music.png",
                    icon2:"../../public/music0.png",
                    appetizers:[
                        {
                            id: 'aptz1',
                            name:'Appetizer 1',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                        {
                            id: 'aptz2',
                            name:'Appetizer 2',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                    ],
                    mainEntrees:[
                        {
                            id: 'me1',
                            name:'Main Entree 1',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                        {
                            id: 'me2',
                            name:'Main Entree 2',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                    ],
                    desserts:[
                        {
                            id: 'dess1',
                            name:'Dessert 1',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                        {
                            id: 'dess2',
                            name:'Dessert 2',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                    ],
                    teaCoffee:[],
                    juicesDrinks:[]
                    

                },
                {
                    label:"Create Your Own",
                    value:"cyo",
                    icon1:"../../public/artexh.png",
                    icon2:"../../public/artexh0.png",
                    appetizers:[],
                    mainEntrees:[],
                    desserts:[],
                    teaCoffee:[],
                    juicesDrinks:[]
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
                    appetizers:[
                        {
                            id: 'aptz1',
                            name:'Appetizer 1',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                        {
                            id: 'aptz2',
                            name:'Appetizer 2',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                    ],
                    mainEntrees:[
                        {
                            id: 'me1',
                            name:'Main Entree 1',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                        {
                            id: 'me2',
                            name:'Main Entree 2',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                    ],
                    desserts:[
                        {
                            id: 'dess1',
                            name:'Dessert 1',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                        {
                            id: 'dess2',
                            name:'Dessert 2',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                    ],
                    teaCoffee:[],
                    juicesDrinks:[]
                },
                {
                    label:"Package 2",
                    value:"pkg2",
                    icon1:"../../public/hny.png",
                    icon2:"../../public/hny0.png",
                    appetizers:['aptz1','aptz2'],
                    mainEntrees:['me1','me2'],
                    desserts:['dess1','dess2'],
                    teaCoffee:[],
                    juicesDrinks:[]
                },
                {
                    label:"Package 3",
                    value:"pkg3",
                    icon1:"../../public/music.png",
                    icon2:"../../public/music0.png",
                    appetizers:['aptz1','aptz2'],
                    mainEntrees:['me1','me2'],
                    desserts:['dess1','dess2'],
                    teaCoffee:[],
                    juicesDrinks:[]
                },
                {
                    label:"Create Your Own",
                    value:"cyo",
                    icon1:"../../public/artexh.png",
                    icon2:"../../public/artexh0.png",
                    appetizers:['aptz1','aptz2'],
                    mainEntrees:['me1','me2'],
                    desserts:['dess1','dess2'],
                    teaCoffee:[],
                    juicesDrinks:[]
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
                    appetizers:[
                        {
                            id: 'aptz1',
                            name:'Appetizer 1',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                        {
                            id: 'aptz2',
                            name:'Appetizer 2',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                    ],
                    mainEntrees:[
                        {
                            id: 'me1',
                            name:'Main Entree 1',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                        {
                            id: 'me2',
                            name:'Main Entree 2',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                    ],
                    desserts:[
                        {
                            id: 'dess1',
                            name:'Dessert 1',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                        {
                            id: 'dess2',
                            name:'Dessert 2',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                    ],
                    teaCoffee:[],
                    juicesDrinks:[]



                },
                {
                    label:"Package 2",
                    value:"pkg2",
                    icon1:"../../public/hny.png",
                    icon2:"../../public/hny0.png",
                    appetizers:[
                        {
                            id: 'aptz8',
                            name:'Appetizer 8',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                        {
                            id: 'aptz2',
                            name:'Appetizer 2',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                    ],
                    mainEntrees:[
                        {
                            id: 'me3',
                            name:'Main Entree 3',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                        {
                            id: 'me4',
                            name:'Main Entree 4',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                    ],
                    desserts:[
                        {
                            id: 'dess1',
                            name:'Dessert 1',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                        {
                            id: 'dess2',
                            name:'Dessert 2',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                    ],
                    teaCoffee:[],
                    juicesDrinks:[]
                },
                {
                    label:"Package 3",
                    value:"pkg3",
                    icon1:"../../public/music.png",
                    icon2:"../../public/music0.png",
                    appetizers:[
                        {
                            id: 'aptz1',
                            name:'Appetizer 1',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                        {
                            id: 'aptz2',
                            name:'Appetizer 2',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                    ],
                    mainEntrees:[
                        {
                            id: 'me1',
                            name:'Main Entree 1',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                        {
                            id: 'me2',
                            name:'Main Entree 2',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                    ],
                    desserts:[
                        {
                            id: 'dess1',
                            name:'Dessert 1',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                        {
                            id: 'dess2',
                            name:'Dessert 2',
                            pacFor:'1',
                            cost:2,
                            constant1:"true",
                        },
                    ],
                    teaCoffee:[],
                    juicesDrinks:[]
                },
                {
                    label:"Create Your Own",
                    value:"cyo",
                    icon1:"../../public/artexh.png",
                    icon2:"../../public/artexh0.png",
                    appetizers:['aptz1','aptz2'],
                    mainEntrees:['me1','me2'],
                    desserts:['dess1','dess2'],
                    teaCoffee:[],
                    juicesDrinks:[]
                },
              
            ]
        },

        {
            id:"4",
            name:"Beverages",
            value:"beverages",
            packages : [
                {
                    label:"Package 1",
                    value:"pkg1",
                    icon1:"../../public/independence.png",
                    icon2:"../../public/independence1.png",
                    teaCoffee:[],
                    juicesDrinks:[]
                },
                {
                    label:"Package 2",
                    value:"pkg2",
                    icon1:"../../public/hny.png",
                    icon2:"../../public/hny0.png",
                    teaCoffee:[],
                    juicesDrinks:[]
                },
                {
                    label:"Package 3",
                    value:"pkg3",
                    icon1:"../../public/music.png",
                    icon2:"../../public/music0.png",
                    teaCoffee:[],
                    juicesDrinks:[]
                },
              
            ]
        },
      
    ];

    

    function calculateDecorPricing(...items) {
        return items
            .filter(item => item !== null && item !== undefined) // Filter out null and undefined items
            .reduce((total, item) => {
                // Check if the item's uid is 'chair' and multiply its cost by 100 if true
                const cost = item.uid === 'chairs' ? item.cost * totalPersons : item.cost;
                console.log(item.cost,totalPersons);
                return total + cost;
            }, 0);
    }
    



    
    const [selectedFoodType, setFoodType] = useState("5");

    
    const [selectedFoodTypeName, setFoodTypeName] = useState("None");
    const [selectedFoodPackages,setSelectedFoodPackages] = useState(foodTypes[0].packages);
    const [selectedFoodPackage, setSelectedFoodPackage] = useState(null);
    const [selectedPackageDetails,setSelectedPackageDetails] = useState(


        {
            label:"Package 1",
            value:"pkg1",
            icon1:"../../public/independence.png",
            icon2:"../../public/independence1.png",
            appetizers:[

            ],
            mainEntrees:[
           
            ],
            desserts:[
             
            ],
            teaCoffee:[],
            juicesDrinks:[]



        },
    );
    
    const  setFoodTypeSelection=(setTo)=>{
        setFoodTypeName(setTo);

    }


    const appetizers = [
        {
            id: 'aptz1',
            name:'Appetizer 1',
            pacFor:'1',
            cost:2,
            constant1:"false"
        },
        {
            id: 'aptz2',
            name:'Appetizer 2',
            pacFor:'1',
            cost:2,
            constant1:"false"
        },
        {
            id: 'aptz3',
            name:'Appetizer 3',
            pacFor:'1',
            cost:2,
            constant1:"false"
        },
        {
            id: 'aptz4',
            name:'Appetizer 4',
            pacFor:'1',
            cost:2,
            constant1:"false"
        },
        {
            id: 'aptz5',
            name:'Appetizer 5',
            pacFor:'1',
            cost:2,
            constant1:"false"
        },
        {
            id: 'aptz6',
            name:'Appetizer 6',
            pacFor:'1',
            cost:2,
            constant1:"false"

        },
        {
            id: 'aptz7',
            name:'Appetizer 7',
            pacFor:'1',
            cost:2,
            constant1:"false"
        },
        {
            id: 'aptz8',
            name:'Appetizer 8',
            pacFor:'1',
            cost:2,
            constant1:"false"
        },
    ];
    const mainEntreeS = [
        {
            id: 'me1',
            name:'Main Entree 1',
            pacFor:'1',
            cost:2,
            constant1:"false"
        },
        {
            id: 'me2',
            name:'Main Entree 2',
            pacFor:'1',
            cost:2,
            constant1:"false"
        },
        {
            id: 'me3',
            name:'Main Entree 3',
            pacFor:'1',
            cost:2,
            constant1:"false"
        },
        {
            id: 'me4',
            name:'Main Entree 4',
            pacFor:'1',
            cost:2,
            constant1:"false"
        },
        {
            id: 'me5',
            name:'Main Entree 5',
            pacFor:'1',
            cost:2,
            constant1:"false"
        },
        {
            id: 'me6',
            name:'Main Entree 6',
            pacFor:'1',
            cost:2,
            constant1:"false"
        }
    ];
    const dessertS = [
        {
            id: 'dess1',
            name:'Dessert 1',
            pacFor:'1',
            cost:2,
            constant1:"false"
        },
        {
            id: 'dess2',
            name:'Dessert 2',
            pacFor:'1',
            cost:2,
            constant1:"false"
        },
        {
            id: 'dess3',
            name:'Dessert 3',
            pacFor:'1',
            cost:2,
            constant1:"false"
        },
        {
            id: 'dess4',
            name:'Dessert 4',
            pacFor:'1',
            cost:2,
            constant1:"false"
        },
        {
            id: 'dess5',
            name:'Dessert 5',
            pacFor:'1',
            cost:2,
            constant1:"false"
        },
        {
            id: 'dess6',
            name:'Dessert 6',
            pacFor:'1',
            cost:2,
            constant1:"false"
        }
    ]; 
    const beverageS = [
        {
            id: 'tea',
            name:'Tea',
            pacFor:'1',
            cost:2
        },
        {
            id: 'juice',
            name:'Juice',
            pacFor:'1',
            cost:2
        },
        {
            id: 'coffee',
            name:'Coffee',
            pacFor:'1',
            cost:2
        },
    ];
    const teaCoffee = [
        {
            id: 'tea',
            name:'Tea',
            pacFor:'1',
            cost:2
        },
        {
            id: 'gtea',
            name:'Green Tea',
            pacFor:'1',
            cost:2
        },
        {
            id: 'cappucinno',
            name:'Cappucinno',
            pacFor:'1',
            cost:2
        },
        {
            id: 'Hot Chocolate',
            name:'Cappucinno',
            pacFor:'1',
            cost:2
        },
    ]

    const [selectedAppetizers,setSelectedAppetizers] = useState( selectedFoodType==='5'?[]: []);
    const [selectedDesserts,setSelectedDesserts] = useState( selectedFoodType==='5'?[]: []);
    const [selectedMainEntree,setSelectedMainEntree] = useState( selectedFoodType==='5'?[]: []);








    const juicesDrinks = [
        {
            id: 'appleJuice',
            name:'Apple Juice',
            pacFor:'1',
            cost:2
        },
        {
            id: 'mangoJuice',
            name:'Mango Juice',
            pacFor:'1',
            cost:2
        },
        {
            id: 'sparklingWater',
            name:'Sparkling Water',
            pacFor:'1',
            cost:2
        },
    ]








    const setFoodPackage = (selectedValue, option) => {
        setSelectedFoodPackage(selectedValue);
        setSelectedPackageDetails(option);
        // summaryTableData, setSummaryTableData
        // setSummaryTableData(...summaryTableData,{})
        console.log('Selected Value:', selectedValue);
        console.log('Selected Option:', option); // This will contain additional attributes
      };



  





    const  [beveragesModalState, setBeveragesModal] = useState(false);

    const  [seatingArrangementModalState, setSeatingArrangementModalState] = useState(false);
    const [selectedArrangement, setSelectedArrangement] = useState(null);

    const handleSelectionSeatingArrang = (name) => {
        setSelectedArrangement(name);
    };

    const seatingArrangementTypes = [
        {
            name:"Banquet",
            image:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Fbanquet-style.png?alt=media&token=1e16c809-c063-46af-bc5d-c09c4d42af33"
        },
        {
            name:"Broadroom",
            image:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Fbroadroom-style.png?alt=media&token=418086db-a8ee-450b-9d36-9217983b5b91"
        },
        {
            name:"Cabaret",
            image:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Fcabaret-style.png?alt=media&token=32a60946-ad47-4b2a-8853-d4675114a85e"
        },
        {
            name:"Classroom",
            image:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Fclassroom-style.png?alt=media&token=47fdb475-4250-4630-bd2f-7bf1d5dc77ff"
        },
        {
            name:"Theater",
            image:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Ftheater-style.png?alt=media&token=95c1db02-3079-4bde-823c-70fb150a8074"
        },
        {
            name:"U Shaped",
            image:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Fu-shape-style.png?alt=media&token=dd3b9d2a-9289-4834-97b0-4cf54cff9031"
        },
    ];
    const [seatingArrangementTypesData,setSeatingArrangementTypesData] = useState(seatingArrangementTypes);





 
    const  [tableTypeModalState, setTableTypeModalState] = useState(false);

    const [selectedTable, setSelectedTable] = useState(null);

    const handleSelectionTable = (name) => {
        setSelectedTable(name);
    };

    const tableSelectionTypes = [
        {
            name:"Round Table",
            image:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2FroundTable.png?alt=media&token=274610dd-682f-4019-b304-e2621a0baf61"
        },
        {
            name:"Rectangular Table",
            image:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2FrectangularTable.png?alt=media&token=7a97b862-9230-40b2-838c-8db529d02dd6"
        },
        {
            name:"Square Table",
            image:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Fsquaretable.png?alt=media&token=47099620-8625-40c2-adc6-0740ed86e928"
        },
        {
            name:"Serperentine Table",
            image:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Fserperentine.png?alt=media&token=b4bf1345-9ef7-4ea2-af0c-25c07957c8f0"
        },
       
    ];
    const [tableTypesData,setTableTypesData] = useState(tableSelectionTypes);

    



    const StageTypes = [
        {
            label:"Large Stage 10 x 20",
            value:"lg",
            cost: 20,
            uid:"stage"
        },
        { 
            label:"Medium Stage 10 x 10",
            value:"md",
            cost: 10,
            uid:"stage"
        },
        {
            label:"Small Stage 5 x 10",
            value:"sm",
            cost: 5,
            uid:"stage"
        }
    ]

    const [selectedStageType, setSelectedStageType] = useState(null);
    const [selectedStageTypeData, setSelectedStageTypeData] = useState(null);
    const setStageType = (value) => {
        const selectedOption = StageTypes.find(option => option.value === value);
        console.log('Selected option cost:', selectedOption.cost);
        setSelectedStageTypeData(selectedOption);
        console.log(selectedStageTypeData);
        setSelectedStageType(value);
    };






    const  [chairTypeModalState, setChairTypeModalState] = useState(false);

    const [selectedChairType, setSelectedChairType] = useState(null);
    const [selectedChairTypeDetails, setSelectedChairTypeDetails] = useState(null);

    const handleSelectionChairType = (name) => {
        setSelectedChairType(name);
    };

    const chairSelectionTypes = [
        {
            uid:'chairs',
            name:"Silver Chiavari",
            cost:10,
            image:"https://regalpartyhall.com/main/decor/images/ch.jpg"
        },
        {
            uid:'chairs',
            name:"Gold Chiavari",
            cost:10,
            image:"https://regalpartyhall.com/main/decor/images/ch1.jpg"
        },
        {
            uid:'chairs',
            name:"Covers with Bows",
            cost:10,
            image:"https://regalpartyhall.com/main/decor/images/ch2.jpg"
        },
        {
            uid:'chairs',
            name:"High Chairs",
            cost:10,
            image:"https://regalpartyhall.com/main/decor/images/ch5.jpg"
        },
        {
            uid:'chairs',
            name:"Wedding Chair",
            cost:10,
            image:"https://regalpartyhall.com/main/decor/images/ch6.jpg"
        },
        {
            uid:'chairs',
            name:"Reception Sofa",
            cost:10,
            image:"https://regalpartyhall.com/main/decor/images/ch7.jpg"
        },
       
    ];
    const [chairTypesData,setChairTypesData] = useState(chairSelectionTypes);


    const  [centerpieceModalState, setCenterpieceModalState] = useState(false);
    const [selectedCenterpieceType, setSelectedCenterpieceType] = useState(null);

    const handleSelectionCenterpieceType = (name) => {
        setSelectedCenterpieceType(name);
    };

    const centerpieceSelectionTypes = [
        {
            uid:'cp',
            name:"CP 1",
            cost:10,
            image:"https://regalpartyhall.com/main/decor/images/cp1.jpg"
        },
        {
            uid:'cp',
            name:"CP 2",
            cost:10,
            image:"https://regalpartyhall.com/main/decor/images/cp2.jpg"
        },
        {
            uid:'cp',
            name:"CP 3",
            cost:10,
            image:"https://regalpartyhall.com/main/decor/images/cp3.jpg"
        },
        {
            uid:'cp',
            name:"CP 4",
            cost:10,
            image:"https://regalpartyhall.com/main/decor/images/cp4.jpg"
        },
        {
            uid:'cp',
            name:"CP 6",
            cost:10,
            image:"https://regalpartyhall.com/main/decor/images/cp5.jpg"
        },
        {
            uid:'cp',
            name:"CP 6",
            cost:10,
            image:"https://regalpartyhall.com/main/decor/images/cp6.jpg"
        },
        {
            uid:'cp',
            name:"CP 7",
            cost:10,
            image:"https://regalpartyhall.com/main/decor/images/cp7.jpg"
        },
       
    ];
    const [centerpieceTypesData,setCenterpieceTypesData] = useState(centerpieceSelectionTypes);













    const  [mdModalState, setMDModalState] = useState(false);
    const [selectedMdType, setSelectedMdType] = useState(null);

    const handleSelectionMdType = (name) => {
        setSelectedMdType(name);
    };

    const mdSelectionTypes = [
        {
            uid:'BandM',
            name:"Backdrop 1",
            cost:1,
            image:"https://regalpartyhall.com/main/decor/images/bd1.jpg"
        },
        {
            uid:'BandM',
            name:"Backdrop 2",
            cost:2,
            image:"https://regalpartyhall.com/main/decor/images/bd2.jpg"
        },
        {
            uid:'BandM',
            name:"Backdrop 3",
            cost:3,
            image:"https://regalpartyhall.com/main/decor/images/bd3.jpg"
        },
        {
            uid:'BandM',
            name:"Backdrop 4",
            cost:4,
            image:"https://regalpartyhall.com/main/decor/images/bd4.jpg"
        },
        {
            uid:'BandM',
            name:"Mandap 1",
            cost:5,
            image:"https://regalpartyhall.com/main/decor/images/bd31.jpg"
        },
        {
            uid:'BandM',
            name:"Mandap 2",
            cost:10,
            image:"https://regalpartyhall.com/main/decor/images/bd32.jpg"
        },
        {
            uid:'BandM',
            name:"Mandap 3",
            cost:10,
            image:"https://regalpartyhall.com/main/decor/images/bd33.jpg"
        },
        {
            uid:'BandM',
            name:"Mandap 4",
            cost:10,
            image:"https://regalpartyhall.com/main/decor/images/bd34.jpg"
        },
       
    ];
    const [mdTypesData,setMdTypesData] = useState(mdSelectionTypes);










    const  [soundSystemModalState, setSoundSystemModalState] = useState(false);

    const [selectedSoundSystemType, setSelectedSoundSystemType] = useState(null);

    const handleSelectionSoundSystemType = (name) => {
        setSelectedSoundSystemType(name);
    };

    const soundSystemSelectionTypes = [
        {
            name:"Sound Sytem 1",
            cost:10,
            image:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Fsound-system.png?alt=media&token=4cc3c15c-49d0-4203-87b1-a9eff767160a"
        },
        {
            name:"Sound Sytem 2",
            cost:10,
            image:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Fsound-system.png?alt=media&token=4cc3c15c-49d0-4203-87b1-a9eff767160a"
        },
        {
            name:"Sound Sytem 3",
            cost:10,
            image:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Fsound-system.png?alt=media&token=4cc3c15c-49d0-4203-87b1-a9eff767160a"
        },
        {
            name:"Sound Sytem 4",
            cost:10,
            image:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Fsound-system.png?alt=media&token=4cc3c15c-49d0-4203-87b1-a9eff767160a"
        },
      
       
    ];
    const [soundSystemTypesData,setSoundSystemTypesData] = useState(soundSystemSelectionTypes);











    const  [lightingModalState, setLightingModalState] = useState(false);

    const [selectedLightingType, setSelectedLightingType] = useState(null);

    const handleSelectionLightingType = (name) => {
        setSelectedLightingType(name);
    };

    const lightingSelectionTypes = [
        {
            uid:'lg',
            name:"Lighting 1",
            cost:10,
            image:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Flighting.png?alt=media&token=2b48634f-cc20-4629-87b6-f7ff3c922448"
        },
        {
            uid:'lg',
            name:"Lighting 2",
            cost:10,
            image:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Flighting.png?alt=media&token=2b48634f-cc20-4629-87b6-f7ff3c922448"
        },
        {
            uid:'lg',
            name:"Lighting 3",
            cost:10,
            image:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Flighting.png?alt=media&token=2b48634f-cc20-4629-87b6-f7ff3c922448"
        },
        {
            uid:'lg',
            name:"Lighting 4",
            cost:10,
            image:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Flighting.png?alt=media&token=2b48634f-cc20-4629-87b6-f7ff3c922448"
        },
        {
            uid:'lg',
            name:"Lighting 5",
            cost:10,
            image:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Flighting.png?alt=media&token=2b48634f-cc20-4629-87b6-f7ff3c922448"
        },
        {
            uid:'lg',
            name:"Lighting 6",
            cost:10,
            image:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Flighting.png?alt=media&token=2b48634f-cc20-4629-87b6-f7ff3c922448"
        },
       
       
    ];
    const [lightingTypesData,setLightingTypesData] = useState(lightingSelectionTypes);



    const [selectedDiningStylePrice, setSelectedDiningStylePrice] = useState(0);

    const  [diningStyleModalState, setDiningStyleModalState] = useState(false);

    const [selectedDiningStyleType, setSelectedDiningStyleType] = useState(null);

  
    const diningStyleTypes = [
        {
            name:"Buffet Style",
            cost:5,
            image:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Fbuffet0.png?alt=media&token=be4b33e0-e0be-463c-a44f-da100e01c9b2",
            value:'Buffet Style',
            
        },
        {
            name:"Family Style",
            cost:5,
            image:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2FfamilyStyle0.png?alt=media&token=168f793f-e15c-42db-841a-9e2abcdb566d",
            value:"Family Style"
        },
        {
            name:"Table Service",
            cost:10,
            image:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2FtableService0.png?alt=media&token=19707bef-3393-434a-b74d-a8a74336429d",
            value:"Table Service"
        },
    
       
       
    ];

    const [selectedDiningStyleTypeData, setSelectedDiningStyleTypeData] = useState(null);

    const handleSelectionDiningStyleType = (value) => {
        setSelectedDiningStyleType(value);
        const selectedOption = diningStyleTypes.find(option => option.value === value);
        setSelectedDiningStyleTypeData(selectedOption);
        console.log('Selected option cost:', selectedOption.cost);
    };


    const [diningStyleTypesData,setDiningStyleTypesData] = useState(diningStyleTypes);











    const [selectedSlotsVenue, setSelectedSlotsVenue] = useState([]);



    const  [cutleryTypeModalState, setCutleryTypeModalState] = useState(false);

    const [selectedCutleryStylePrice, setSelectedCutleryStylePrice] = useState(0);

    const [selectedCutleryStyleType, setSelectedCutleryStyleType] = useState(null);

    const [selectedCutleryStyleTypeData, setSelectedCutleryStyleTypeData] = useState(null);

 
    const cutuleryStyleTypes = [
        {
            name:"Porcelain",
            value:'Porcelain',
            cost:10,
            image:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Fporcelain.png?alt=media&token=b9c99428-30c0-4f9d-9db9-40d5bc361169"
        },
        {
            name:"Plastic",
            value:"Plastic",
            cost:5,
            image:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Fplastic.png?alt=media&token=0227206d-2bc6-4749-9743-8e545e0afdad"
        },
       
    
       
       
    ];



    const handleSelectionCutleryStyleType = (value) => {
        const selectedOption = cutuleryStyleTypes.find(option => option.value === value);
        console.log('Selected option cost:', selectedOption.cost);
        setSelectedCutleryStyleTypeData(selectedOption);
        setSelectedCutleryStyleType(value);
    };

    const [cutleryStyleTypesData,setCutleryStyleTypesData] = useState(cutuleryStyleTypes);


    const [activePackageInfoData,setActivePackageInfoData] = useState(null);
    const [infoPackageModalState, setInfoPackageModalState] = useState(false);


    







  const [selectedDate, setSelectedDate] = useState(null);



  const banquetSlots = [
    {
        slot: "04:00 AM - 04:30 AM",
        availability: "yes"
    },
    {
        slot: "04:30 AM - 05:00 AM",
        availability: "yes"
    },
    {
        slot: "05:00 AM - 05:30 AM",
        availability: "yes"
    },
    {
        slot: "05:30 AM - 06:00 AM",
        availability: "yes"
    },
    {
        slot: "06:00 AM - 06:30 AM",
        availability: "yes"
    },
    {
        slot: "06:30 AM - 07:00 AM",
        availability: "yes"
    },
    {
        slot: "07:00 AM - 07:30 AM",
        availability: "yes"
    },
    {
        slot: "07:30 AM - 08:00 AM",
        availability: "yes"
    },
    {
        slot: "08:00 AM - 08:30 AM",
        availability: "yes"
    },
    {
        slot: "08:30 AM - 09:00 AM",
        availability: "yes"
    },
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
    {
        slot: "05:00 PM - 05:30 PM",
        availability: "yes"
    },
    {
        slot: "05:30 PM - 06:00 PM",
        availability: "yes"
    },
    {
        slot: "06:00 PM - 06:30 PM",
        availability: "yes"
    },
    {
        slot: "06:30 PM - 07:00 PM",
        availability: "yes"
    },
    {
        slot: "07:00 PM - 07:30 PM",
        availability: "yes"
    },
    {
        slot: "07:30 PM - 08:00 PM",
        availability: "yes"
    },
    {
        slot: "08:00 PM - 08:30 PM",
        availability: "yes"
    },
    {
        slot: "08:30 PM - 09:00 PM",
        availability: "yes"
    },
    {
        slot: "09:00 PM - 09:30 PM",
        availability: "yes"
    },
    {
        slot: "09:30 PM - 10:00 PM",
        availability: "yes"
    },
    {
        slot: "10:00 PM - 10:30 PM",
        availability: "yes"
    },
    {
        slot: "10:30 PM - 11:00 PM",
        availability: "yes"
    },
    {
        slot: "11:00 PM - 11:30 PM",
        availability: "yes"
    },
    {
        slot: "11:30 PM - 12:00 AM",
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






    async function postData(url = "", data = {}, type) {
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
    
        if (response.status === 200) {
            if (type === "event") {
                const updatedSlots = banquetSlots.map(slot => ({ ...slot, selected: false }));
                
                setAvailableSlots(updatedSlots);
                console.log(availableSlots)
            } else if (type === "appointment") {
                const updatedSlots = appointmentSlots.map(slot => ({ ...slot, selected: false }));
                setAvailableAppointmentSlots(updatedSlots);
                setSelectFieldAppointmentSlots(true);
            }
        }
    
        return response.json();
    }
    



    async function postData2(url = "", data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }



    const url = "https://eden.skyhub.pk/api/v1";

    const [isSlotsLoading, setSlotsLoading] = useState(false);



    const [slotsData, setSlotsData] = useState([]);
    const fetchSlotsDate = async (date) => {
        setSlotsLoading(true);
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        const raw = JSON.stringify({
            venue: selectedVenueId.name,
            date: date
        });
    
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };


        
    
        try {
            const response = await fetch("https://eden.skyhub.pk/api/v1/Booking/CheckBooking", requestOptions);
            const result = await response.json();
            
            if (response.status === 200 && result.message === "Please create a slot this date") {
                const response2 =  await  fetch("https://eden.skyhub.pk/api/v1/Slot/Add", {
                    method: "POST",
                    mode: "cors",
                    cache: "no-cache",
                    credentials: "same-origin",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    redirect: "follow",
                    referrerPolicy: "no-referrer",
                    body: JSON.stringify({
                        date: date,
                        venue: selectedVenueId.name,
                        slots: banquetSlots
                    }),
                });

                const result2 = await response2.json();
                if (result2.status===200) {
                    console.log(result2)
                    const updatedSlots = result2.Slot.slots.map(slot => ({ ...slot, selected: false }));
                    setAvailableSlots(updatedSlots);
                }
                
                
                // postData("https://eden.skyhub.pk/api/v1/Slot/Add", {
                //     date: date,
                //     venue: selectedVenueId.name,
                //     slots: banquetSlots
                // }, "event");
                
            } else if (response.status === 200 && result.status === 200) {
                const updatedSlots = result.data[0].slots.map(slot => ({ ...slot, selected: false }));
                setAvailableSlots(updatedSlots);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setSlotsLoading(false);
        }
    };
    


    const [appointmentDates, setAppointmentDates] = useState([]);
    const [selectedAppointmentDate,setSelectedAppointmentDate] = useState(null);

    // Your existing functions
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









    const [showSelectFieldAppointmentSlots,setSelectFieldAppointmentSlots] = useState(false);
    const [isAppointmentSlotsLoading, setAppointmentSlotsLoading] = useState(false);


    const fetchAppointmentDates = async (date,consultantName) => {
        setAppointmentSlotsLoading(true);
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
            setAppointmentSlotsLoading(true);
            const response = await fetch("https://eden.skyhub.pk/api/v1/Appointment/CheckAppointment", requestOptions);
            const result = await response.json();
            if (response.status===400 && result["message"]==="Appointment Not Availabe") {
                // console.log(response);
                postData("https://eden.skyhub.pk/api/v1/Appointment/Add",{
                    date:date,
                    name:consultantName,
                    slots:appointmentSlots
                },"appointment")
                setAppointmentSlotsLoading(false);
            }
            else if(response.status===200){
                console.log(result);
                const updatedSlots = result.data[0].slots.map(slot => ({ ...slot, selected: false }));
                setAvailableAppointmentSlots(updatedSlots);
                
                setSelectFieldAppointmentSlots(true);
                console.log(availableAppointmentSlots)

                setAppointmentSlotsLoading(false);
                

            }
            else{
                setAppointmentSlotsLoading(false);
            }

          

        } catch (error) {
            setAppointmentSlotsLoading(false);
            console.error(error);
        }
    }


























    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        zip: '',
        city: '',
        state: '',
    });

  const handleFormInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const [ticketPrice, setTicketPrice] = useState("")
  const handleTicketPriceInputChange = (e) => {
      setTicketPrice(e.target.value)
      console.log(ticketPrice)
  }

  const [eventTitle, setEventTitle] = useState("")
  const handleEventTitleInputChange = (e) => {
    setEventTitle(e.target.value)
      console.log(ticketPrice)
  }
    

    const handleFormSubmit = (e) => {
        console.log('Event:', e);
        e.preventDefault(); // Ensure preventDefault is called on the event object
        // Additional form submission logic here
    };























    const [showSummary,setShowSummary] = useState(false);








    const [errorContent,setErrorContent] = useState(null);
    const [showWarningModal,setShowWarningModal] = useState(false);
    const [isSummaryPageOpen,setIsSummaryPageOpen] = useState(false);




    const [user,setUser] =useState(null); 
    const [activeStep,setActiveStep] =useState(4); 
    function changeStepToNext() {
        if (activeStep===1) {
            if (selectedEventValue===null) {
                setErrorContent("Please Select Event");
                setShowWarningModal(true);
            }
            else{
                setActiveStep(activeStep+1);
            }
        }else if(activeStep===2){
            if (selectedVenueId.name==="") {
                setErrorContent("Please Select Venue");
                setShowWarningModal(true);
            } else {
                setActiveStep(activeStep+1);
            }
        }else if (activeStep===3){
            if (selectedDate===null) {
                setErrorContent("Please Select Event Date");
                setShowWarningModal(true);
                console.log("Please Select Event Date")
                console.log("")
            } else if(selectedSlotsVenue.length===0) {
                setErrorContent("Please Select Event slot");
                setShowWarningModal(true);
                console.log("Please Select Event slot",selectedSlotsVenue.length,selectedSlotsVenue)
            } else{
                setActiveStep(activeStep+1);
            }
        }else if (activeStep===4){
            const isDiningStyleEmpty = selectedDiningStyleType === null;
            const isCutleryStyleEmpty = selectedCutleryStyleType === null;
          



            if (selectedFoodTypeName==='Beverages') {
                const isTeaCoffeeEmpty = selectedPackageDetails.teaCoffee.length === 0;
                const isJuicesDrinksEmpty = selectedPackageDetails.juicesDrinks.length === 0;
                if (isTeaCoffeeEmpty && isJuicesDrinksEmpty) {
                    setErrorContent("Please select atleast one type Beverage");
                    setShowWarningModal(true);
                } else {
                    if (isDiningStyleEmpty && isCutleryStyleEmpty) {
                        setErrorContent("Please Select Dining & Cutlery")
                        setShowWarningModal(true);
                    } else if(isDiningStyleEmpty) {
                        setErrorContent("Please Select Dining Style")
                        setShowWarningModal(true);
                    }
                    else if(isCutleryStyleEmpty) {
                        setErrorContent("Please Select Cutlery Style")
                        setShowWarningModal(true);
                    }else{
                        setActiveStep(activeStep+1);
                    }
                }
            } 
            else if(selectedFoodTypeName==='None'){
                setActiveStep(activeStep+1);
            }
            
            else {
                if (selectedFoodPackage === 'cyo') {
                    const isAppetizerEmpty = selectedPackageDetails.appetizers.length === 0;
                    const isMainEntreesEmpty = selectedPackageDetails.mainEntrees.length === 0;
                    const isDessertEmpty = selectedPackageDetails.desserts.length === 0;
                
                    const emptyStates = [
                        { name: 'appetizers', isEmpty: isAppetizerEmpty },
                        { name: 'main entrees', isEmpty: isMainEntreesEmpty },
                        { name: 'desserts', isEmpty: isDessertEmpty }
                    ];
                
                    const emptyItems = emptyStates.filter(item => item.isEmpty).map(item => item.name);
                
                    if (emptyItems.length === 0) {
                        if (isDiningStyleEmpty && isCutleryStyleEmpty) {
                            setErrorContent("Please Select Dining & Cutlery")
                            setShowWarningModal(true);
                        } else if(isDiningStyleEmpty) {
                            setErrorContent("Please Select Dining Style")
                            setShowWarningModal(true);
                        }
                        else if(isCutleryStyleEmpty) {
                            setErrorContent("Please Select Cutlery Style")
                            setShowWarningModal(true);
                        }else{
                            setActiveStep(activeStep+1);
                        }

                    } else {
                        emptyItems.forEach(item => {setErrorContent(`${item} are necessary to add`);});
                        setShowWarningModal(true);
                    }
                }
                else {
                    if (isDiningStyleEmpty && isCutleryStyleEmpty) {
                        setErrorContent("Please Select Dining & Cutlery")
                        setShowWarningModal(true);
                    } else if(isDiningStyleEmpty) {
                        setErrorContent("Please Select Dining Style")
                        setShowWarningModal(true);
                    }
                    else if(isCutleryStyleEmpty) {
                        setErrorContent("Please Select Cutlery Style")
                        setShowWarningModal(true);
                    }else{
                        setActiveStep(activeStep+1);
                    }
                }
            }
           
        }else if (activeStep===5){
            
            const isSeatingArrEmpty = selectedArrangement === null;
            // const isTableSelectEmpty = selectedTable === null;
            const isChairSelectEmpty = selectedChairType === null;
            const isStageDimenEmpty = selectedStageType === null;
            // const isBandMEmpty = selectedMdType === null;
            // const isCenterpieceEmpty = selectedCenterpieceType === null;
            // const isLightingEmpty = selectedLightingType === null;

            const emptyStates = [
                { name: 'Seating Arrangement', isEmpty: isSeatingArrEmpty },
                // { name: 'Table Selection', isEmpty: isTableSelectEmpty },
                { name: 'Chair Selection', isEmpty: isChairSelectEmpty },
                { name: 'Stage Dimension Selection', isEmpty: isStageDimenEmpty },
                // { name: 'Backdrop or Mandap Selection', isEmpty: isBandMEmpty },
                // { name: 'Centerpieces Selection', isEmpty: isCenterpieceEmpty },
                // { name: 'Lighting Selection', isEmpty: isLightingEmpty },
            ];

            const emptyItems = emptyStates.filter(item => item.isEmpty).map(item => item.name);
            if (emptyItems.length === 0) {
                setActiveStep(activeStep+1);
                console.log(
                    selectedArrangement,
                    selectedTable,
                    selectedChairType,
                    selectedStageType,
                    selectedMdType,
                    selectedCenterpieceType,
                    selectedLightingType
                )
            } else {
                // emptyItems.forEach(item => {setErrorContent(`${item} are necessary to add`);console.log(`${item} are necessary to add`)});
                setErrorContent(`${emptyItems.join(', ')} is required.`);
                setShowWarningModal(true);
            }
        }
        else if (activeStep===6){
            // const isDiningStyleEmpty = selectedDiningStyleType === null;
            // const isCutleryStyleEmpty = selectedCutleryStyleType === null;
            // if (isDiningStyleEmpty && isCutleryStyleEmpty) {
            //     setErrorContent("Please Select Dining & Cutlery")
            //     setShowWarningModal(true);
            // } else if(isDiningStyleEmpty) {
            //     setErrorContent("Please Select Dining Style")
            //     setShowWarningModal(true);
            // }
            // else if(isCutleryStyleEmpty) {
            //     setErrorContent("Please Select Cutlery Style")
            //     setShowWarningModal(true);
            // }else{
            //     setActiveStep(activeStep+1);
            // }
            setActiveStep(activeStep+1);


            console.log("6")

    }else if (activeStep===7){
        setActiveStep(activeStep+1);
        console.log("7",activeStep+1)
    }
else if (activeStep===9){
    setActiveStep(activeStep+1);
    console.log("9")
}
    
        else if (activeStep===8){
            console.log("8")
            const isAppointmentDateSelected = selectedAppointmentDate === null;
            const isAppointmentSlotSelected = selectedAppointmentSlot === null;
            const isAppointmentTypeSelected = appointmentType === null;


            const emptyStates = [
                { name: 'Appointment Date Selection', isEmpty: isAppointmentDateSelected },
                { name: 'Appointment Slot Selection', isEmpty: isAppointmentSlotSelected },
                { name: 'Appointment Type Selection', isEmpty: isAppointmentTypeSelected },
              
            ];

            const emptyItems = emptyStates.filter(item => item.isEmpty).map(item => item.name);
            if (emptyItems.length === 0) {
                setActiveStep(activeStep+1);
                console.log("activeStep");
            }else{
                // emptyItems.forEach(item => {setErrorContent(`${item} are necessary to add`);console.log(`${item} are necessary to add`)});
                setErrorContent(`${emptyItems.join(', ')} is required.`);
                setShowWarningModal(true);
            }
         

        }

       
    }
    function changeStepToPrevious() {
        setActiveStep(activeStep-1);
    }
    function changeStepTo(step) {
        setActiveStep(step);
    }



    const [isBookingConfirming, setIsBookingConfirming] = useState(false)

    const [isBookingConfirmed, setIsBookingConfirmed] = useState(false)




    const sendBookingDetails = async () => {
        setIsBookingConfirming(true)
        await postData2("https://eden.skyhub.pk/api/v1/Booking/Add",{
    
                     

        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        zip: formData.zip,
        city: formData.city,
        state: formData.state,
        selectedDate: selectedDate.format('YYYY-MM-DD').toString(),
        venue: selectedVenueId.name,
        selectedSlot: Array.isArray(selectedSlotsVenue) ? selectedSlotsVenue : [selectedSlotsVenue] ,
        eventType:selectedEventValue,
        minPerson:"0",
        maxPerson:totalPersons.toString(),
        customerInformation:formData,
        eventTicketCost:ticketPrice,
        eventTitle:eventTitle,
        eventNature:publicEventChecked?"Public":"Private",
        VenueSetup:[],
        DecorSetup:[],
        MisSetup:[],
        BeveragesSetup:[],
        DiningSetup:[],
        Appointment:[{
            appointment: {
                consultant: "Shivani",
                type: appointmentType,
                date:selectedAppointmentDate,
                slot:selectedAppointmentSlot,
            }}],



        }).then((data) => {
            console.log(data,` here is code`);
            if (data.status === 200) {
                setIsBookingConfirming(false)
                setIsBookingConfirmed(true);
            } else {
                setIsBookingConfirming(false)
            }
        });
    }










    const [width, setWidth] = useState(window.innerWidth);


    const [summaryTableData, setSummaryTableData] = useState([]);


    function calculatePackagePrice(packageDetails) {
        let totalCost = 0;
    
        const sumCosts = (items) => {
            return items.reduce((sum, item) => sum + item.cost, 0);
        };
    
        if (packageDetails.appetizers) {
            totalCost += sumCosts(packageDetails.appetizers);
        }
    
        if (packageDetails.mainEntrees) {
            totalCost += sumCosts(packageDetails.mainEntrees);
        }
    
        if (packageDetails.desserts) {
            totalCost += sumCosts(packageDetails.desserts);
        }
        if (packageDetails.teaCoffee) {
            totalCost += sumCosts(packageDetails.teaCoffee);
        }
        if (packageDetails.juicesDrinks) {
            totalCost += sumCosts(packageDetails.juicesDrinks);
        }

        let diningPrice = selectedDiningStyleTypeData === null ? 0 : selectedDiningStyleTypeData.cost;
        let cutleryPrice = selectedCutleryStyleTypeData === null ? 0 : selectedCutleryStyleTypeData.cost;
    
        return totalCost;
    }

    function calculateFoodSectionPrice(packageDetails) {
        let totalCost = 0;
    
        const sumCosts = (items) => {
            return items.reduce((sum, item) => sum + item.cost, 0);
        };
    
        if (packageDetails.appetizers) {
            totalCost += sumCosts(packageDetails.appetizers);
        }
    
        if (packageDetails.mainEntrees) {
            totalCost += sumCosts(packageDetails.mainEntrees);
        }
    
        if (packageDetails.desserts) {
            totalCost += sumCosts(packageDetails.desserts);
        }
        if (packageDetails.teaCoffee) {
            totalCost += sumCosts(packageDetails.teaCoffee);
        }
        if (packageDetails.juicesDrinks) {
            totalCost += sumCosts(packageDetails.juicesDrinks);
        }

        let diningPrice = selectedDiningStyleTypeData === null ? 0 : selectedDiningStyleTypeData.cost;
        let cutleryPrice = selectedCutleryStyleTypeData === null ? 0 : selectedCutleryStyleTypeData.cost;
    
        return totalCost + diningPrice + cutleryPrice;
    }




    










    return(
        <MainContext.Provider value = {{
            user,setUser,
            beveragesModalState,setBeveragesModal,
            seatingArrangementModalState, setSeatingArrangementModalState,selectedArrangement,setSelectedArrangement,handleSelectionSeatingArrang,seatingArrangementTypesData,
            tableTypeModalState, setTableTypeModalState,selectedTable,handleSelectionTable,tableTypesData,
            chairTypeModalState, setChairTypeModalState,selectedChairType,handleSelectionChairType,chairTypesData,setSelectedChairType,
            centerpieceModalState, setCenterpieceModalState,selectedCenterpieceType,handleSelectionCenterpieceType,centerpieceTypesData,
            mdModalState, setMDModalState,selectedMdType,handleSelectionMdType,mdTypesData,
            lightingModalState, setLightingModalState,selectedLightingType,handleSelectionLightingType,lightingTypesData,
            soundSystemModalState, setSoundSystemModalState,selectedSoundSystemType,handleSelectionSoundSystemType, soundSystemTypesData,
            diningStyleModalState, setDiningStyleModalState,selectedDiningStyleType,handleSelectionDiningStyleType,diningStyleTypesData,selectedDiningStyleTypeData, setSelectedDiningStyleTypeData,
            cutleryTypeModalState, setCutleryTypeModalState,selectedCutleryStyleType,handleSelectionCutleryStyleType,cutleryStyleTypesData,selectedCutleryStyleTypeData, setSelectedCutleryStyleTypeData,
            isRoomSelected,handleRoomSelectedChange,isSecuritySelected,handleSecuritySelectedChange,isValetSelected,handleValetSelectedChange,totalRooms,setTotalRoom,handleTotalRoomInputChange,totalSecurity,setTotalSecurity,handleTotalSecurityInputChange,totalValet,setTotalValet,handleTotalValetInputChange,totalRoomsSelected, setTotalRoomsSelected,totalGuardsSelected, setTotalGuardsSelected,totalValetSelected, setTotalValetSelected,eachRoomCost,eachGuardCost,eachValetCost,
            activeStep,setActiveStep,changeStepToNext,changeStepToPrevious,changeStepTo,
            publicEventChecked,privateEventChecked,handleCheckboxEventType,ticketPrice,handleTicketPriceInputChange,eventTitle,setEventTitle,handleEventTitleInputChange,
            publicEvents,privateEvents,setPublicEvents,setPrivateEvents,
            selectedEventValue,handleEventChange,
            totalPersons,changeTotalPersons,
            venuesDetails,setVenueDetails,selectedVenueId, setSelectedVenueId,
            foodByUs,foodByCustomer,handleCheckboxFoodBy,restaurantName, setRestaurantName,foodByCustDescription,setFoodByCustDescription,foodTypes,selectedFoodType, setFoodType, selectedFoodTypeName, setFoodTypeName , setFoodTypeSelection,selectedFoodPackages,setSelectedFoodPackages,selectedFoodPackage,setSelectedPackageDetails, setSelectedFoodPackage, setFoodPackage,selectedPackageDetails,calculatePackagePrice,
            StageTypes,selectedStageType, setSelectedStageType ,setStageType,calculateDecorPricing,selectedStageTypeData, setSelectedStageTypeData,
            selectedDate, setSelectedDate,fetchSlotsDate,availableSlots,setAvailableSlots,banquetSlots,isSlotsLoading, setSlotsLoading,
            formatDateToYYYYMMDD,generateDateList,appointmentDates,selectedAppointmentDate,setSelectedAppointmentDate,isAppointmentSlotsLoading,setAppointmentSlotsLoading,
            fetchAppointmentDates,appointmentSlots,showSelectFieldAppointmentSlots,setSelectFieldAppointmentSlots,availableAppointmentSlots,setAvailableAppointmentSlots,selectedAppointmentSlot,setAppointmentSlot,appointmentType,setAppointmentType,
            appetizers,dessertS,beverageS,mainEntreeS,teaCoffee,juicesDrinks,
            activeHeadingPopUp,setActiveHeadingPopUp,activeDataSet,setActiveDataSet,
            selectedAppetizers,setSelectedAppetizers,selectedDesserts,setSelectedDesserts,selectedMainEntree,setSelectedMainEntree,selectedFoodPackage,activeHeadingPopUpLabel,setActiveHeadingPopUpLabel,
            errorContent,setErrorContent,showWarningModal,setShowWarningModal,
            selectedSlotsVenue, setSelectedSlotsVenue,
            activePackageInfoData,setActivePackageInfoData,infoPackageModalState, setInfoPackageModalState,
            formData,setFormData,handleFormInputChange,handleFormSubmit,
            isSummaryPageOpen,setIsSummaryPageOpen,
            postData2,sendBookingDetails,isBookingConfirming, setIsBookingConfirming,isBookingConfirmed, setIsBookingConfirmed,
            width,setWidth,
            summaryTableData, setSummaryTableData, calculateFoodSectionPrice
            }}>
            {children}
        </MainContext.Provider>
    )
}

export default MainContextProvider;