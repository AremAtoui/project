import React from 'react'
import './home.css';
import { Link, useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch, useSelector } from 'react-redux';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { logout } from '../redux/UserSlice';
import { AiFillFacebook } from "react-icons/ai";
import {AiFillTwitterSquare } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
function Home() {
    const user = useSelector((state) => state.user?.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (

        <div >
            <div className="App">
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
                        <div className="col-lg-6 col-md-6">
                            <ul type="none" className="topbar-others-options" style={{ listStyle: "none", justifyContent: "space-around" }}>


                            </ul>
                        </div>
                        <hr style={{
                            color: "white",
                            backgroundColor: "white",
                            height: "1px", marginLeft: "75px"
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

            <div className="Containerr" style={{ with: "1000px" }}>
                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="heading_left_area">
                            <h2>
                                Go beyond your <span>imagination</span>
                            </h2>
                            <hr style={{ color: "#000000" }} />
                            <h5>Discover your ideal experience with us</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="imagination_boxed" >
                            <a href="top-destinations.html">
                                <img className="Naa" src="https://andit.co/projects/html/and-tour/demo/assets/img/imagination/imagination1.png" alt="img" />
                            </a>
                            <h3>
                                <a className="Lien" href="top-destinations.html" style={{
                                    fontSize: "22px", textAlign: "center",
                                    paddingLeft: "10px", paddingRight: "7px", textDecoration: "none", color: "white"
                                }}>
                                    7% Discount for all <span >Airlines</span>
                                </a>
                            </h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="imagination_boxed">
                            <a href="top-destinations.html">
                                <img className="Naa" src="https://andit.co/projects/html/and-tour/demo/assets/img/imagination/imagination2.png" alt="img" />
                            </a>
                            <h3>
                                <a className="Lien" href="#!" style={{
                                    fontSize: "22px", textAlign: "center",
                                    paddingLeft: "12px", paddingRight: "7px", textDecoration: "none", color: "white"
                                }}>
                                    Travel around<span style={{ paddingLeft: "7px" }}>the world</span>
                                </a>
                            </h3>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="imagination_boxed">
                            <a href="top-destinations.html">
                                <img className="Naa" src="https://andit.co/projects/html/and-tour/demo/assets/img/imagination/imagination3.png" alt="img" />
                            </a>
                            <h3>
                                <a className="Lien" href="top-destinations.html" style={{
                                    fontSize: "22px", textAlign: "center",
                                    paddingLeft: "17px", paddingRight: "7px", textDecoration: "none", color: "white"
                                }}>
                                    Luxury resorts<span style={{ paddingLeft: "7px" }}>top deals</span>
                                </a>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Img">
                <div class="container1">
                    <div class="row1" style={{ margin: "20px" }}>
                        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div class="offer_area_box d-none-phone img_animation">
                                <img src="https://andit.co/projects/html/and-tour/demo/assets/img/offer/offer1.png" alt="img" style={{
                                    width: "611px", height: "450px", maxWidth: "627px", maxHeight: "355px", marginLeft: "10px"

                                }} />
                                <div class="offer_area_content" style={{ position: "absolute", top: "1270px", width: "573px", color: "white", paddingLeft: "68px" }}>
                                    <h2>Special Offers</h2>
                                    <p>Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                                        accusam et justo duo dolores et ea rebum. Stet clita kasd dolor sit amet. Lorem ipsum
                                        dolor sit amet.</p>
                                    <a href="#!" class="btn btn_theme btn_md" style={{ backgroundColor: "#8b3eea", color: "white", width: "130px" }}>Holiday deals</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div class="offer_area_box img_animation" >
                                <img src="https://andit.co/projects/html/and-tour/demo/assets/img/offer/offer2.png" alt="img"
                                    style={{
                                        width: "354px", height: "456px", maxWidth: "300px", maxHeight: "355px"
                                    }} />
                                <div class="offer_area_content" style={{ position: "absolute", top: "1270px", width: "300px", color: "white", paddingLeft: "47px" }}>
                                    <h2>News letter</h2>
                                    <p>Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et.</p>
                                    <a href="#!" class="btn btn_theme btn_md" style={{ backgroundColor: "#8b3eea", color: "white", width: "130px" }}>Subscribe now</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div class="offer_area_box img_animation">
                                <img src="https://andit.co/projects/html/and-tour/demo/assets/img/offer/offer3.png" alt="img"
                                    style={{
                                        width: "354px", height: "456px", maxWidth: "300px", maxHeight: "355px"
                                    }} />
                                <div class="offer_area_content" style={{ position: "absolute", top: "1270px", width: "300px", color: "white", paddingLeft: "47px" }}>
                                    <h2>Travel tips</h2>
                                    <p>Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et.</p>
                                    <a href="#!" class="btn btn_theme btn_md" style={{ backgroundColor: "#8b3eea", color: "white", width: "81px" }}>Get tips</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* carousels */}
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://andit.co/projects/html/and-tour/demo/assets/img/news/news-two-3.png"
                        alt=""
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://andit.co/projects/html/and-tour/demo/assets/img/news/news-two-1.png"
                        alt=""
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://andit.co/projects/html/and-tour/demo/assets/img/news/news-two-2.png"
                        alt=""
                    />
                </Carousel.Item>
            </Carousel>

            <div className="ALL">
                <h2>Destinations for you</h2> <hr style={{ color: "#8b3eea", height: "5px", width: "269px", marginLeft: "515px" }} /></div>
            <div class="row2">
                <div class="col-lg-10 offset-lg-1">
                    <div class="theme_nav_tab" style={{ fontSize: "17px", width: "880px", padding: "35px" }}>
                        <nav class="theme_nav_tab_item" style={{ width: "750px" }}>
                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                <button class="nav-link1 active" id="nav-nepal-tab" data-bs-toggle="tab" data-bs-target="#nav-nepal" type="button" role="tab" aria-controls="nav-nepal" aria-selected="true" style={{ backgroundColor: "#8b3eea", color: "white", borderRadius: "4px 5px 5px 5px" }}>Nepal</button>
                                <button class="nav-link1" id="nav-malaysia-tab" data-bs-toggle="tab" data-bs-target="#nav-malaysia" type="button" role="tab" aria-controls="nav-malaysia" aria-selected="false">Malaysia</button>
                                <button class="nav-link1" id="nav-indonesia-tab" data-bs-toggle="tab" data-bs-target="#nav-indonesia" type="button" role="tab" aria-controls="nav-indonesia" aria-selected="false">Indonesia</button>
                                <button class="nav-link1" id="nav-turkey-tab" data-bs-toggle="tab" data-bs-target="#nav-turkey" type="button" role="tab" aria-controls="nav-turkey" aria-selected="false">Turkey</button>
                                <button class="nav-link1" id="nav-china-tab" data-bs-toggle="tab" data-bs-target="#nav-china" type="button" role="tab" aria-controls="nav-china" aria-selected="false">China</button>
                                <button class="nav-link1" id="nav-darjeeling-tab" data-bs-toggle="tab" data-bs-target="#nav-darjeeling" type="button" role="tab" aria-controls="nav-darjeeling" aria-selected="false">Darjeeling</button>
                                <button class="nav-link1" id="nav-italy-tab" data-bs-toggle="tab" data-bs-target="#nav-italy" type="button" role="tab" aria-controls="nav-italy" aria-selected="false" style={{ marginLeft: "121px" }}>Italy</button>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="Row-1" >
                                <div class="col-lg-1 col-md-6 col-sm-12 col-12">
                                    <div class="tab_destinations_boxed">
                                        <div class="tab_destinations_img">
                                            <a href="top-destinations.html"><img src="https://andit.co/projects/html/and-tour/demo/assets/img/destination/destination-small1.png" alt="img"/></a>
                                        </div>
                                        <div class="tab_destinations_conntent" >
                                            <h3 style={{    fontSize: "18px",
    textDecoration: "none"}}><a style={{ textDecoration: "none", color:"black"}} href="top-destinations.html">Everest trek to Base Camp</a></h3>
                                            <p>Price starts at <span>$105.00</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-1 col-md-6 col-sm-12 col-12">
                                    <div class="tab_destinations_boxed">
                                        <div class="tab_destinations_img">
                                            <a href="top-destinations.html"><img src="https://andit.co/projects/html/and-tour/demo/assets/img/destination/destination-small2.png" alt="img"/></a>
                                        </div>
                                        <div class="tab_destinations_conntent">
                                            <h3 style={{    fontSize: "18px",
    textDecoration: "none"}}><a  style={{ textDecoration: "none", color:"black"}}href="top-destinations.html">Kathmundu tour</a></h3>
                                            <p>Price starts at <span>$85.00</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-1 col-md-6 col-sm-12 col-12">
                                    <div class="tab_destinations_boxed">
                                        <div class="tab_destinations_img">
                                            <a href="top-destinations.html"><img src="https://andit.co/projects/html/and-tour/demo/assets/img/destination/destination-small3.png" alt="img"/></a>
                                        </div>
                                        <div class="tab_destinations_conntent">
                                            <h3 style={{    fontSize: "18px",
    textDecoration: "none"}}><a style={{ textDecoration: "none", color:"black"}} href="top-destinations.html">Beautiful pokhara</a></h3>
                                            <p>Price starts at <span>$100.00</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-1 col-md-6 col-sm-12 col-12">
                                    <div class="tab_destinations_boxed">
                                        <div class="tab_destinations_img">
                                            <a href="top-destinations.html"><img src="https://andit.co/projects/html/and-tour/demo/assets/img/destination/destination-small4.png" alt="img"/></a>
                                        </div>
                                        <div class="tab_destinations_conntent">
                                            <h3 style={{    fontSize: "18px",
    textDecoration: "none"}}><a style={{ textDecoration: "none", color:"black"}} href="top-destinations.html">Annapurna region</a></h3>
                                            <p>Price starts at <span>$75.00</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-1 col-md-6 col-sm-12 col-12">
                                    <div class="tab_destinations_boxed">
                                        <div class="tab_destinations_img">
                                            <a href="top-destinations.html"><img src="https://andit.co/projects/html/and-tour/demo/assets/img/destination/destination-small5.png" alt="img"/></a>
                                        </div>
                                        <div class="tab_destinations_conntent">
                                            <h3 style={{    fontSize: "18px",
    textDecoration: "none"}}><a style={{ textDecoration: "none", color:"black"}}href="top-destinations.html">Chitwan national park</a></h3>
                                            <p>Price starts at <span>$105.00</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-1 col-md-6 col-sm-12 col-12">
                                    <div class="tab_destinations_boxed">
                                        <div class="tab_destinations_img">
                                            <a href="top-destinations.html"><img src="https://andit.co/projects/html/and-tour/demo/assets/img/destination/destination-small6.png" alt="img"/></a>
                                        </div>
                                        <div class="tab_destinations_conntent">
                                            <h3 style={{  fontSize: "18px"}}><a style={{ textDecoration: "none", color:"black"}}href="top-destinations.html">Langtang region</a></h3>
                                            <p>Price starts at <span>$105.00</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

        </div>

    )
}

export default Home