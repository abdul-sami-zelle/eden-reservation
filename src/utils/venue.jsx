import ShadowText from "./shadowText";
import { colors } from "./colors";
import Heading4 from "./heading4";
import MainContext from "../context/mainContext";
import React, {useContext} from "react";

function Venue({name,capacity,background,img,enable,venueId,isSelected}) {
    const {setSelectedVenueId} = useContext(MainContext);
    return (
        <div className="venue" style={{backgroundImage:`url(${background})`}}>
            <div className="venueName">
            <ShadowText text={`${name}`} fontSize={"24px"} weight={"600"} family={"Montserrat"} color={"#fff"} shadow={"2px 2px 2px black"} cursor={"pointer"} margin={"0px"} />
            </div>
            <div className="buttonsSections">
               {enable? <button className={isSelected?"selected":""} onClick={()=>{
                    setSelectedVenueId(venueId);
                }} >{isSelected? "Selected":"Select"}</button> :<></>}
                <button>See Images</button>
               
            </div>
            <div className="capacityVenue">
                
                <img src={img} alt="" srcset="" />
                <Heading4 text={`Capacity : ${capacity} Persons`} margin={"0px"} color={"#fff"} fontSize={"12px"} family={"Montserrat"} />
                <span style={{width:"1px",height:"1px"}}></span>
                
            </div>
            {/* {enable?<></>:<div className="overlayDisabledVenue">

            </div>} */}
        </div>
    )
}

export default Venue;