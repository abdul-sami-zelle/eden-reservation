import React, { useEffect, useState, useRef,useContext } from 'react';
import SelectField from '../utils/selectField';
import { SmileOutlined, FrownOutlined, MehOutlined } from '@ant-design/icons';
import Checkboxes from './checkbox/checkbox';
import LabelHeading from '../utils/labelsHeading';
import { colors } from '../utils/colors';
import SliderRange from './slider';
import MainContext from '../context/mainContext';
import InputField from '../utils/inputField';
import axios from 'axios';
import { Url } from '../env';


function Step1() {

    const [loading,setLoading] = useState(false);
    
   

 

    const {
        publicEventChecked, 
        privateEventChecked, 
        handleCheckboxEventType,
        setPublicEvents,
        setPrivateEvents,
        publicEvents,
        privateEvents,
        selectedEventValue,
        handleEventChange,
        ticketPrice,
        handleTicketPriceInputChange,
        eventTitle,
        setEventTitle,
        handleEventTitleInputChange
    } = useContext(MainContext);

    const fetchEventTypes = async() => {
        try {
          setLoading(true);
            const response = await axios.get(`${Url}EventType/Get`)
            console.log(response.data.EventType)
            if (response.status === 200) {
                const publicEvents = response.data.EventType.filter(event => event.type === 'Public');
                const privateEvents = response.data.EventType.filter(event => event.type === 'Private');
                
                setPublicEvents(publicEvents);
                setPrivateEvents(privateEvents);
            }
            setLoading(false);
        } catch (error) {
            console.error("Error Fetching Data", error);
            setLoading(false);
        }
     }
     useEffect(() => {
        fetchEventTypes();
     }, [])


    return (
        <>
            <div className='innerContentStep1' style={{
               
            }}>
                <div style={{
                    marginBottom:'20px'
                }} >
                    <LabelHeading text={"Please Select Event Type"} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} weight={"500"} />
                    <label htmlFor="cbx-1" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <Checkboxes id="cbx-1" isChecked={publicEventChecked} onChange={handleCheckboxEventType} />
                        <LabelHeading text={"Public Event"} color={colors.primary} fontSize={"12px"} margin={"0px 5px"} family={'Montserrat'} />
                    </label>
                    <div style={{ height: '10px' }}></div>
                    <label htmlFor="cbx-2" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <Checkboxes id="cbx-2" isChecked={privateEventChecked} onChange={handleCheckboxEventType} />
                        <LabelHeading text={"Private Event"} color={colors.primary} fontSize={"12px"} margin={"0px 5px"} family={'Montserrat'} />
                    </label>
                </div>
                <div style={{
                    marginBottom:'5px'
                }}>
                    <LabelHeading text={"Please Select Event"} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} weight={"500"} />
                    <SelectField
                        options={ publicEventChecked?publicEvents:privateEvents}
                        placeholder="Select Event"
                        label=""
                        onChange={handleEventChange}
                        value={selectedEventValue}
                        width="300px"
                        backgroundColor={colors.primary}
                    />
                </div>

               {publicEventChecked? 
               
               <div style={{display:"flex"}}>

                <div>
                   <LabelHeading text={"Ticket Cost$"} color={colors.secondary} fontSize={"14px"} margin={"5px 0px"} family={'Montserrat'} weight={"500"} />
                   <InputField value={ticketPrice} name={'price'} onChange={handleTicketPriceInputChange} width={"90px"} placeholder={"In $"} />
                </div>
                <div style={{marginLeft:'10px'}}>
                   <LabelHeading text={"Event Title"} color={colors.secondary} fontSize={"14px"} margin={"5px 0px"} family={'Montserrat'} weight={"500"} />
                   <InputField value={eventTitle} name={'price'} onChange={handleEventTitleInputChange} width={"200px"} placeholder={"Event Title"} />
                </div>

               </div>  :<></>}



                <div>
                    <LabelHeading text={"Please Select No. of Guests"} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} weight={"500"} />
                    <SliderRange />
                </div>

            </div>
        </>
    )
}
export default Step1;