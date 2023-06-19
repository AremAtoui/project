import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { logout } from '../redux/UserSlice';
import { AiFillFacebook } from "react-icons/ai";
import {AiFillTwitterSquare } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
function Contact() {
    const user = useSelector((state) => state.user?.user);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    return (
        <div >
            <div className="Appa1">
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
                            height: "1px",
                            marginLeft: "420px"
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

                    <div className="Na">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="common_bannner_text">
                                        <h2 style={{ marginLeft: "35px" }}>Contact Us</h2>
                                        <ul style={{ listStyle: "none", fontSize:"30px"  }}>
                                            <li><a href="index.html" style={{ textDecoration: "none", color: "white" }}>Home</a></li>
                                            <li style={{ marginLeft: "20px" }}><span ><i class="fas fa-circle"></i></span> Contact</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <h2 style={{ marginLeft: "200px" }}>About us</h2> */}
                    </div>
                </ul>

            </div>
<div style={{background:"#f1f1f1",marginTop: "-160px", height: "900px"}}>
            <div className="ALL">
                <h2>Contact with us</h2> <hr style={{ color: "#8b3eea", height: "5px", width: "269px", marginLeft: "480px" }} /></div>



            <div className="ALL">
                <h2>Leave us a message</h2> <hr style={{ color: "#8b3eea", height: "5px", width: "410px", marginLeft: "420px" }} /></div>







            <div class="contact_form">
                <form action="!#" id="contact_form_content">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="form-group" >
                                <input type="text" class="form-control bg_input" placeholder="First name*" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group">
                                <input type="text" class="form-control bg_input" placeholder="Last name*" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group">
                                <input type="text" class="form-control bg_input" placeholder="Email address (Optional)" />
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group">
                                <input type="text" class="form-control bg_input" placeholder="Mobile number*" />
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="form-group">
                                <textarea class="form-control bg_input" rows="5" placeholder="Message"></textarea>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="form-group">
                                <button type="button" class="btn btn_theme btn_md" style={{ backgroundColor: "#8b3eea", width: "128px" }}>Send message</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            </div>




        </div>
    )
}

export default Contact