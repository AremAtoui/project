import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { useDispatch, useSelector } from 'react-redux';
import CardHotels from './CardHotels';
import AddHotel from './AddHotel';
import EditHotel from './EditHotel';
import { deletehotel } from '../redux/HotelSlice';
import { deleteUser, userRegister } from '../redux/UserSlice';
import EditUser from './EditUser';
import { deletereservation } from '../redux/ReservationSlice';
import { AiFillDelete } from "react-icons/ai";
import EditReservation from './EditReservation';
import { Button } from 'bootstrap';
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import Swal from 'sweetalert2';

function Dashboard({ ping, setping }) {
    const [text, settext] = useState("")
    const [statePayment, setStatePayment] = useState("payeé")
    const hotels = useSelector((state) => state.hotel?.hotels);
    const users = useSelector((state) => state.user?.users);
    const reservation = useSelector((state) => state.reservation?.reservation);




    const deletehotel = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    const deleteREservation = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }




























    console.log(users)
    const dispatch = useDispatch();
    return (
        <div>

            <div className="Appa4">
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
                                        <h2 style={{ width: "400px", fontSize:"30px" }}>Customer dashboard</h2>
                                        <ul style={{ listStyle: "none", fontSize:"30px" }}>
                                            <li><a href="index.html" style={{ textDecoration: "none", color: "white" }}>Home</a></li>
                                            <li style={{ marginLeft: "20px" }}><span ><i class="fas fa-circle"></i></span> dashboard</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ul>

            </div>
            <div className="Bot">
                <AddHotel ping={ping} setping={setping} />

            </div>

            {/* dashboard */}
            <div class="Class">
                <div class="col-lg-10">
                    <div class="dashboard_sidebar" style={{ width: "300px" }}>
                        <div class="dashboard_sidebar_user">
                            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/339088256_567185958843262_1597734654359871899_n.jpg?stp=dst-jpg_p206x206&_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=aee45a&_nc_ohc=l9v8ZUY-UkMAX-8BDlB&_nc_oc=AQnBxIkzrE--091Cq2ALNIXMBu0nkqcXTPqJOR9d7TWmk3hR-98h3k3uaNxCyOMsg6OBSgavBFeRrQFe0aK9VGvH&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRBL5mdYt6YdPhFEV6c2nuau1s9BSz8y7R_YFhOTZrmLw&oe=6499B83D" style={{
                                wit
                                    : "50%", borderRadius: "50%"
                            }} alt="img" />
                            <h3>Arem Atoui</h3>
                            <p><a href="tel:+00-123-456-789">+216 27793044</a></p>
                            <p><a href="mailto:sherlyn@domain.com">arem.atoui@gmail.com</a></p>
                        </div>

                        <div class="dashboard_menu_area">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Row>
                                    <Col sm={3}>
                                        <Nav variant="pills" className="flex-columne">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Hotels</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Users</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Reservation</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="four">My-Profile</Nav.Link>
                                            </Nav.Item>

                                        </Nav>
                                    </Col>
                                    <Col sm={9} style={{
                                        marginLeft: "334px",
                                        marginTop: "-551px"

                                    }}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="first">
                                                <div class="table-responsive-lg table_common_area">
                                                    <table class="table">
                                                        <thead>
                                                            <tr style={{ color: "green", fontFamily: "serif" }}>
                                                                <th>Image</th>
                                                                <th>Name</th>
                                                                <th>Adresse</th>
                                                                <th>Description</th>
                                                                <th>Price</th>
                                                                {/* <th>Images</th> */}
                                                                <th></th>
                                                                <th></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            {hotels
                                                                ?.filter((el) => el.adresse.toLowerCase().includes(text.toLowerCase())).map((el) => <tr style={{ fontSize: "15px" }}>
                                                                    <td><img src={el.image} width="80" height="80" /></td>
                                                                    <td style={{ paddingLeft: "23px" }}>{el.name}</td>
                                                                    <td>{el.adresse}</td>
                                                                    <td>{el.description}</td>
                                                                    <td class="complete">{el.price}</td>
                                                                    <td></td>
                                                                    <td>
                                                                        <AiFillDelete style={{ fontSize: "40px" }} className="Btn" onClick={() => { dispatch(deletehotel(el._id)); deletehotel(); setping(!ping) }} /> </td>
                                                                    <td><EditHotel el={el} ping={ping} setping={setping} /></td>

                                                                </tr>)
                                                                .sort()}
                                                        </tbody>
                                                    </table>
                                                </div>


                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <div class="table-responsive-lg table_common_area">
                                                    <table class="table">
                                                        <thead>
                                                            <tr style={{ color: "green", fontFamily: "serif" }}>
                                                                <th>Image</th>
                                                                <th>Name</th>
                                                                <th>LastName</th>
                                                                <th>Email</th>

                                                                {/* <th>Images</th> */}
                                                                <th></th>
                                                                <th></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            {users
                                                                ?.map((el) =>
                                                                    <tr>
                                                                        <td><img src={el?.image} width="80" height="80" /></td>
                                                                        <td style={{ paddingLeft: "23px" }}>{el?.name}</td>
                                                                        <td>{el?.lastName}</td>
                                                                        <td>{el?.email}</td>
                                                                        <AiFillDelete style={{ fontSize: "40px" }} onClick={() => { dispatch(deleteUser(el._id)); setping(!ping) }}
                                                                        />
                                                                    </tr>)
                                                            }



                                                        </tbody>
                                                    </table>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="third">
                                                <div class="table-responsive-lg table_common_area">
                                                    <table class="table">
                                                        <thead>
                                                            <tr style={{ color: "green", fontFamily: "serif" }}>
                                                                <th>User</th>
                                                                <th>NameHotel</th>
                                                                <th>DateArrive</th>
                                                                <th>DateSortie</th>
                                                                <th>Price</th>

                                                                <th></th>
                                                                <th></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            {reservation?.filter(el => el.state == statePayment)?.map((el) => <tr style={{ fontSize: "15px" }}>
                                                                <td>{el.User} </td>
                                                                <td style={{ paddingLeft: "23px" }}>{el.nameHotel}</td>
                                                                <td>{el.dateArrive}</td>
                                                                <td>{el.dateSortie}</td>
                                                                <td class="complete">{el.price}</td>
                                                                <AiFillDelete style={{ fontSize: "40px" }} onClick={() => { dispatch(deletereservation(el._id)); deleteREservation(); setping(!ping) }} />


                                                            </tr>)}
                                                                 {/* .sort():null} */}
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div style={{ display: "flex", width: "300px" }}>
                                                    <button style={{ margin: "20px", color: "red", width: "300px", height: "60px", borderRadius: "12px" }} onClick={() => setStatePayment(" non payeé")}> non payeé</button>

                                                    <button style={{ margin: "20px", color: "green", width: "240px", height: "60px", borderRadius: "12px" }} onClick={() => setStatePayment("payeé")}> payeé</button></div>

                                                {/* {reservation?.map((el)=><EditReservation/>)} */}

                                            </Tab.Pane>
                                            <Tab.Pane eventKey="four">
                                                <div class="table-responsive-lg table_common_area">
                                                    <table class="table">
                                                        <thead>

                                                        </thead>
                                                        <tbody>
                                                            <div class="dashboard_common_table">
                                                                <h3>My Profile</h3>

                                                                <div class="profile_update_form">
                                                                    <form action="!#" id="profile_form_area">
                                                                        <div class="row">
                                                                            <div class="col-lg-6">
                                                                                <div class="form-group">
                                                                                    <label for="f-name">First name</label>
                                                                                    <input type="text" class="form-control" id="f-name" placeholder="Your Name" value="Arem" />
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-6">
                                                                                <div class="form-group">
                                                                                    <label for="l-name">Last name</label>
                                                                                    <input type="text" class="form-control" id="l-name" value="atoui" />
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-6">
                                                                                <div class="form-group">
                                                                                    <label for="mail-address">Email address</label>
                                                                                    <input type="text" class="form-control" id="mail-address" value="arem.atoui@isimg.tn" />
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-6">
                                                                                <div class="form-group">
                                                                                    <label for="mobil-number">Mobile number</label>
                                                                                    <input type="text" class="form-control" id="mobil-number" value="+216 27793044" />
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-6">
                                                                                <div class="form-group">
                                                                                    <label for="u-name">User name</label>
                                                                                    <input type="text" class="form-control" id="u-name" value="Arem" />
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-6">
                                                                                <div class="form-group change_password_field">
                                                                                    <label for="password">Password</label>
                                                                                    <input type="password" class="form-control" id="password" value="cdkdkdd" />
                                                                                    <p>Change password</p>
                                                                                </div>
                                                                            </div>
                                                                            <div class="change_password_input_boxed">
                                                                                <h3>Change password</h3>
                                                                                <div class="row">
                                                                                    <div class="col-lg-6">
                                                                                        <div class="form-group">
                                                                                            <input type="password" class="form-control" placeholder="Old Password" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-lg-6">
                                                                                        <div class="form-group">
                                                                                            <input type="password" class="form-control" placeholder="New Password" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>



                                                        </tbody>
                                                    </table>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>

                                    </Col>
                                </Row>
                            </Tab.Container>
                        </div>


                    </div>
                </div>

            </div>











        </div>
    )
}

export default Dashboard