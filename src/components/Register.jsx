import React, {useState} from "react";
import {auth} from '../firebase'

import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";//to redirect other page

const Register = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const navigate = useNavigate();

   const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      console.log(user)

      navigate('/')
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
                Resgister
              </button>
            </div>
          </form>
        </div>
        </div>
    </>
  )
}

export default Register

