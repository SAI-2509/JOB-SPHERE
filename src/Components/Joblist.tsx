import { useState, useEffect } from "react";
import Grid from "@mui/material/GridLegacy";
import Job from "./Job";

function Joblist() {
  const [jobs, setJobs] = useState<any[]>([]);

  //FETCHING JOB

  useEffect(() => {
    fetch("https://jsonfakery.com/jobs")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setJobs(data);
      });
  }, []);

  if (jobs.length == 0) {
    return (
      <>
        <p>loading...</p>
      </>
    );
  }
  //fetching data and creating component as collection to render data

  return (
    <div>
      <Grid container spacing={3} justifyContent="center">
        {jobs.map((job) => (
          <Grid item xs={12} sm={6} md={3} key={job.id}>
            <Job
              id={job.id}
              title={job.title}
              company={job.company}
              location={job.location}
              salary_from={job.salary_from}
              salary_to={job.salary_to}
              application_deadline={job.application_deadline}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Joblist;
//npx json-server --watch src/Data/data.json --port 3000 --static src/Data
