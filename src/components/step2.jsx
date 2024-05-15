import Venue from "../utils/venue";
import LabelHeading from "../utils/labelsHeading";
import { colors } from "../utils/colors";
import React , {useContext} from "react";
import MainContext from "../context/mainContext";


function Step2() {
    const {venuesDetails,totalPersons,selectedVenueId} = useContext(MainContext);
    return(
       <div style={{display:'flex',flexDirection:"column",justifyContent:"center",alignItems:'center'}}>
        <LabelHeading text={"Please Select Venue"} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} weight={"500"} />
        <div style={{display:'flex',flexWrap:"wrap",width:'80%',justifyContent:"center"}}>
           { venuesDetails.map((item, index) => (
                <Venue enable={totalPersons<=item.capacity} name={item.name} capacity={item.capacity} background={item.mainImage} img={item.icon} venueId={item.id} isSelected={item.id===selectedVenueId} />
            ))}
         {/* <Venue enable={true} name={"Diamond"} capacity={"200"} background={"https://regalpartyhall.com/main/ballrooms/dia.jpg"} img={"../../public/diamond.png"} />
        <Venue enable={false} name={"Ruby"} capacity={"200"} background={"https://regalpartyhall.com/main/ballrooms/rub.jpg"} img={"../../public/ruby.png"} />
        <Venue enable={true} name={"Emerald"} capacity={"200"} background={"https://regalpartyhall.com/main/ballrooms/emr.jpg"} img={"../../public/emerald.png"} />
        <Venue enable={true} name={"Ruby + Emerald"} capacity={"200"} background={"https://regalpartyhall.com/main/ballrooms/rub-emr.jpg"} />
        <Venue enable={false} name={"Topaz"} capacity={"200"} background={"https://regalpartyhall.com/main/ballrooms/top.jpg"} img={"../../public/topaz.png"} />
        <Venue enable={false} name={"Sapphire"} capacity={"200"} background={"https://regalpartyhall.com/main/ballrooms/sha.jpg"} img={"../../public/sapphire.png"} /> */}
        </div>
       </div>
    )
}
export default Step2;