import React from "react";
import Navbar from "./Navbar";
import Job from "./Job";
import "../Applied.css"

function Applied() {
  const appliedJobs = JSON.parse(localStorage.getItem("appliedJobs") || "[]");

  return (
    <div>
      <Navbar />
      <div className="card">
        
        {appliedJobs.length === 0 ? (
  <p>You have not applied for any jobs yet.</p>
) : (
  <div >
    {appliedJobs.map((job: any) => (
      <Job
  key={job.id}
  id={job.id}
  title={job.title}
  company={job.company}
  location={job.location}
  salary_from={job.salary_from}
  salary_to={job.salary_to}
  application_deadline={job.application_deadline}
/>

    ))}
  </div>
)}

      </div>
    </div>
  );
}

export default Applied;
