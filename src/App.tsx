import "./App.css";
import SearchBar from "./Components/SearchBar";
import React, { useState } from "react";
import Searchresults from "./Components/Searchresults";
import Joblist from "./Components/Joblist";
import { Link } from 'react-router-dom';
import Applied from "./Components/Applied";
import  Navbar from "./Components/Navbar"

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  salary_from: string;
  salary_to: string;
  application_deadline: string;
};



function App() {
  const [results, setResult] = useState<Job[]>([]);//array of objects
  return (
    <div>
      < Navbar/>
        <Joblist />
     
    </div>
  );
}

export default App;
