import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { logout, userLogin } from '../redux/UserSlice';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AiFillFacebook } from "react-icons/ai";
import {AiFillTwitterSquare } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
function Connexion() {
    const [login, setlogin] = useState({

        email:"",
        password:""
      });
      const dispatch=useDispatch();
      const isAuth=localStorage.getItem("token");
      let navigate= useNavigate();
      const user = useSelector((state) => state.user?.user);
     
  return (
    <div>
     <div className="Appa">
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
                
                    <div className="Na">

               
                    <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="common_bannner_text">
                        <h2>Hotel search result</h2>
                        <ul style={{listStyle:"none"}}>
                            <li><a href="index.html" style={{textDecoration:"none", color:"white"}}>Home</a></li>
                            <li style={{marginLeft:"20px"}}><span ><i class="fas fa-circle"></i></span> Connexion</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
                    </div>
                </ul>

            </div> 
            
            <forme  onSubmit={(e)=>e.preventDefault()} action="/action_page.php" >
        <div className="container2" >
     <h1>Login</h1> 
    <hr />
    <label htmlFor="email" style={{ paddingLeft:"10px"}}>
      <b>Email</b>
    </label>
    <input type="text" placeholder="Enter Email" name="email" required="" onChange={(e)=>setlogin({...login, email:e.target.value})}/>
    <label htmlFor="psw" style={{ paddingLeft:"10px"}}>
      <b>Password</b>
    </label>
    <input
      type="password"
      placeholder="Enter Password"
      name="psw"
      required="" onChange={(e)=>setlogin({...login, password:e.target.value})}
    />

    <div className="clearfix" style={{ display: "flex",flexDirection: "column", textAlign:"center"}}>
      {/* <button type="button" className="cancelbtn">
        Cancel
      </button> */}
      <button className="signupbtn"  style={{ marginLeft:"100px"}} onClick={()=>{dispatch(userLogin(login));
      
      setTimeout(() => {dispatch(userLogin(login));
        if (isAuth) {navigate("/profil")}
    }, 1000);
    setTimeout(() => { window.location.reload();},1000);}} >
      Login
      </button>
      <h5 style={{fontSize:"12px", paddingLeft:"10px"}}>You already have account<Link to="/register">Register now</Link></h5>
    </div>
  </div>
</forme>


    </div>
  )
}

export default Connexion