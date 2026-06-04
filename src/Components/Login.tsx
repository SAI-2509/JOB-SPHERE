import { useForm } from "react-hook-form";
import axios from "axios";
import "../Login.css";
import Navbar from "./Navbar";


function Login() {
  const { register, handleSubmit } = useForm();
  const submitCall = async (data: any) => {
    console.log(data);
    try {
      const response = await axios.post(
        "https://job-sphere-backend-0289.onrender.com/api/auth/Login",
        data,
      );
      if (response.status == 201) {
        alert("Login Successfully");
      }
      // after login success

  
    } catch (error) {
      console.log("Invalid email or password");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="logincontainer">
        <form className="loginform" onSubmit={handleSubmit(submitCall)}>
          <h2>Login</h2>

          <div className="group">
            <label>Email:</label>
            <input
              type="email"
              {...register("email")}
              placeholder="Enter your email"
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
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
