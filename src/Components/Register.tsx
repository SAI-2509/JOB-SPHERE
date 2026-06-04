import React from "react";
import "../Register.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import  Navbar from "./Navbar"
import axios from "axios";
//register form
function Register() {
  //useform instead of usestate
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const submitCall = async (data: any) => {
    console.log(data);
    try {
      const response = await axios.post(
        "https://job-sphere-backend-0289.onrender.com/api/auth/register",
        data,
      );
      if (response.status == 201) {
        alert("User Registered Successfully");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    //register form ..storing the variable using the input
    <div>
      <Navbar/>
    <div>
      <div className="registercontainer">
        <form className="registerform" onSubmit={handleSubmit(submitCall)}>
          <h2>Create an Account</h2>

          <div className="group">
            <label>Full Name:</label>

            <input
              type="text"
              {...register("name")}
              placeholder="Enter your name"
            />
          </div>

          <div className="group">
            <label>Email:</label>
            <input
              type="email"
              {...register("email")}
              placeholder="Enter your email"
            />
          </div>

          <div className="group">
            <label>Mobile:</label>
            <input
              type="tel"
              {...register("mobile")}
              placeholder="Enter your mobile number"
            />
          </div>

          <div className="group">
            <label>Password:</label>
            <input
              type="password"
              {...register("password")}
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Register;
