import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { userRegister } from '../redux/UserSlice';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [register, setregister] = useState({
    name: "",
    lastName: "",
    email: "",
    password: ""
  });
  const dispatch = useDispatch();
  return (
    <div className="SOF">
      <div className="bad">
        <form onSubmit={(e) => e.preventDefault()} action="/action_page.php" style={{ border: "1px solid #ccc" }}>
          <div className="container2" style={{ width: "500px" }}>
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />
            <label htmlFor="name" style={{ paddingLeft: "10px" }}>
              <b>Name</b>
            </label>
            <input type="text" placeholder="Enter name" name="name" required="" onChange={(e) => setregister({ ...register, name: e.target.value })} />
            <label htmlFor="lastname" style={{ paddingLeft: "10px" }}>
              <b>Lastname</b>
            </label>
            <input type="text" placeholder="Enter lastname" name="lastname" required="" onChange={(e) => setregister({ ...register, lastName: e.target.value })} />
            <label htmlFor="email" style={{ paddingLeft: "10px" }}>
              <b>Email</b>
            </label>
            <input type="text" placeholder="Enter Email" name="email" required="" onChange={(e) => setregister({ ...register, email: e.target.value })} />
            <label htmlFor="psw" style={{ paddingLeft: "10px" }}>
              <b>Password</b>
            </label>
            <input type="password" placeholder="Enter Password" name="psw" required="" onChange={(e) => setregister({ ...register, password: e.target.value })} />
            {/* <label htmlFor="psw-repeat">
      <b>Repeat Password</b>
    </label>
    <input
      type="password"
      placeholder="Repeat Password"
      name="psw-repeat"
      required=""
    /> */}
            {/* <label>
      <input
        type="checkbox"
        defaultChecked="checked"
        name="remember"
        style={{ marginBottom: 15 }}
      />{" "}
      Remember me
    </label>
    <p>
      By creating an account you agree to our{" "}
      <a
        href="file:///media/fuse/drivefs-525daa482b0b219dcaeee7cc8e7ecf57/root/loging.html"
        style={{ color: "dodgerblue" }}
      >
        Terms &amp; Privacy
      </a>
      .
    </p> */}
            <div className="clearfix" style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
              {/* <button type="button" className="cancelbtn">
        Cancel
      </button> */}
              <button style={{ marginLeft: "100px" }} className="signupbtn" onClick={() => { dispatch(userRegister(register)); navigate("/") }}>
                Register
              </button>
              <h5 style={{ fontSize: "12px", paddingLeft: "10px" }}>You already have account<Link to="/connexion">sign in</Link></h5>
            </div>
          </div>
        </form>

      </div>




    </div>
  )
}

export default Register
