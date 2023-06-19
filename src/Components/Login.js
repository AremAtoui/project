import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { userLogin } from '../redux/UserSlice';

function Login() {
  const [login, setlogin] = useState({

    email:"",
    password:""
  });
  const dispatch=useDispatch();
  const isAuth=localStorage.getItem("token");
  let navigate= useNavigate();
  return (
    <div className="SOF">
        <form  onSubmit={(e)=>e.preventDefault()} action="/action_page.php">
        <div className="container2" style={{width:"500px"}}>
     <h1>Login</h1> 
    {/* <p>Please fill in this form to create an account.</p> */} 
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
        if (isAuth) {navigate("/")}
    }, 1000);
    setTimeout(() => { window.location.reload();},1000);}} >
      Login
      </button>
      <h5 style={{fontSize:"12px", paddingLeft:"10px"}}>You already have account<Link to="/register">Register now</Link></h5>
    </div>
  </div>
</form>

  </div>
  )
}

export default Login
