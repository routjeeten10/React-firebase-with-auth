import { Link ,useNavigate } from "react-router-dom";
import React, {useState} from "react";
import {auth} from '../firebase'

import { signInWithEmailAndPassword , GoogleAuthProvider , signInWithPopup } from "firebase/auth";


const Login = () => {
  const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const navigate = useNavigate();

   const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      console.log(user)

      navigate('/home')
    } catch (error) {
      console.log(error)
    }
   }

   const googleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth,provider)
      navigate('/home')
    } catch (error) {
      console.log(error)
    }

   }
  return (
    <>
      <div className="container" style={{ width: "60%" }}>
        <h1 className="text-center">React Firebase Authentication</h1>
        <div className="container my-5">
          <form onSubmit={handelSubmit}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="text-center">
              <button
                style={{ width: "40%" }}
                type="submit"
                class="btn btn-primary"
              >
                Login
              </button>
              </div>
              <Link to='/register'><p style={{
                color:"white",
                marginLeft:"40rem"
              }}>Register New User</p></Link>
          </form>
        </div>

        <div className="container text-center">
          <div className="d-flex justify-content-center align-items-center">
            <button
            onClick={googleClick}
              className="btn  d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: "white",
                width: "40%",
              }}
            >
              <div style={{ width: "10%" }}>
                <img
                  src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                  alt=""
                  style={{ width: "100%" }}
                />
              </div>
              <div>
                <h2
                  style={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  Login with Google
                </h2>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
