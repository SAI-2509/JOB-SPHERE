
import "../App.css";
import SearchBar from "../Components/SearchBar";
import { useState } from "react";
import Searchresults from "../Components/Searchresults";
import { Link } from 'react-router-dom';

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  salary_from: string;
  salary_to: string;
  application_deadline: string;
};

function Navbar ()  {
     const [results, setResult] = useState<Job[]>([]);//array of objects
  return (
    <div>
        <div className="search-container">
        <h2 className="Title">Job Sphere</h2>

        <div className="search-bar">
          <SearchBar setResults={setResult} />
          <div className="search-container-results">
            <Searchresults results={results} />
          </div>
        </div>
        <div >
        <Link to={'/'}>
          <button className="btn"  >Home</button></Link>
        </div>
        <div >
        <Link to={'/joblist'}>
          <button className="btn"  >Joblist</button></Link>
        </div>
        <div className="applied">
          <Link to={'/applied'}>
          <button className="btn" >My Job</button>
          </Link>
          
        </div>
        <div >
        <Link to={'/login'}>
          <button className="btn"  >Login</button></Link>
        </div>
        <div >
        <Link to={'/register'}>
          <button className="btn" style={{backgroundColor:"#e15151"}} >Register</button></Link>
        </div>
      </div>     
      
    </div>
  )
}

export default Navbar
