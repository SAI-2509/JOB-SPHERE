import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../SearchBar.css";
import Job from "./Job";


type Job = {
  id: number;
  title: string;
  company :string
  location :string
  salary_from :string
  salary_to:string
  application_deadline:string
};

type Props = {
  setResults: any;
};

const SearchBar = ({setResults}:Props) => {//destructing .setResult is a prop received from parent
  const [input, setInput] = useState("");

  const fetchData=(value:any)=>{
    fetch('https://jsonfakery.com/jobs')
    .then((response)=>response.json())
    .then((json)=>{
      
      //fitering the data 
      const results=json.filter((job:Job)=>{ //job variable should follow Job structure
        return value && job && job.title.toLowerCase().includes(value.toLowerCase());//check whether user typed something & check if job exist & checking the job title

      })
      setResults(results)
    });
  }

  const handleChange = (value:any) => {
    setInput(value);//updating what user typed
    fetchData(value);//fetching data based on what user typed
  };

  return (
    <div className="input-box">
      <FaSearch id="Searchicon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(event) => 
          handleChange(event.target.value)
        }
      />
    </div>
  );
};

export default SearchBar;
