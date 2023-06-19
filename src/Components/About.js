import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import './about.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/UserSlice';
import { AiFillFacebook } from "react-icons/ai";
import {AiFillTwitterSquare } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
function About() {
    const user = useSelector((state) => state.user?.user);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    return (
        <div>
            <div className="Appa3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6" >
                            <ul className="topbar-list" style={{ listStyle: "none", textDecoration: "none", color: "white", justifyContent: "space-around" }}>
                            <li>
                                    <AiFillFacebook style={{ width: "20px", margin: "2px", color:"white", fontSize:"30px"}} />

                                    <AiFillTwitterSquare style={{ width: "20px", margin: "2px", color:"white", fontSize:"30px" }}/>
                                    <AiFillInstagram style={{ width: "20px", margin: "2px", color:"white", fontSize:"30px" }}/>
                                    < AiFillLinkedin style={{ width: "20px", margin: "2px", color:"white", fontSize:"30px" }}/>
                                </li>
                                <li >
                                    <a href="#!" style={{ textDecoration: "none" }}>
                                        <span style={{ color: "white" }}>+011 234 567 89</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" style={{ textDecoration: "none" }}>
                                        <span style={{ textDecoration: "none", color: "white" }}> contact@domain.com</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <hr style={{
                            color: "white",
                            backgroundColor: "white",
                            height: "1px"
                        }} />
                    </div>
                </div>




                {/* navbar */}

                <ul className="nav flex-column text-white w-100">

                    <img src="https://andit.co/projects/html/and-tour/demo/assets/img/logo.png" style={{ width: "210px" }} />

                    <li href="#" className="nav-link">
                        <i className="bx bxs-dashboard" />
                        <span className="mx-2"><Link style={{ textDecoration: "none", color: "white", fontFamily: "Poppins, sans-serif" }} to="/">Home</Link></span>
                    </li>
                    <li href="#" className="nav-link">
                        <i className="bx bx-user-check" />
                        <span className="mx-2"><Link style={{ textDecoration: "none", color: "white", fontFamily: "Poppins, sans-serif" }} to="/hotels">Hotels</Link></span>
                    </li>

                    <li href="#" className="nav-link">
                        <i className="bx bx-conversation" />
                        <span className="mx-2"><Link style={{ textDecoration: "none", color: "white", fontFamily: "Poppins, sans-serif" }} to="/about">About</Link></span>
                    </li>
                    <li href="#" className="nav-link">
                        <i className="bx bx-conversation" />
                        <span className="mx-2"><Link style={{ textDecoration: "none", color: "white", fontFamily: "Poppins, sans-serif" }} to="/contact">Contact</Link></span>
                    </li>
                    {!user ? <li href="#" className="nav-link">
                        <i className="bx bx-conversation" />
                        <span className="mx-2"><Link style={{ textDecoration: "none", color: "white", fontFamily: "Poppins, sans-serif" }} to="/login">Connexion</Link></span>
                    </li> : null}
                    {user?.category == "admin" ? <li href="#" className="nav-link">
                        <i className="bx bx-conversation" />
                        <span className="mx-2"><Link style={{ textDecoration: "none", color: "white", fontFamily: "Poppins, sans-serif" }} to="/dashboard">Dashboard</Link></span>
                    </li> : null}
                    {user ?
                        <>
                            <li href="#" className="nav-link">
                                <i className="bx bx-conversation" />
                                <span className="mx-2"><Link style={{ textDecoration: "none", color: "white", fontFamily: "Poppins, sans-serif" }} to="/profil">Welcome {user?.name}</Link></span>
                            </li>
                            <li href="#" className="nav-link" style={{ marginLeft: "-32px" }}>
                                <i className="bx bx-conversation" />
                                <span className="mx-2"><Link style={{ textDecoration: "none", color: "white", fontFamily: "Poppins, sans-serif" }} to="/profil"><img src={user?.image} style={{ width: "25px", height: "25px", borderRadius: "50%" }} /></Link></span>
                            </li>
                            <li href="#" className="nav-link" style={{ marginLeft: "-54px" }}>
                                <i className="bx bx-conversation" />
                                <NavDropdown title="" id="nav-dropdown">
                                    <NavDropdown.Item eventKey="4.1">Profile</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.2">Settings</NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.3">
                                        <button className="btnlog" onClick={() => { dispatch(logout()); navigate("/login") }}>Logout</button></NavDropdown.Item>

                                </NavDropdown>

                            </li></> : null}
                    {/* <li href="#" className="nav-link">
                        <i className="bx bx-conversation" />
                        <span className="mx-2"><Link style={{ textDecoration: "none", color: "white",  fontFamily: "Poppins, sans-serif"}} to="/register">Register</Link></span>
                    </li>
                    <li href="#" className="nav-link">
                        <i className="bx bx-conversation" />
                        <span className="mx-2"><Link style={{ textDecoration: "none", color: "white", fontFamily: "Poppins, sans-serif"}} to="/login">Login</Link></span>
                    </li> */}
                    <div className="Na">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="common_bannner_text">
                                        <h2 style={{ marginLeft: "35px" }}>About us</h2>
                                        <ul style={{ listStyle: "none" }}>
                                            <li><a href="index.html" style={{ textDecoration: "none", color: "white" }}>Home</a></li>
                                            <li style={{ marginLeft: "20px" }}><span ><i class="fas fa-circle"></i></span> About</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <h2 style={{ marginLeft: "200px" }}>About us</h2> */}
                    </div>
                </ul>

            </div>

            <div class="containere" style={{ marginTop: "60px", marginLeft: "100px" }}>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="about_us_left">
                            <h5>About us</h5>
                            <h2>We Are The World Best Travel Agency Company Since 2000</h2>
                            <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                                dolor sit amet, consetetur sadipscing elitr </p>
                            <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                                dolor sit amet, consetetur sadipscing elitr </p>
                            <a href="tour-search.html" class="btn btn_theme btn_md" style={{ backgroundColor: "" }}>Find tours</a>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about_us_right">
                            <img src="https://andit.co/projects/html/and-tour/demo/assets/img/common/abour_right.png" alt="img" style={{ width: "545px", height: "327px" }} />
                        </div>
                    </div>

                </div>
            </div>











            <div className="Big">

                <section id="about_offer_banner" class="section_padding_bottom">
                    <div class="container-fluid">
                        <div class="row">
                            <h2 class="d-none">Heading</h2>
                            <div class="col-lg-7">
                                <div class="about_offer_banner">
                                    <a href="!#"><img src="https://andit.co/projects/html/and-tour/demo/assets/img/common/small_banner.png" alt="img" style={{
                                        verticalAlign: "middle",
                                        width: "333px", marginLeft: "40px", height: "400px", position: "absolute", top: "1083px"
                                    }} /></a>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="about_offer_banner">
                                    <img src="https://andit.co/projects/html/and-tour/demo/assets/img/common/big_banner.png" alt="img" style={{ verticalAlign: "middle", width: "854px", marginLeft: "402px", height: "400px", position: "absolute", top: "1083px" }} />
                                    <div class="about_offer_text" style={{ color: "white" }}>
                                        <h3>Enjoy <span style={{ color: "#8b3eea" }}>20%</span> discount</h3>
                                        <h2>Thailand couple tour</h2>
                                        <a href="tour-search.html" >Find tours</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>

            {/* <section id="cta_area" style={{backgroundColor:"#f3f6fd"}}>
        <div class="COntainer">
            <div class="row align-items-center">
                <div class="col-lg-7">
                    <div class="cta_left">
                        <div class="cta_icon">
                            <img src="https://andit.co/projects/html/and-tour/demo/assets/img/common/email.png" alt="icon"style={{width: "85px"}}/>
                        </div>
                        <div class="cta_content" style={{marginLeft: "20px"}}>
                            <h4>Get the latest news and offers</h4>
                            <h2>Subscribe to our newsletter</h2>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="cat_form">
                        <form id="cta_form_wrappper">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Enter your mail address"/><button class="btn btn_theme btn_md" type="button"style={{backgroundColor:"#8b3eea"}}>Subscribe</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>




 */}



<div >
     
</div>








        </div>
    )
}

export default About