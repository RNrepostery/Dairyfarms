import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthSlice";

function Register() {
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const [name, setName] = useState("");

  const [phone, setPhone] = useState("");

  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({
      name:name,
      phone:phone,
      password:password,
      header:true
     
    }))
    navigate('/login')
  }
  const auth = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  console.log(auth);

  return (
    <>
    <div className="w-96 mx-auto mt-6 px-6 py-4 bg-white shadow-md overflow-hidden pt-5 mt-5">
  <div className="container mt-5">
  <div className="text-center mt-5 pt-5">
          <img
            src="https://pravarshaindustries.com/img/pravarsha-logo.png"
            alt="Pravarsha Logo"
            className="img-fluid" // Ensures image is responsive
            style={{ maxWidth: '400px' }} // Adjusts the logo size as needed
          />
        </div>
  <div className="card text-center shadow-sm p-4 mt-2 mb-3" style={{ maxWidth: '400px', margin: '0 auto' }}>
      <form action="/" onSubmit={(e) => handleSubmit(e)} className=" py-3">
        <div>
          <div className="flex items-center gap-2">
            <label className="block font-medium text-xs">Name</label>
          </div>
          <input
            className="mt-2 appearance-none border rounded-lg w-full py-2 px-4 text-gray-700 leading-tight"
            placeholder="Name"
            required
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <label className="block font-medium text-xs">Phone</label>
          </div>
          <input
            className="mt-2 appearance-none border rounded-lg w-full py-2 px-4 text-gray-700 leading-tight"
            type="tel"
            name="phone"
            pattern="[0-9]{10}"
            maxLength={10}
            placeholder="Phone Number"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <div className="flex items-center gap-2">
            <label className="block font-medium text-xs">Password</label>
          </div>
          <input
            className="mt-2 appearance-none border rounded-lg w-full py-2 px-4 text-gray-700 leading-tight"
            type="password"
            name="password"
            required
            autoComplete="current-password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="block mt-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              name="remember"
            />
            <span>Remember me</span>
          </label>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div>
            <Link
              className="text-sm text-gray-600 underline hover:text-gray-900"
              to="/login"
            >
              existing account ?
            </Link>
            <span>
              <Link
                to="/login"
                className="text-md px-3 py-1 font-black rounded-lg border mx-2"
              >
                login
              </Link>
            </span>
          </div>
        </div>
        <div className="mt-3 font-bold text-center text-md pravarsha">
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

export default Register
