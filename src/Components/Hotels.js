import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
// import  { useState } from 'react';
import CardHotels from './CardHotels';
import { useDispatch, useSelector } from 'react-redux';
import { gethotel } from '../redux/HotelSlice';
import { logout } from '../redux/UserSlice';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
function Hotels({ ping, setping }) {
    const [text, settext] = useState("")
    const hotels = useSelector((state) => state.hotel?.hotels);
    let navigate = useNavigate();
    const user = useSelector((state) => state.user?.user);

    // const sortedone = users;
    const dispatch = useDispatch();
    console.log(Hotels);
    useEffect(() => {
        dispatch(gethotel())
    }, [])

    return (

        <div>

            <div className="Appa2">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6" >
                            <ul className="topbar-list" style={{ listStyle: "none", textDecoration: "none", color: "white", justifyContent: "space-around" }}>
                                <li>
                                    <AiFillFacebook style={{ width: "20px", margin: "2px", color: "white", fontSize: "30px" }} />

                                    <AiFillTwitterSquare style={{ width: "20px", margin: "2px", color: "white", fontSize: "30px" }} />
                                    <AiFillInstagram style={{ width: "20px", margin: "2px", color: "white", fontSize: "30px" }} />
                                    < AiFillLinkedin style={{ width: "20px", margin: "2px", color: "white", fontSize: "30px" }} />
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


                    <div className="Na">


                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="common_bannner_text">
                                        <h2>Hotel search result</h2>
                                        <ul style={{ listStyle: "none", fontSize:"30px"  }}>
                                            <li><a href="index.html" style={{ textDecoration: "none", color: "white" }}>Home</a></li>
                                            <li style={{ marginLeft: "20px" }}><span ><i class="fas fa-circle"></i></span> Hotel</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ul>

            </div>

            <div className="ALL">
                <h2>38 hotel found</h2> <hr style={{ color: "#8b3eea", height: "5px", width: "269px", marginLeft: "500px" }} /></div>

            <div class="RowE">

                <div class="col-md-3 col-12">
                    <div class="form-group validator1">
                        <div class="destination position-relative">
                            <label class="label-pos position-sm"> Votre Destination </label>

                            <Form.Control size="lg" type="text" placeholder="entrer non de ville " onChange={(e) => settext(e.target.value)} a style={{ width: "185px" }} />

                        </div>

                        <small class="help-block" data-fv-validator="notEmpty" data-fv-for="locality" data-fv-result="NOT_VALIDATED" style={{ display: "none" }}>Veuillez remplir ce champs</small></div>
                </div>
                <div class="col-md col-6" style={{ width: "230px" }}>
                    <div class="position-relative date-input ">
                        <div class="form-group">
                            <label class="label-pos" for="arrDate">Votre Arrivée</label>
                            <Form.Control size="lg" type="date" placeholder="entrer la date d'arrivée" value="30/05/2023" />

                            <small class="help-block" data-fv-validator="notEmpty" data-fv-for="arrDate" data-fv-result="NOT_VALIDATED" style={{ display: "none" }}>Veuillez remplir ce champs</small></div>
                    </div>
                </div>
                <div class="col-md col-6" style={{ width: "230px" }}>
                    <div class="position-relative date-input ">
                        <div class="form-group">
                            <label class="label-pos" for="depDate">Votre Départ</label>
                            <Form.Control size="lg" type="date" placeholder="entrer la date d'arrivée" value="31/05/2023" />
                            {/* <input type="text" id="depDate" name="depDate" class="form-control depDate" readonly="" value="31/05/2023" data-fv-field="depDate" /> */}
                            <small class="help-block" data-fv-validator="notEmpty" data-fv-for="depDate" data-fv-result="NOT_VALIDATED" style={{ display: "none" }}>Veuillez remplir ce champs</small></div>
                    </div>
                </div>
                <div class="col-md-1 col-3 d-none  d-sm-block">
                    <div class="form-group">
                        <div class=" position-relative except">
                            <label class="label-pos"> Nuitées</label>
                            <input type="text" class="form-control bg-white border-left-0 except nights-count" name="nights" id="nights" disabled="" placeholder="1 nuit" autocomplete="off" value="" />
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-12">
                    <div class="position-relative users-p">
                        <div class="form-group" id="occupation">
                            <label class="label-pos"> Chambres et occupation </label>
                            <Form.Control size="lg" type="text" placeholder="1 chambre, 2 adultes" style={{ width: "185px" }} />

                        </div>
                    </div>
                </div>





            </div>
            <div className="box">
                {hotels
                    ?.filter((el) => el.adresse.toLowerCase().includes(text.toLowerCase())).map((el) => <CardHotels hotel={el} ping={ping} setping={setping} />)
                    .sort()}
            </div>
            {/* <section id="cta_area" style={{ backgroundColor: "#f3f6fd" }}>
                <div class="COntainer">
                    <div class="row align-items-center">
                        <div class="col-lg-7">
                            <div class="cta_left">
                                <div class="cta_icon">
                                    <img src="https://andit.co/projects/html/and-tour/demo/assets/img/common/email.png" alt="icon" style={{ width: "85px" }} />
                                </div>
                                <div class="cta_content" style={{ marginLeft: "20px" }}>
                                    <h4>Get the latest news and offers</h4>
                                    <h2>Subscribe to our newsletter</h2>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="cat_form">
                                <form id="cta_form_wrappper">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Enter your mail address" /><button class="btn btn_theme btn_md" type="button" style={{ backgroundColor: "#8b3eea", width: "107px", height: "54px", position: "absolute", left: "400px", top: "5px" }}>Subscribe</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}


        </div>
    )
}

export default Hotels;