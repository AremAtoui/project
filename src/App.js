import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Hotels from './Components/Hotels';
import About from './Components/About';
import Connexion from './Components/Connexion';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getUser, userCurrent } from './redux/UserSlice';
import PrivateRoute from './Routes/PrivateRoute';
import Profil from './Components/Profil';
import Dashboard from './Components/Dashboard';
import Trailer from './Components/Trailer';
import { gethotel } from './redux/HotelSlice';
import { getreservation } from './redux/ReservationSlice';



function App() {
    const isAuth = localStorage.getItem("token");
    const dispatch = useDispatch();

    const [ping, setping] = useState("");
    useEffect(() => {

        if (isAuth) {
            dispatch(userCurrent());

        }
        dispatch(gethotel());
        dispatch(getUser())
        dispatch(getreservation())
        // dispatch( userCurrent())
    }, [ping])

    const hotels = useSelector((state) => state.hotel?.hotels);
    const users = useSelector((state) => state.user?.users);
    const reservation=useSelector((state) => state.reservation?.reservation);
    
    // const users = useSelector((state) => state.user?.users);
    return (
        <div>






            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Hotels" element={<Hotels />} />
                <Route path="/About" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/Connexion" element={<Connexion />} />
                <Route path="/dashboard" element={<Dashboard ping={ping} setping={setping} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/profil" element={<Profil />} />
                </Route>{" "}

                <Route path="/trailer/:name" element={<Trailer hotels={hotels} />} />
            </Routes>

            <section id="cta_area" style={{ backgroundColor: "#f3f6fd", height: "200px",     marginTop: "360px" }}>
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
                        <div class="col-lg-9">
                            <div class="cat_form">
                                <form id="cta_form_wrappper">
                                    <div class="input-group" style={{ postion: "absolute", top: "", left: "660px" }}>
                                        <input type="text" class="form-control" placeholder="Enter your mail address" /><button class="btn btn_theme btn_md" type="button" style={{
                                            backgroundColor: "#8b3eea", width: "107px", height: "54px",
                                            position: "absolute",
                                            left: "395px",
                                            top: "6px"
                                        }}>Subscribe</button> </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer id="footer_area">
                <div class="containera">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="footer_heading_area">
                                <h5>Need any help?</h5>
                            </div>
                            <div class="footer_first_area">
                                <div class="footer_inquery_area">
                                    <h5>Call 24/7 for any help</h5>
                                    <h3> <a href="tel:+00-123-456-789">+00 123 456 789</a></h3>
                                </div>
                                <div class="footer_inquery_area">
                                    <h5>Mail to our support team</h5>
                                    <h3> <a href="mailto:support@domain.com">support@domain.com</a></h3>
                                </div>
                                <div class="footer_inquery_area">
                                    <h5>Follow us on</h5>
                                    <ul class="soical_icon_footer" style={{ listStyle: "none", textDecoration: "none" }} >
                                        <li><a href="#!"><i class="fab fa-facebook"></i></a></li>
                                        <li><a href="#!"><i class="fab fa-twitter-square"></i></a></li>
                                        <li><a href="#!"><i class="fab fa-instagram"></i></a></li>
                                        <li><a href="#!"><i class="fab fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-2 offset-lg-1 col-md-6 col-sm-6 col-12">
                            <div class="footer_heading_area">
                                <h5>Company</h5>
                            </div>
                            <div class="footer_link_area">
                                <ul style={{ color: "black", textDecoration: "none" }}>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="testimonials.html">Testimonials</a></li>
                                    <li><a href="faqs.html">Rewards</a></li>
                                    <li><a href="terms-service.html">Work with Us</a></li>
                                    <li><a href="tour-guides.html">Meet the Team </a></li>
                                    <li><a href="news.html">Blog</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-6 col-12">
                            <div class="footer_heading_area">
                                <h5>Support</h5>
                            </div>
                            <div class="footer_link_area">
                                <ul>
                                    <li><a href="dashboard.html">Account</a></li>
                                    <li><a href="faq.html">Faq</a></li>
                                    <li><a href="testimonials.html">Legal</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                    <li><a href="top-destinations.html"> Affiliate Program</a></li>
                                    <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-6 col-12">
                            <div class="footer_heading_area">
                                <h5>Other Services</h5>
                            </div>
                            <div class="footer_link_area" style={{ width: "329px", color: "white", textDecoration: "none" }}>
                                <ul style={{ color: "white" }}>
                                    <li><a href="top-destinations-details.html">Community program</a></li>
                                    <li><a href="top-destinations-details.html">Investor Relations</a></li>
                                    <li><a href="flight-search-result.html">Rewards Program</a></li>
                                    <li><a href="room-booking.html">PointsPLUS</a></li>
                                    <li><a href="testimonials.html">Partners</a></li>
                                    <li><a href="hotel-search.html">List My Hotel</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-4 col-sm-6 col-12">
                            <div class="footer_heading_area">
                                <h5>Top cities</h5>
                            </div>
                            <div class="footer_link_area">
                                <ul>
                                    <li><a href="room-details.html">Chicago</a></li>
                                    <li><a href="hotel-details.html">New York</a></li>
                                    <li><a href="hotel-booking.html">San Francisco</a></li>
                                    <li><a href="tour-search.html">California</a></li>
                                    <li><a href="tour-booking.html">Ohio </a></li>
                                    <li><a href="tour-guides.html">Alaska</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>



        </div>

    );
}


export default App;
