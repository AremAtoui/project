import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom'
import { addreservation } from '../redux/ReservationSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import AddRservation from './AddReservation';
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
function Trailer({ hotels }) {
    const params = useParams();
    const hotel1 = hotels?.filter((el) => el?.name === params.name)[0];
    const dispatch = useDispatch();
    const [newreservation, setnewreservation] = useState({
        User: "soufien ",
        nameHotel: "Zefi resort and spa",
        dateArrive: "28/06/2023",
        dateSortie: "06/07/2023",
        price: "1900£"
    })

    return (
        <>
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
                        <div className="col-lg-6 col-md-6">
                            <ul type="none" className="topbar-others-options" style={{ listStyle: "none", justifyContent: "space-around" }}>


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

                    <img src="https://andit.co/projects/html/and-tour/demo/assets/img/logo_black.png" style={{ width: "210px" }} />

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
                    <li href="#" className="nav-link">
                        <i className="bx bx-conversation" />
                        <span className="mx-2"><Link style={{ textDecoration: "none", color: "white", fontFamily: "Poppins, sans-serif" }} to="/connexion">Connexion</Link></span>
                    </li>
                    <li href="#" className="nav-link">
                        <i className="bx bx-conversation" />
                        <span className="mx-2"><Link style={{ textDecoration: "none", color: "white", fontFamily: "Poppins, sans-serif" }} to="/dashboard">Dashboard</Link></span>
                    </li>

                    <div className="Na">


                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="common_bannner_text">
                                        <h2>Hotel details</h2>
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
            <div class="tour_details_top_bottom">
                <div class="toru_details_top_bottom_item">
                    <div class="tour_details_top_bottom_icon">
                        <img src="https://andit.co/projects/html/and-tour/demo/assets/img/icon/ac.png" alt="icon" />
                    </div>
                    <div class="tour_details_top_bottom_text">
                        <p>Air condition</p>
                    </div>
                </div>
                <div class="toru_details_top_bottom_item">
                    <div class="tour_details_top_bottom_icon">
                        <img src="https://andit.co/projects/html/and-tour/demo/assets/img/icon/tv.png" alt="icon" />
                    </div>
                    <div class="tour_details_top_bottom_text">
                        <p>Flat television</p>
                    </div>
                </div>
                <div class="toru_details_top_bottom_item">
                    <div class="tour_details_top_bottom_icon">
                        <img src="https://andit.co/projects/html/and-tour/demo/assets/img/icon/gym.png" alt="icon" />
                    </div>
                    <div class="tour_details_top_bottom_text">
                        <p>Fitness center</p>
                    </div>
                </div>
                <div class="toru_details_top_bottom_item">
                    <div class="tour_details_top_bottom_icon">
                        <img src="https://andit.co/projects/html/and-tour/demo/assets/img/icon/wifi.png" alt="icon" />
                    </div>
                    <div class="tour_details_top_bottom_text">
                        <p>Free Wi-fi</p>
                    </div>
                </div>
            </div>
            <div className="ALL" style={{ marginLeft: "158px" }}>
                <img src={hotel1?.image} style={{ width: " 600px", borderRadius: "15px", height: "300px" }} />
                {/* <h4>{hotel1?.name}</h4>
            <p>{hotel1?.adresse}</p>
            <p>{hotel1?.description}</p>
            <p>{hotel1?.price}</p> style={{ width: " 50px",MaxWidth:"50px", height:"50px", maxHeight:"50px" , borderRadius: "15px", marginTop: "7px" }} */}
                <div className="sOF" >
                    {hotel1?.images.map((el) => <img src={el} />)}
                </div>
                <div className="AA">
                    <div><Card className="Al">
                        <Card.Body>
                            <div class="tour_detail_right_sidebar">
                                <div class="tour_details_right_boxed">
                                    <div class="tour_details_right_box_heading">
                                        <h3>Price</h3>
                                    </div>
                                    <div class="tour_package_bar_price">
                                        <h6><del>$ 35,500</del></h6>
                                        <h3>$ 30,500 <sub>/Per serson</sub> </h3>
                                    </div>

                                    <div class="tour_package_details_bar_list">
                                        <h5>Hotel facilities<hr /></h5>
                                        <div class="tour_package_details_bar_list first_child_padding_none" style={{ color: "#818090" }}>
                                            <ul style={{ display: "flex", flexDirection: "column" }}>
                                                <li><i class="fas fa-circle"></i>Buffet breakfast as per the Itinerary</li>
                                                <li><i class="fas fa-circle"></i>Visit eight villages showcasing Polynesian
                                                    culture
                                                </li>
                                                <li><i class="fas fa-circle"></i>Complimentary Camel safari, Bonfire,</li>
                                                <li><i class="fas fa-circle"></i>All toll tax, parking, fuel, and driver
                                                    allowances
                                                </li>
                                                <li><i class="fas fa-circle"></i>Comfortable and hygienic vehicle</li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card></div>

                    <div><Card className="Aaa" >
                        <Card.Body>
                            <div class="tour_detail_right_sidebar">
                                <div class="tour_details_right_boxed">
                                    <div class="tour_details_right_box_heading">
                                        <h3>Why choose us <hr /></h3>
                                    </div>

                                    <div class="tour_package_details_bar_list first_child_padding_none" style={{ color: "#818090" }}>
                                        <ul style={{ display: "flex", flexDirection: "column" }}>
                                            <li><i class="fas fa-circle"></i>Buffet breakfast as per the Itinerary</li>
                                            <li><i class="fas fa-circle"></i>Visit eight villages showcasing Polynesian
                                                culture
                                            </li>
                                            <li><i class="fas fa-circle"></i>Complimentary Camel safari, Bonfire,</li>
                                            <li><i class="fas fa-circle"></i>All toll tax, parking, fuel, and driver
                                                allowances
                                            </li>
                                            <li><i class="fas fa-circle"></i>Comfortable and hygienic vehicle</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card></div>
                </div>


                <div class="tour_details_boxed" style={{ width: "600px" }}>
                    <h3 class="heading_theme">Overview <hr /></h3>
                    <div class="tour_details_boxed_inner" style={{ color: "#818090" }} >
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                            eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                            takimata sanctus est.
                        </p>
                        <p>
                            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
                        </p>
                        <ul style={{ display: "flex", flexDirection: "column" }}>
                            <li><i class="fas fa-circle"></i>Buffet breakfast as per the Itinerary</li>
                            <li><i class="fas fa-circle"></i>Visit eight villages showcasing Polynesian culture
                            </li>
                            <li><i class="fas fa-circle"></i>Complimentary Camel safari, Bonfire, and Cultural
                                Dance at Camp</li>
                            <li><i class="fas fa-circle"></i>All toll tax, parking, fuel, and driver allowances
                            </li>
                            <li><i class="fas fa-circle"></i>Comfortable and hygienic vehicle (SUV/Sedan) for
                                sightseeing on all days as per the itinerary.</li>
                        </ul>
                    </div>
                </div>

                <div class="tour_details_boxed">
                    <h3 class="heading_theme">Select your room</h3>
                    <div class="room_select_area">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Book</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Enquiry</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div class="room_booking_area">
                                    <div class="tour_search">
                                        <forme action="!#">
                                            <div class="Aaaa">
                                                <div class="col-lg-8 col-md-6 col-sm-12 col-12">
                                                    <div class="form_search_date">
                                                        <div class="flight_Search_boxed date_flex_area">
                                                            <div class="Journey_date">
                                                                <p>Check In date</p>
                                                                <input type="date" value="2022-05-03" />
                                                                <span>Thursday</span>
                                                            </div>
                                                            <div class="Journey_date">
                                                                <p>Check Out date</p>
                                                                <input type="date" value="2022-05-05" />
                                                                <span>Thursday</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-5 col-md-6 col-sm-12 col-12"
                                                    style={{
                                                        position: "absolute",
                                                        top: "1970px",
                                                        left: "700px",
                                                        borderRadius: "14px", width: "142px"
                                                    }}>

                                                    <div class="flight_Search_boxed dropdown_passenger_area">
                                                        <p>Guests</p>
                                                        <div class="dropdown">
                                                            <button class="dropdown-toggle" data-toggle="dropdown" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                                1 Guests
                                                            </button>

                                                        </div>
                                                        <span>Adult</span>

                                                    </div>

                                                </div>
                                                <div class="col-lg-5 col-md-6 col-sm-12 col-12"
                                                    style={{
                                                        position: "absolute",
                                                        top: "1970px",
                                                        left: "900px",
                                                        borderRadius: "14px", width: "142px"
                                                    }}>

                                                    <AddRservation hotel1={hotel1} />
                                                </div>

                                            </div>

                                        </forme>

                                    </div>
                                    <div class="room_book_item">
                                        <div class="room_book_img">
                                            <img src="https://andit.co/projects/html/and-tour/demo/assets/img/hotel/room-1.png" alt="img" />
                                        </div>
                                        <div class="room_booking_right_side">
                                            <div class="room_booking_heading" style={{ margin: "15px" }}>
                                                <h5><a href="room-booking.html" style={{ textDecoration: "none", color: "black" }}>Culpa cupidatat laborum eiusmod
                                                    amet</a></h5>
                                                <div class="room_fasa_area">
                                                    <ul style={{ listStyle: "none" }}>
                                                        <li><img src="https://andit.co/projects/html/and-tour/demo/assets/img/icon/ac.png" alt="icon" />Air
                                                            condition</li>
                                                        <li style={{ marginLeft: "10px" }}><img src="https://andit.co/projects/html/and-tour/demo/assets/img/icon/gym.png" alt="icon" />Fitness
                                                            center</li>
                                                    </ul>
                                                    <ul style={{ listStyle: "none" }}>
                                                        <li><img src="https://andit.co/projects/html/and-tour/demo/assets/img/icon/tv.png" alt="icon" />Flat
                                                            television</li>
                                                        <li style={{ marginLeft: "10px" }}><img src="https://andit.co/projects/html/and-tour/demo/assets/img/icon/wifi.png" alt="icon" />Free
                                                            Wi-fi</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="room_person_select" style={{
                                                width: "100px",
                                                position: "absolute",
                                                top: "2440px",
                                                left: "890px"
                                            }}>
                                                <h3>$1200.00/ <sub>Per night</sub></h3>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected="">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="room_book_item">
                                        <div class="room_book_img">
                                            <img src="https://andit.co/projects/html/and-tour/demo/assets/img/hotel/room-2.png" alt="img" />
                                        </div>
                                        <div class="room_booking_right_side">
                                            <div class="room_booking_heading" style={{ margin: "15px" }}>
                                                <h5><a href="room-booking.html" style={{ textDecoration: "none", color: "black" }}>Aliquip sit nisi est laboris
                                                    eiusmod</a></h5>
                                                <div class="room_fasa_area">
                                                    <ul style={{ listStyle: "none" }}>
                                                        <li><img src="https://andit.co/projects/html/and-tour/demo/assets/img/icon/ac.png" alt="icon" />Air
                                                            condition</li>
                                                        <li style={{ marginLeft: "10px" }}><img src="https://andit.co/projects/html/and-tour/demo/assets/img/icon/gym.png" alt="icon" />Fitness
                                                            center</li>
                                                    </ul>
                                                    <ul style={{ listStyle: "none" }}>
                                                        <li><img src="https://andit.co/projects/html/and-tour/demo/assets/img/icon/tv.png" alt="icon" />Flat
                                                            television</li>
                                                        <li style={{ marginLeft: "10px" }}><img src="https://andit.co/projects/html/and-tour/demo/assets/img/icon/wifi.png" alt="icon" />Free
                                                            Wi-fi</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="room_person_select1"
                                                style={{
                                                    width: "100px",
                                                    position: "absolute",
                                                    top: " 2120px",
                                                    left: "890px"
                                                }}>
                                                <h3>$1200.00/ <sub>Per night</sub></h3>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected="">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="room_book_item">
                                        <div class="room_book_img">
                                            <img src="https://andit.co/projects/html/and-tour/demo/assets/img/hotel/room-3.png" alt="img" />
                                        </div>
                                        <div class="room_booking_right_side">
                                            <div class="room_booking_heading" style={{ margin: "15px" }}>
                                                <h5><a href="room-booking.html" style={{ textDecoration: "none", color: "black" }}>Ea sint elit duis nostrud
                                                    consequat</a></h5>
                                                <div class="room_fasa_area">
                                                    <ul style={{ listStyle: "none" }}>
                                                        <li><img src="https://andit.co/projects/html/and-tour/demo/assets/img/icon/ac.png" alt="icon" />Air
                                                            condition</li>
                                                        <li style={{ marginLeft: "10px" }}><img src="https://andit.co/projects/html/and-tour/demo/assets/img/icon/gym.png" alt="icon" />Fitness
                                                            center</li>
                                                    </ul>
                                                    <ul style={{ listStyle: "none" }}>
                                                        <li><img src="https://andit.co/projects/html/and-tour/demo/assets/img/icon/tv.png" alt="icon" />Flat
                                                            television</li>
                                                        <li style={{ marginLeft: "10px" }}><img src="https://andit.co/projects/html/and-tour/demo/assets/img/icon/wifi.png" alt="icon" />Free
                                                            Wi-fi</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="room_person_select2"
                                                style={{
                                                    width: "100px",
                                                    position: "absolute",
                                                    top: "2280px",
                                                    left: "890px"
                                                }}>
                                                <h3>$1200.00/ <sub>Per night</sub></h3>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected="">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div class="write_review_inner_boxed">
                                    <form action="!#" id="news_comment_form">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="form-froup">
                                                    <input type="text" class="form-control bg_input" placeholder="Enter full name" />
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="form-froup">
                                                    <input type="text" class="form-control bg_input" placeholder="Enter email address" />
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="form-froup">
                                                    <textarea rows="6" placeholder="Write your comments" class="form-control bg_input"></textarea>
                                                </div>
                                                <div class="comment_form_submit">
                                                    <button class="btn btn_theme btn_md">Enquiry</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col-lg-8">
                    <div class="write_your_review_wrapper">
                        <h3 class="heading_theme">Write your review <hr /></h3>
                        <div class="write_review_inner_boxed">
                            <forma action="!#" id="news_comment_form">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-froup">
                                            <input type="text" class="form-control bg_input" placeholder="Enter full name" />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-froup">
                                            <input type="text" class="form-control bg_input" placeholder="Enter email address" />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-froup">
                                            <textarea rows="6" placeholder="Write your comments" class="form-control bg_input"></textarea>
                                        </div>
                                        <div class="comment_form_submit">
                                            <button class="btn btn_theme btn_md">Post comment</button>
                                        </div>
                                    </div>
                                </div>
                            </forma>
                        </div>
                    </div>
                </div>



                <div className="AR">
                    <div class="col-lg-6 col-md-6" style={{ margin: "20px" }}>
                        <div class="all_review_box">
                            <div class="all_review_date_area">
                                <div class="all_review_date">
                                    <h5>08 Dec, 2021</h5>
                                </div>
                                <div class="all_review_star">
                                    <h5>Excellent</h5>
                                    <div class="review_star_all">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="all_review_text">
                                <img src="https://andit.co/projects/html/and-tour/demo/assets/img/review/review1.png"
                                    style={{
                                        position: "absolute",
                                        top: "-41px",
                                        left: "246px"
                                    }}
                                    alt="img" />
                                <h4>Manresh Chandra</h4>
                                <p>" Loved the overall tour for all 6 days covering jaipur jodhpur and jaisalmer. worth ur
                                    money for sure. thanks. Driver was very good and polite and safe driving for all 6 days.
                                    on time pickup and drop overall. Thanks for it. "</p>
                            </div>

                        </div>
                    </div>

                    <div class="col-lg-6 col-md-6" style={{ margin: "20px" }}>
                        <div class="all_review_box">
                            <div class="all_review_date_area">
                                <div class="all_review_date">
                                    <h5>08 Dec, 2021</h5>
                                </div>
                                <div class="all_review_star">
                                    <h5>Excellent</h5>
                                    <div class="review_star_all">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="all_review_text">
                                <img src="https://andit.co/projects/html/and-tour/demo/assets/img/review/review2.png"
                                    style={{
                                        position: "absolute",
                                        top: "-41px",
                                        left: "246px"
                                    }} alt="img" />
                                <h4>Michel falak</h4>
                                <p>" Loved the overall tour for all 6 days covering jaipur jodhpur and jaisalmer. worth ur
                                    money for sure. thanks. Driver was very good and polite and safe driving for all 6 days.
                                    on time pickup and drop overall. Thanks for it. "</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-6" style={{ margin: "20px" }}>
                        <div class="all_review_box">
                            <div class="all_review_date_area">
                                <div class="all_review_date">
                                    <h5>08 Dec, 2021</h5>
                                </div>
                                <div class="all_review_star">
                                    <h5>Excellent</h5>
                                    <div class="review_star_all">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="all_review_text">
                                <img src="https://andit.co/projects/html/and-tour/demo/assets/img/review/review3.png"
                                    style={{
                                        position: "absolute",
                                        top: "-41px",
                                        left: "246px"
                                    }}
                                    alt="img" />
                                <h4>Chester dals</h4>
                                <p>" Loved the overall tour for all 6 days covering jaipur jodhpur and jaisalmer. worth ur
                                    money for sure. thanks. Driver was very good and polite and safe driving for all 6 days.
                                    on time pickup and drop overall. Thanks for it. "</p>
                            </div>

                        </div>

                    </div>
                </div>



















            </div>
        </>

    )
}

export default Trailer;