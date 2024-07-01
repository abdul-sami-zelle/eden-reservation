import React ,{useState,useContext} from "react";
import { Grid } from "@mui/material";
import './header.css';
import { CaretDownFilled, MenuOutlined ,CloseOutlined} from "@ant-design/icons";
import phone_p from '../../assets/phone_p.png';
import arrow_p from '../../assets/arrow_p.png';

function HeaderBar() {
    const [isActiveSubUl, setIsActiveSubUl] = useState(null);
    const [isMobileSideMenuOpened,setMobileSideMenuOpened] = useState(false);



    return(
        <Grid container>
            <Grid item lg={12} md={12} sm={12}>
                <div className="header">
                   <div className="logoHeader">
                        <a href="https://edengardensbanquet.com/">
                            <img src="https://edengardensbanquet.com/wp-content/uploads/2024/01/EG-Logo-2.png" alt="" />
                        </a>
                   </div>
                   <div className="tabsHeader">
                      <nav>
                        <ul>
                            <li
                             onMouseLeave={()=>{
                                setIsActiveSubUl(null);
                            }} onMouseEnter={()=>{
                                setIsActiveSubUl("00");
                            }}
                              className={isActiveSubUl==="00"?"activeDropdown":""}>
                                <a href="https://edengardensbanquet.com/">
                                    Home
                                </a>
                            </li>
                            <li
                             onMouseLeave={()=>{
                                setIsActiveSubUl(null);
                            }} onMouseEnter={()=>{
                                setIsActiveSubUl("0");
                            }}
                             className={isActiveSubUl==="0"?"activeDropdown":""}>
                                <a href="https://edengardensbanquet.com/venues/">
                                    Venues
                                    <span className="sub-arrow">
                                        <CaretDownFilled/>
                                    </span>
                                </a>
                                <ul className="sub-menu">
                                    <li className="sub-menu-item">
                                        <a href="https://edengardensbanquet.com/diamond-ballroom/">
                                            Diamond Ballroom
                                        </a>
                                    </li>
                                    <li className="sub-menu-item">
                                        <a href="https://edengardensbanquet.com/ruby-ballroom/">
                                            Ruby Ballroom
                                        </a>
                                    </li>
                                    <li className="sub-menu-item">
                                        <a href="https://edengardensbanquet.com/emerald-ballroom/">
                                            Emerald Ballroom
                                        </a>
                                    </li>
                                    <li className="sub-menu-item">
                                        <a href="https://edengardensbanquet.com/ruby-emerald-ballroom/">
                                            Ruby + Emerald Ballroom
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li onMouseLeave={()=>{
                                setIsActiveSubUl(null);
                            }} onMouseEnter={()=>{
                                setIsActiveSubUl("1");
                            }} className={isActiveSubUl==="1"?"activeDropdown":""}>
                                <a href="https://edengardensbanquet.com/occasions/">
                                    Occasions
                                    <span className="sub-arrow">
                                        <CaretDownFilled/>
                                    </span>
                                </a>
                                <ul className="sub-menu">
                                    <li className="sub-menu-item">
                                        <a href="https://edengardensbanquet.com/wedding-new/">
                                            Wedding
                                        </a>
                                    </li>
                                    <li className="sub-menu-item">
                                        <a href="https://edengardensbanquet.com/corporate-events/">
                                            Corporate Events
                                        </a>
                                    </li>
                                    <li className="sub-menu-item">
                                        <a href="https://edengardensbanquet.com/educational-events/">
                                            Educational Events
                                        </a>
                                    </li>
                                    <li className="sub-menu-item">
                                        <a href="https://edengardensbanquet.com/special-occasions/">
                                            Special Occasions
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li onMouseLeave={()=>{
                                setIsActiveSubUl(null);
                            }} onMouseEnter={()=>{
                                setIsActiveSubUl("2");
                            }} className={isActiveSubUl==="2"?"activeDropdown":""}>
                                <a href="https://edengardensbanquet.com/dining/">
                                    Dining
                                    <span className="sub-arrow">
                                        <CaretDownFilled/>
                                    </span>
                                </a>
                                <ul className="sub-menu">
                                    <li className="sub-menu-item">
                                        <a href="https://edengardensbanquet.com/cafe/">
                                            Cafe
                                        </a>
                                    </li>
                                    <li className="sub-menu-item">
                                        <a href="https://edengardensbanquet.com/restaurant/">
                                            Restaurant
                                        </a>
                                    </li>
                                   
                                </ul>
                                
                            </li>
                            <li onMouseLeave={()=>{
                                setIsActiveSubUl(null);
                            }} onMouseEnter={()=>{
                                setIsActiveSubUl("3");
                            }} className={isActiveSubUl==="3"?"activeDropdown":""}>
                                <a className="activeBottom" href="https://events.edengardensbanquet.com/">
                                    Events
                                    <span className="sub-arrow">
                                        <CaretDownFilled/>
                                    </span>
                                </a>
                                <ul className="sub-menu">
                                    <li className="sub-menu-item">
                                        <a href="https://events.edengardensbanquet.com/">
                                            Community
                                        </a>
                                    </li>
                                    <li className="sub-menu-item">
                                        <a href="https://events.edengardensbanquet.com/">
                                            Religious
                                        </a>
                                    </li>
                                   
                                </ul>
                            </li>
                            <li  onMouseLeave={()=>{
                                setIsActiveSubUl(null);
                            }} onMouseEnter={()=>{
                                setIsActiveSubUl("4");
                            }} className={isActiveSubUl==="4"?"activeDropdown":""}>
                                <a href="https://edengardensbanquet.com/testimonials/">
                                    Testimonials
                                </a>
                            </li>
                            <li  onMouseLeave={()=>{
                                setIsActiveSubUl(null);
                            }} onMouseEnter={()=>{
                                setIsActiveSubUl("5");
                            }} className={isActiveSubUl==="5"?"activeDropdown":""} >
                                <a href="https://edengardensbanquet.com/contact-us/">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                      </nav>
                   </div>
                   <div className="buttonHeader">
                    <a className="inquiry-button" href="">
                        <span className="inq-button-text">
                            EVENT INQUIRY
                        </span>
                    </a>
                    <a className="menu-icon" onClick={()=>{
                        setMobileSideMenuOpened(true);
                    }}>
                        <MenuOutlined />
                    </a>
                   </div>
                </div>
            </Grid>
            <Grid lg={12} sm={12} md={12}>
                <div className={isMobileSideMenuOpened?"mobileViewSideHeader active":'mobileViewSideHeader'}>
                    <div onClick={()=>{
                        setMobileSideMenuOpened(false);
                    }} className="closeButton">
                            <CloseOutlined/>
                    </div>
                    <div className="sub_header_mobile">
                        <div className="contact">
                            <span className="contactIcon"><img src={phone_p} alt="" srcset="" /></span>
                            <span className="contactNumber">1800-3727-066</span>
                        </div>
                        <div className="eventInquiryButtonMobile">
                        <a href="">
                                Event Inquiry
                        </a>
                        </div>
                    </div>
                    <div className="mobile_header_links">
                        <ul>
                            <li> <a>Home</a> </li>
                            <li> <a>Dining</a> </li>
                            <li><a>Testimonials</a> </li>
                            <li><a>Contact Us</a> </li>
                        </ul>
                    </div>


                    <div className="sub_header_li">
                        <h2>Venue</h2>
                    </div>
                    <div className="mobile_header_links_sub">
                        <ul>
                            <li> <a> <img src={arrow_p} alt="" srcset="" /> Diamond Ballroom</a> </li>
                            <li> <a> <img src={arrow_p} alt="" srcset="" /> Ruby Ballroom</a> </li>
                            <li><a> <img src={arrow_p} alt="" srcset="" /> Emerald Ballroom</a> </li>
                            <li><a>  <img src={arrow_p} alt="" srcset="" />Ruby + Emerald Ballroom</a> </li>
                        </ul>
                    </div>

                    <div className="sub_header_li">
                        <h2>Occasions</h2>
                    </div>
                    <div className="mobile_header_links_sub">
                        <ul style={{padding:'0px !important'}}>
                            <li> <a> <img src={arrow_p} alt="" srcset="" /> Weddings</a> </li>
                            <li> <a> <img src={arrow_p} alt="" srcset="" /> Special Occasion</a> </li>
                            <li><a> <img src={arrow_p} alt="" srcset="" /> Corporate Event</a> </li>
                            <li><a>  <img src={arrow_p} alt="" srcset="" />Educational Event</a> </li>
                        </ul>
                    </div>


                   
                </div>
            </Grid>
        </Grid>
    )
}

export default HeaderBar;