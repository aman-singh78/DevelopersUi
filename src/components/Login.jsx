import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants/constants";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const user = await axios.post(
        BASE_URL + "login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(user.data));
      return navigate("/");
    } catch (err) {
      setError(err.response.data);
      console.log(err);
    }
  };
  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "signUp",
        { firstName, lastName, emailId, password },
        { withCredentials: true }
      );
      console.log(res);
      dispatch(addUser(res.data.data));
      return navigate("/profile");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");

      console.log(err);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="card card-dash bg-base-300 w-96 mt-6">
        <div className="card-body">
          <h2 className="card-title justify-center">
            {isLogin ? "SignIn" : "SignUp"}
          </h2>
          {!isLogin && (
            <>
              <label className=" mt-2">
                <span>Firstname</span>
                <input
                  type="text"
                  placeholder=""
                  className="input input-md"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>

              <label className=" mt-4">
                <span>LastName</span>
                <input
                  type="text"
                  placeholder=""
                  className="input input-md"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
            </>
          )}

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
          <p className="text-red-600 ">{error}</p>

          <div className="card-actions justify-center mt-3">
            <button
              className="btn btn-primary"
              onClick={isLogin ? handleLogin : handleSignUp}
            >
              {isLogin ? "Login" : "SignUp"}
            </button>
          </div>
          <p
            className="m-auto cursor-pointer py-2"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "New User! Sign up here" : "Existing User! Login here"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
