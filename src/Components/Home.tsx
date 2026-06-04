import Navbar from "./Navbar.tsx";
import { Link } from "react-router-dom";
import homeImg from "../assests/home-image.png";

import "../Home.css";

function Home() {
  return (
    <div>
      <Navbar />

      <div className="hero">
        <div className="hero-image">
          <img src={homeImg} alt="Job search illustration" />
        </div>

        <div id="box">
          <h1 id="heading">Find Work That Matters To You</h1>
          <p className="sub-heading">
            Job Sphere connects you with the latest opportunities tailored to
            your skills and goals.
          </p>
          <p className="sub-heading">
            Explore jobs, find the right fit, and apply easily through a simple,
            user-friendly platform.
          </p>

          <div id="box2">
            <div>
              <Link to={"/joblist"}>
              <button className="btn-home">Get Started </button></Link>
            </div>
          </div>
          <div className="job-cards">
            <div className="job-card">
              <p className="job-tag">Match</p>
              <h3>We match you with roles</h3>
              <p>Our system learns what you want and shows it first.</p>
            </div>

            <div className="job-card">
              <p className="job-tag">Apply</p>
              <h3>Submit applications with confidence</h3>
              <p>Your information stays protected every step of the way.</p>
            </div>

            <div className="job-card">
              <p className="job-tag">Ready to move forward</p>
              <h3>Join thousands finding work that fits their life and skills</h3>
               <div>
              <Link to={"/register"} >
              <button className="btn-home">Register </button></Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
