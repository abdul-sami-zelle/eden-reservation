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
            icon1:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Findependence.png?alt=media&token=7d0a45a0-8fde-4d98-8401-2b972d1881f2",
            icon2:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Findependence1.png?alt=media&token=4a628f0f-8ed5-47b7-b3e6-0a6d61fba01c",
        },
        {
            label:"New Year Celebration",
            value:"new year celebration",
            icon1:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Fhny.png?alt=media&token=b90a6c14-87d9-477a-a444-0f09832ae2b9",
            icon2:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Fhny0.png?alt=media&token=522fd815-c3c6-4627-991e-cffc9a389407",
        },
        {
            label:"Music Concert",
            value:"music concert",
            icon1:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Fmusic.png?alt=media&token=d0875dab-04e1-4a50-ac3f-5de6bb2b4ef5",
            icon2:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Fmusic0.png?alt=media&token=3690122c-b587-4bd5-ada8-5b74d78c8c68",
        },
        {
            label:"Art Exhibition",
            value:"art exhibition",
            icon1:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Fartexh.png?alt=media&token=68695b47-5858-425d-9a36-79c86b8d5f67",
            icon2:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Fartexh0.png?alt=media&token=142134fe-939b-410c-8ffe-fa8c5980ef61",
        },
        {
            label:"Trade Show",
            value:"trade show",
            icon1:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2FtradeShow.png?alt=media&token=4be61246-7ed2-4cc0-9bad-81ccfd75a5dd",
            icon2:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2FtradeShow0.png?alt=media&token=98001fa7-29e5-4cc5-9762-e68d36fd1078",
        },
    ]


      // private events


    const privateEvents = [
        {
            label:"Wedding",
            value:"wedding",
            icon1:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Fhny.png?alt=media&token=b90a6c14-87d9-477a-a444-0f09832ae2b9",
            icon2:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Fhny0.png?alt=media&token=522fd815-c3c6-4627-991e-cffc9a389407",
        },
        {
            label:"Anniversary",
            value:"anniversary",
            icon1:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2FtradeShow.png?alt=media&token=4be61246-7ed2-4cc0-9bad-81ccfd75a5dd",
            icon2:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2FtradeShow0.png?alt=media&token=98001fa7-29e5-4cc5-9762-e68d36fd1078",
        },
        {
            label:"Birthday",
            value:"birthday",
            icon1:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Fartexh.png?alt=media&token=68695b47-5858-425d-9a36-79c86b8d5f67",
            icon2:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Fartexh0.png?alt=media&token=142134fe-939b-410c-8ffe-fa8c5980ef61",
        },
        {
            label:"Engagement",
            value:"engagement",
            icon1:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Findependence.png?alt=media&token=7d0a45a0-8fde-4d98-8401-2b972d1881f2",
            icon2:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Findependence1.png?alt=media&token=4a628f0f-8ed5-47b7-b3e6-0a6d61fba01c",
        },
        {
            label:"Other",
            value:"other",
            icon1:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Findependence.png?alt=media&token=7d0a45a0-8fde-4d98-8401-2b972d1881f2",
            icon2:"https://firebasestorage.googleapis.com/v0/b/zelleclients.appspot.com/o/eden-garden-uploads%2Findependence1.png?alt=media&token=4a628f0f-8ed5-47b7-b3e6-0a6d61fba01c",
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



    const [isRoomSelected, setIsRoomSelected] = useState(false);

    const handleRoomSelectedChange = () => {
        setIsRoomSelected(!isRoomSelected);
    };


    const [isSecuritySelected, setIsSecuritySelected] = useState(false);

    const handleSecuritySelectedChange = () => {
        setIsSecuritySelected(!isSecuritySelected);
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


    const [activeHeadingPopUp,setActiveHeadingPopUp] = useState(null);
    const [activeHeadingPopUpLabel,setActiveHeadingPopUpLabel] = useState(null);

    const [activeDataSet,setActiveDataSet] = useState(null);


  

    
    







    // Step 4 States:


    const foodTypes0 = [
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
                    label:"Create Your Own11",
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
                    label:"Create Your Own22",
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
                    label:"Create Your Own33",
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
                    label:"Create Your Own11",
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
                    label:"Create Your Own22",
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
                    label:"Create Your Own33",
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
    
        return totalCost;
    }

    const breakfastPackages = {
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
                        cost:2
                    },
                    {
                        id: 'aptz2',
                        name:'Appetizer 2',
                        pacFor:'1',
                        cost:2
                    },
                ],
                mainEntrees:[
                    {
                        id: 'me1',
                        name:'Main Entree 1',
                        pacFor:'1',
                        cost:2
                    },
                    {
                        id: 'me2',
                        name:'Main Entree 2',
                        pacFor:'1',
                        cost:2
                    },
                ],
                desserts:[
                    {
                        id: 'dess1',
                        name:'Dessert 1',
                        pacFor:'1',
                        cost:2
                    },
                    {
                        id: 'dess2',
                        name:'Dessert 2',
                        pacFor:'1',
                        cost:2
                    },
                ],

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
                        cost:2
                    },
                    {
                        id: 'aptz2',
                        name:'Appetizer 2',
                        pacFor:'1',
                        cost:2
                    },
                ],
                mainEntrees:[
                    {
                        id: 'me1',
                        name:'Main Entree 1',
                        pacFor:'1',
                        cost:2
                    },
                    {
                        id: 'me2',
                        name:'Main Entree 2',
                        pacFor:'1',
                        cost:2
                    },
                ],
                desserts:[
                    {
                        id: 'dess1',
                        name:'Dessert 1',
                        pacFor:'1',
                        cost:2
                    },
                    {
                        id: 'dess2',
                        name:'Dessert 2',
                        pacFor:'1',
                        cost:2
                    },
                ],

                
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
                        cost:2
                    },
                    {
                        id: 'aptz2',
                        name:'Appetizer 2',
                        pacFor:'1',
                        cost:2
                    },
                ],
                mainEntrees:[
                    {
                        id: 'me1',
                        name:'Main Entree 1',
                        pacFor:'1',
                        cost:2
                    },
                    {
                        id: 'me2',
                        name:'Main Entree 2',
                        pacFor:'1',
                        cost:2
                    },
                ],
                desserts:[
                    {
                        id: 'dess1',
                        name:'Dessert 1',
                        pacFor:'1',
                        cost:2
                    },
                    {
                        id: 'dess2',
                        name:'Dessert 2',
                        pacFor:'1',
                        cost:2
                    },
                ],

            },
            {
                label:"Create Your Own1",
                value:"cyo",
                icon1:"../../public/artexh.png",
                icon2:"../../public/artexh0.png",
                appetizers:['aptz1','aptz2'],
                mainEntrees:['me1','me2'],
                desserts:['dess1','dess2'],
            },
        ]
    }; 
    const lunchPackages = {
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
                            cost:2
                        },
                        {
                            id: 'aptz2',
                            name:'Appetizer 2',
                            pacFor:'1',
                            cost:2
                        },
                    ],
                    mainEntrees:[
                        {
                            id: 'me1',
                            name:'Main Entree 1',
                            pacFor:'1',
                            cost:2
                        },
                        {
                            id: 'me2',
                            name:'Main Entree 2',
                            pacFor:'1',
                            cost:2
                        },
                    ],
                    desserts:[
                        {
                            id: 'dess1',
                            name:'Dessert 1',
                            pacFor:'1',
                            cost:2
                        },
                        {
                            id: 'dess2',
                            name:'Dessert 2',
                            pacFor:'1',
                            cost:2
                        },
                    ],
                },
                {
                    label:"Package 2",
                    value:"pkg2",
                    icon1:"../../public/hny.png",
                    icon2:"../../public/hny0.png",
                    appetizers:['aptz1','aptz2'],
                    mainEntrees:['me1','me2'],
                    desserts:['dess1','dess2'],
                },
                {
                    label:"Package 3",
                    value:"pkg3",
                    icon1:"../../public/music.png",
                    icon2:"../../public/music0.png",
                    appetizers:['aptz1','aptz2'],
                    mainEntrees:['me1','me2'],
                    desserts:['dess1','dess2'],
                },
                {
                    label:"Create Your Own2",
                    value:"cyo",
                    icon1:"../../public/artexh.png",
                    icon2:"../../public/artexh0.png",
                    appetizers:['aptz1','aptz2'],
                    mainEntrees:['me1','me2'],
                    desserts:['dess1','dess2'],
                },
           
                
            ]
    }; 
    const dinnerPackages = {
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
                        cost:2
                    },
                    {
                        id: 'aptz2',
                        name:'Appetizer 2',
                        pacFor:'1',
                        cost:2
                    },
                ],
                mainEntrees:[
                    {
                        id: 'me1',
                        name:'Main Entree 1',
                        pacFor:'1',
                        cost:2
                    },
                    {
                        id: 'me2',
                        name:'Main Entree 2',
                        pacFor:'1',
                        cost:2
                    },
                ],
                desserts:[
                    {
                        id: 'dess1',
                        name:'Dessert 1',
                        pacFor:'1',
                        cost:2
                    },
                    {
                        id: 'dess2',
                        name:'Dessert 2',
                        pacFor:'1',
                        cost:2
                    },
                ],




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
                        cost:2
                    },
                    {
                        id: 'aptz2',
                        name:'Appetizer 2',
                        pacFor:'1',
                        cost:2
                    },
                ],
                mainEntrees:[
                    {
                        id: 'me3',
                        name:'Main Entree 3',
                        pacFor:'1',
                        cost:2
                    },
                    {
                        id: 'me4',
                        name:'Main Entree 4',
                        pacFor:'1',
                        cost:2
                    },
                ],
                desserts:[
                    {
                        id: 'dess1',
                        name:'Dessert 1',
                        pacFor:'1',
                        cost:2
                    },
                    {
                        id: 'dess2',
                        name:'Dessert 2',
                        pacFor:'1',
                        cost:2
                    },
                ],
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
                        cost:2
                    },
                    {
                        id: 'aptz2',
                        name:'Appetizer 2',
                        pacFor:'1',
                        cost:2
                    },
                ],
                mainEntrees:[
                    {
                        id: 'me1',
                        name:'Main Entree 1',
                        pacFor:'1',
                        cost:2
                    },
                    {
                        id: 'me2',
                        name:'Main Entree 2',
                        pacFor:'1',
                        cost:2
                    },
                ],
                desserts:[
                    {
                        id: 'dess1',
                        name:'Dessert 1',
                        pacFor:'1',
                        cost:2
                    },
                    {
                        id: 'dess2',
                        name:'Dessert 2',
                        pacFor:'1',
                        cost:2
                    },
                ],
            },
            {
                label:"Create Your Own3",
                value:"cyo",
                icon1:"../../public/artexh.png",
                icon2:"../../public/artexh0.png",
                appetizers:['aptz1','aptz2'],
                mainEntrees:['me1','me2'],
                desserts:['dess1','dess2'],
            },
          
        ]
    }; 
    const beveragesPackages = {}; 


    const [selectedAppetizers,setSelectedAppetizers] = useState(foodTypes[0].packages[0].appetizers);
    const [selectedDesserts,setSelectedDesserts] = useState(foodTypes[0].packages[0].desserts);
    const [selectedMainEntree,setSelectedMainEntree] = useState(foodTypes[0].packages[0].mainEntrees);







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


    const [selectedFoodType, setFoodType] = useState("1");
    const [selectedFoodTypeName, setFoodTypeName] = useState("Breakfast");
    const [selectedFoodPackages,setSelectedFoodPackages] = useState(foodTypes[0].packages);
    const [selectedFoodPackage, setSelectedFoodPackage] = useState(foodTypes[0].packages[0].value);
    const [selectedPackageDetails,setSelectedPackageDetails] = useState(foodTypes[0].packages[0]);
    
    const  setFoodTypeSelection=(setTo)=>{
        setFoodTypeName(setTo);

    }






    const setFoodPackage = (selectedValue, option) => {
        setSelectedFoodPackage(selectedValue);
        setSelectedPackageDetails(option);
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
            image:"../../public/banquet-style.png"
        },
        {
            name:"Broadroom",
            image:"../../public/broadroom-style.png"
        },
        {
            name:"Cabaret",
            image:"../../public/cabaret-style.png"
        },
        {
            name:"Classroom",
            image:"../../public/classroom-style.png"
        },
        {
            name:"Theater",
            image:"../../public/theater-style.png"
        },
        {
            name:"U Shaped",
            image:"../../public/u-shape-style.png"
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
            image:"../../public/roundTable.png"
        },
        {
            name:"Rectangular Table",
            image:"../../public/rectangularTable.png"
        },
        {
            name:"Square Table",
            image:"../../public/squaretable.png"
        },
        {
            name:"Serperentine Table",
            image:"../../public/serperentine.png"
        },
       
    ];
    const [tableTypesData,setTableTypesData] = useState(tableSelectionTypes);

    






    const  [chairTypeModalState, setChairTypeModalState] = useState(false);

    const [selectedChairType, setSelectedChairType] = useState(null);
    const [selectedChairTypeDetails, setSelectedChairTypeDetails] = useState(null);

    const handleSelectionChairType = (name) => {
        setSelectedChairType(name);
    };

    const chairSelectionTypes = [
        {
            name:"Silver Chiavari Chairs",
            cost:10,
            image:"https://regalpartyhall.com/main/decor/images/ch.jpg"
        },
        {
            name:"Gold Chiavari Chairs",
            cost:10,
            image:"https://regalpartyhall.com/main/decor/images/ch1.jpg"
        },
        {
            name:"Chair Covers with Bows",
            cost:10,
            image:"https://regalpartyhall.com/main/decor/images/ch2.jpg"
        },
        {
            name:"High Chairs",
            cost:10,
            image:"https://regalpartyhall.com/main/decor/images/ch5.jpg"
        },
        {
            name:"Wedding Chair",
            cost:10,
            image:"https://regalpartyhall.com/main/decor/images/ch6.jpg"
        },
        {
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
            name:"CP 1",
            cost:10,
            image:"https://regalpartyhall.com/main/decor/images/cp1.jpg"
        },
        {
            name:"CP 2",
            cost:10,
            image:"https://regalpartyhall.com/main/decor/images/cp2.jpg"
        },
        {
            name:"CP 3",
            cost:10,
            image:"https://regalpartyhall.com/main/decor/images/cp3.jpg"
        },
        {
            name:"CP 4",
            cost:10,
            image:"https://regalpartyhall.com/main/decor/images/cp4.jpg"
        },
        {
            name:"CP 6",
            cost:10,
            image:"https://regalpartyhall.com/main/decor/images/cp5.jpg"
        },
        {
            name:"CP 6",
            cost:10,
            image:"https://regalpartyhall.com/main/decor/images/cp6.jpg"
        },
        {
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
            name:"Backdrop 1",
            cost:10,
            image:"https://regalpartyhall.com/main/decor/images/bd1.jpg"
        },
        {
            name:"Backdrop 2",
            cost:10,
            image:"https://regalpartyhall.com/main/decor/images/bd2.jpg"
        },
        {
            name:"Backdrop 3",
            cost:10,
            image:"https://regalpartyhall.com/main/decor/images/bd3.jpg"
        },
        {
            name:"Backdrop 4",
            cost:10,
            image:"https://regalpartyhall.com/main/decor/images/bd4.jpg"
        },
        {
            name:"Mandap 1",
            cost:10,
            image:"https://regalpartyhall.com/main/decor/images/bd31.jpg"
        },
        {
            name:"Mandap 2",
            cost:10,
            image:"https://regalpartyhall.com/main/decor/images/bd32.jpg"
        },
        {
            name:"Mandap 3",
            cost:10,
            image:"https://regalpartyhall.com/main/decor/images/bd33.jpg"
        },
        {
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
            image:"../../public/sound-system.png"
        },
        {
            name:"Sound Sytem 2",
            cost:10,
            image:"../../public/sound-system.png"
        },
        {
            name:"Sound Sytem 3",
            cost:10,
            image:"../../public/sound-system.png"
        },
        {
            name:"Sound Sytem 4",
            cost:10,
            image:"../../public/sound-system.png"
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
            name:"Lighting 1",
            cost:10,
            image:"../../public/lighting.png"
        },
        {
            name:"Lighting 2",
            cost:10,
            image:"../../public/lighting.png"
        },
        {
            name:"Lighting 3",
            cost:10,
            image:"../../public/lighting.png"
        },
        {
            name:"Lighting 4",
            cost:10,
            image:"../../public/lighting.png"
        },
        {
            name:"Lighting 5",
            cost:10,
            image:"../../public/lighting.png"
        },
        {
            name:"Lighting 6",
            cost:10,
            image:"../../public/lighting.png"
        },
       
       
    ];
    const [lightingTypesData,setLightingTypesData] = useState(lightingSelectionTypes);






    const  [diningStyleModalState, setDiningStyleModalState] = useState(false);

    const [selectedDiningStyleType, setSelectedDiningStyleType] = useState(null);

    const handleSelectionDiningStyleType = (name) => {
        setSelectedDiningStyleType(name);
    };

    const diningStyleTypes = [
        {
            name:"Buffet Style",
            cost:10,
            image:"../../public/buffet0.png"
        },
        {
            name:"Family Style",
            cost:10,
            image:"../../public/familyStyle0.png"
        },
        {
            name:"Dining Style",
            cost:10,
            image:"../../public/tableService0.png"
        },
    
       
       
    ];
    const [diningStyleTypesData,setDiningStyleTypesData] = useState(diningStyleTypes);















    const  [cutleryTypeModalState, setCutleryTypeModalState] = useState(false);

    const [selectedCutleryStyleType, setSelectedCutleryStyleType] = useState(null);

    const handleSelectionCutleryStyleType = (name) => {
        setSelectedCutleryStyleType(name);
    };

    const cutuleryStyleTypes = [
        {
            name:"Porcelain",
            cost:10,
            image:"../../public/porcelain.png"
        },
        {
            name:"Plastic",
            cost:10,
            image:"../../public/plastic.png"
        },
       
    
       
       
    ];
    const [cutleryStyleTypesData,setCutleryStyleTypesData] = useState(cutuleryStyleTypes);





    const [user,setUser] =useState(null); 
    const [activeStep,setActiveStep] =useState(4); 
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
            seatingArrangementModalState, setSeatingArrangementModalState,selectedArrangement,setSelectedArrangement,handleSelectionSeatingArrang,seatingArrangementTypesData,
            tableTypeModalState, setTableTypeModalState,selectedTable,handleSelectionTable,tableTypesData,
            chairTypeModalState, setChairTypeModalState,selectedChairType,handleSelectionChairType,chairTypesData,setSelectedChairType,
            centerpieceModalState, setCenterpieceModalState,selectedCenterpieceType,handleSelectionCenterpieceType,centerpieceTypesData,
            mdModalState, setMDModalState,selectedMdType,handleSelectionMdType,mdTypesData,
            lightingModalState, setLightingModalState,selectedLightingType,handleSelectionLightingType,lightingTypesData,
            soundSystemModalState, setSoundSystemModalState,selectedSoundSystemType,handleSelectionSoundSystemType, soundSystemTypesData,
            diningStyleModalState, setDiningStyleModalState,selectedDiningStyleType,handleSelectionDiningStyleType,diningStyleTypesData,
            cutleryTypeModalState, setCutleryTypeModalState,selectedCutleryStyleType,handleSelectionCutleryStyleType,cutleryStyleTypesData,
            isRoomSelected,handleRoomSelectedChange,isSecuritySelected,handleSecuritySelectedChange,
            activeStep,setActiveStep,changeStepToNext,changeStepToPrevious,changeStepTo,
            publicEventChecked,privateEventChecked,handleCheckboxEventType,
            publicEvents,privateEvents,
            selectedEventValue,handleEventChange,
            totalPersons,changeTotalPersons,
            venuesDetails,selectedVenueId, setSelectedVenueId,
            foodTypes,selectedFoodType, setFoodType, selectedFoodTypeName, setFoodTypeName , setFoodTypeSelection,selectedFoodPackages,setSelectedFoodPackages,selectedFoodPackage,setSelectedPackageDetails, setSelectedFoodPackage, setFoodPackage,selectedPackageDetails,calculatePackagePrice,
            StageTypes,selectedStageType, setSelectedStageType ,setStageType,
            selectedDate, setSelectedDate,fetchSlotsDate,availableSlots,setAvailableSlots,banquetSlots,isSlotsLoading, setSlotsLoading,
            formatDateToYYYYMMDD,generateDateList,appointmentDates,selectedAppointmentDate,setSelectedAppointmentDate,
            fetchAppointmentDates,appointmentSlots,showSelectFieldAppointmentSlots,setSelectFieldAppointmentSlots,availableAppointmentSlots,setAvailableAppointmentSlots,selectedAppointmentSlot,setAppointmentSlot,appointmentType,setAppointmentType,
            appetizers,dessertS,beverageS,mainEntreeS,teaCoffee,juicesDrinks,
            activeHeadingPopUp,setActiveHeadingPopUp,activeDataSet,setActiveDataSet,
            selectedAppetizers,setSelectedAppetizers,selectedDesserts,setSelectedDesserts,selectedMainEntree,setSelectedMainEntree,selectedFoodPackage,activeHeadingPopUpLabel,setActiveHeadingPopUpLabel
            }}>
            {children}
        </MainContext.Provider>
    )
}

export default MainContextProvider;