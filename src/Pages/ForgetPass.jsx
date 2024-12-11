import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/AuthSlice";

function ForgetPass() {
  const auth = useSelector((state) => state.user.user);

  let navigate = useNavigate();

  
  const [phone, setPhone] = useState("");

  const [passwords, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
   if (auth.phone===phone){
    dispatch(login({
      loggedIn:true,
      phone:phone,

      password:passwords})) 
      navigate("/login")
     

   }
   else{
    console.log("invalid user name")
    navigate("/forgetpass")
   }

  
  }
  console.log(auth,passwords)

  return (
  
    
     <>
   <div className="w-auto  mt-6 px-6 py-4 bg-white shadow-md overflow-hidden  mt-5 pt-5 ">
      <div className="cotainer-flued mt-5 ">
         {/* Add the logo image outside of the form container */}
         <div className="text-center mt-5 pt-5">
          <img
            src="https://pravarshaindustries.com/img/pravarsha-logo.png"
            alt="Pravarsha Logo"
            className="img-fluid" // Ensures image is responsive
            style={{ maxWidth: '200px' }} // Adjusts the logo size as needed
          />
        </div>
        <div className="card text-center shadow-sm p-4 mt-2 mb-3" style={{ maxWidth: '400px', margin: '0 auto' }}>
          <form   onSubmit={(e)=>(handleSubmit(e))} className="card py-3">
          
            <div>
              <div className="flex items-center gap-2">
                <label className="block font-medium text-xs">Phone</label>
              </div>
              <input
                className="mt-2 appearance-none border  rounded-lg w-full py-2 px-4 text-gray-700 leading-tight  block w-full mt-1"
                type="tel"
                name="phone"
                pattern="[0-9]{10}"
                maxLength={10}
                placeholder="Phone Number"
                required="required"
                autofocus="autofocus"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-2">
                <label className="block font-medium text-xs">New Password</label>
              </div>
              <input
                className="mt-2 appearance-none border  rounded-lg w-full py-2 px-4 text-gray-700 leading-tight  block w-full mt-1"
                type="password"
                name="password"
                required="required"
                autoComplete="current-password"
                placeholder="Password"
                value={passwords}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          
           
            <div className="mt-3 font-bold text-center text-md pravarsha">
              {/* New to Pravarsha? */}
              <div>
                <button
                  className="block w-full px-5 py-1 mt-1 font-normal border rounded-lg"
                  
                    type="submit"
                    
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  
   </>
   
  )
}

export default ForgetPass
