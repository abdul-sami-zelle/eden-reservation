import React, { useContext, useEffect,useState } from 'react';
import MainContext from '../context/mainContext';
import InputField from '../utils/inputField';
import Grid from '@mui/material/Grid';
import PhoneNumberField from '../utils/inputField2';

function Step7() {



    const [inputValue, setInputValue] = useState('');

  // Event handler to update state when input value changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted with value: ", inputValue);
  };
    const { formData, setFormData, handleFormInputChange, handleFormSubmit } = useContext(MainContext);
   

    useEffect(() => {
        const handleZipCode = async (zipCode) => {
            try {
                const response = await fetch(`https://zip.getziptastic.com/v2/US/${zipCode}`);
                if (response.ok) {
                    const result = await response.json();
                    setFormData(prevData => ({
                        ...prevData,
                        city: result.city,
                        state: result.state
                    }));
                }
            } catch (error) {
                console.error('Error fetching ZIP code data:', error);
            }
        };

        if (formData.zip.length === 5 && /^\d{5}$/.test(formData.zip)) {
            handleZipCode(formData.zip);
        }
    }, [formData.zip, setFormData]);

    return (
        <div className='mainFormForm1' style={{ marginTop: '30px', padding: '0px 200px' }}>
            <form id='form1' onSubmit={handleFormSubmit}>
                <Grid container>
                    <Grid className='infoTitle' item lg={12} md={12} sm={12} xs={12}>
                        <h3 style={{
                            fontFamily: 'Montserrat',
                            color: 'var(--secondary-color)',
                            // margin: '0 0 15px 20px',
                            fontSize: '24px'
                        }}>
                            <span>Your Information</span>
                            <div style={{ width: '15%', height: '2px', backgroundColor: 'var(--secondary-color)', borderRadius: '10px' }}></div>
                        </h3>
                    </Grid>
                    <Grid className='abc' item lg={6} sm={6} xs={6}>
                        <div className='inputField_0_1 small_1'>
                            <InputField 
                                // margin={"0 10px 0 20px"} 
                                label={"First Name"} 
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleFormInputChange}
                                required={true}
                            />
                        </div>
                    </Grid>
                    <Grid item lg={6} sm={6} xs={6}>
                        <div className='inputField_0_2 small_1'>
                        <InputField 
                            className="formInputField"
                            // margin={ "0 20px 0 10px"}  
                            label={"Last Name"}
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleFormInputChange}
                            required={true}
                        />
                        </div>
                       
                    </Grid>
                    <Grid item lg={6} sm={12} xs={12}>
                    <div className='inputField_0_1'>
                        <InputField 
                            // margin={"0 10px 0 20px"} 
                            label={"Email Address"}
                            name="email"
                            value={formData.email}
                            onChange={handleFormInputChange}
                            required={true}
                        />
                         </div>
                    </Grid>
                    <Grid item lg={6} sm={6} xs={6}>
                    <div className='inputField_0_2 small'>
                        <PhoneNumberField 
                            
                            label={"Phone Number"}
                            name="phone"
                            value={formData.phone}
                            onChange={handleFormInputChange}
                            required={true}
                        />
                        </div>
                    </Grid>
                    <Grid item lg={4} sm={6} xs={6} >
                    <div className='inputField_0_1 small'>
                        <InputField 
                            id={"zip"}
                            // margin={"0 10px 0 20px"} 
                            label={"Zip Code"}
                            name="zip"
                            value={formData.zip}
                            onChange={handleFormInputChange}
                            required={true}
                        />
                    </div>
                    </Grid>
                    <Grid item lg={4} sm={6} xs={12}>
                    <div className='inputField_0_1'>
                        <InputField 
                            id={"city"}
                            
                            label={"City"}
                            name="city"
                            value={formData.city}
                            onChange={handleFormInputChange}
                            required={true}
                        />
                        </div>
                    </Grid>
                    <Grid item lg={4} sm={6} xs={12}>
                    <div className='inputField_0_2'>
                        <InputField 
                            id={"state"}
                            
                            label={"State"}
                            name="state"
                            value={formData.state}
                            onChange={handleFormInputChange}
                            required={true}
                        />
                        </div>
                    </Grid>
                    <Grid item lg={12}>
                        {/* <button type="submit" style={{ margin: '20px 0 0 20px' }}>
                            Save
                        </button> */}
                    </Grid>
                </Grid>
            </form>
         


        </div>
    );
}

export default Step7;
