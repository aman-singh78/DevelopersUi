import axios from "axios";
import React from "react";
import { useState } from "react";

const Login = () => {
  const [emailId, setEmailId] = useState("aman@gmail.com");
  const [password, setPassword] = useState("07aman@$");

  const handleLogin = async () => {
    try {
      const user = await axios.post(
        "http://localhost:3000/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex justify-center">
      <div className="card card-dash bg-base-300 w-96 mt-6">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>

          <label className=" mt-2">
            <span>Email Id</span>
            <input
              type="text"
              placeholder=""
              className="input input-md"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
            />
          </label>

          <label className=" mt-4">
            <span>Password</span>
            <input
              type="text"
              placeholder=""
              className="input input-md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <div className="card-actions justify-center mt-3">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
