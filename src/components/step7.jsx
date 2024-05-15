import React, { useEffect, useState, useRef, useContext } from 'react';
import ConsultantInfo from './consultantInfo';
import InputField from '../utils/inputField';
import Grid from '@mui/material/Grid';

function Step7() {
    return(
        <div style={{marginTop:'30px',padding:'0px 30px'}}>
            <Grid container>
                <Grid item lg={12}>
                    <h3 style={{
                        fontFamily:'Montserrat',
                        color:'var(--secondary-color)',
                        margin:'0 0 15px 20px',
                        fontSize:'24px'
                    }}>
                        <span>Your Information</span>
                        <div style={{width:'15%',height:'2px',backgroundColor:'var(--secondary-color)',borderRadius:'10px'}}></div>
                    </h3>
                </Grid>
                <Grid item lg={6} sm={12}>
                    <InputField margin={"0 10px 0 20px"} label={"First Name"} />
                </Grid>
                <Grid item lg={6} sm={12}>
                    <InputField margin={"0 20px 0 10px"}  label={"Last Name"} />
                </Grid>
                <Grid item lg={6} sm={12}>
                    <InputField margin={"0 10px 0 20px"} label={"Email Address"} />
                </Grid>
                <Grid item lg={6} sm={12}>
                    <InputField margin={"0 20px 0 10px"} label={"Phone Number"} />
                </Grid>
                <Grid item lg={4} sm={12}>
                    <InputField margin={"0 10px 0 20px"} label={"Zip Code"} />
                </Grid>
                <Grid item lg={4} sm={6}>
                    <InputField margin={"0 10px 0 10px"} label={"City"} />
                </Grid>
                <Grid item lg={4} sm={6}>
                    <InputField margin={"0 20px 0 10px"} label={"State"} />
                </Grid>
            </Grid>
        </div>
    )
}

export default Step7;