import { useState,useEffect } from "react";
import Venue from "../utils/venue";
import LabelHeading from "../utils/labelsHeading";
import { colors } from "../utils/colors";
import React , {useContext} from "react";
import MainContext from "../context/mainContext";
import axios from 'axios';
import { Url0,Url } from "../env";
import loader4 from '../assets/loader4.gif'


function Step2() {
    const [loading,setLoading] = useState(false);
    const {venuesDetails,totalPersons,selectedVenueId,setVenueDetails} = useContext(MainContext);
    const fetchVenue = async() => {
      try {
        setLoading(true);
          const response = await axios.get(`${Url}Venue/Get`)
          console.log(response.data.Venue)
          setVenueDetails(response.data.Venue);
          setLoading(false);
      } catch (error) {
          console.error("Error Fetching Data", error);
          setLoading(false);
      }
   }
   useEffect(() => {
      fetchVenue();
   }, [])


    return(
       <div className="venuesSelectionTab">
        <LabelHeading text={"Please Select Venue"} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} weight={"500"} />
      {loading?<div className="bookingConfirmationOverlay">
                        <img src={loader4} alt="" srcset="" />
                    </div> : <div className="allVenues">
           { venuesDetails.map((item, index) => (
                <Venue enable={totalPersons<=item.capacity} name={item.name} capacity={item.capacity} background={Url0+item.venueImagePath} img={item.icon} venueId={item.id} isSelected={item.name===selectedVenueId.name} data={item} />
            ))}
         {/* <Venue enable={true} name={"Diamond"} capacity={"200"} background={"https://regalpartyhall.com/main/ballrooms/dia.jpg"} img={"../assets/diamond.png"} />
        <Venue enable={false} name={"Ruby"} capacity={"200"} background={"https://regalpartyhall.com/main/ballrooms/rub.jpg"} img={"../assets/ruby.png"} />
        <Venue enable={true} name={"Emerald"} capacity={"200"} background={"https://regalpartyhall.com/main/ballrooms/emr.jpg"} img={"../assets/emerald.png"} />
        <Venue enable={true} name={"Ruby + Emerald"} capacity={"200"} background={"https://regalpartyhall.com/main/ballrooms/rub-emr.jpg"} />
        <Venue enable={false} name={"Topaz"} capacity={"200"} background={"https://regalpartyhall.com/main/ballrooms/top.jpg"} img={"../assets/topaz.png"} />
        <Venue enable={false} name={"Sapphire"} capacity={"200"} background={"https://regalpartyhall.com/main/ballrooms/sha.jpg"} img={"../assets/sapphire.png"} /> */}
        </div>}
       </div>
    )
}
export default Step2;