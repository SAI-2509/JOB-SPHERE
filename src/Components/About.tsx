import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../About.module.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.tsx";

function About() {
  const { id } = useParams();
  const [job, setjob] = useState<any>(null);
  const [error, setError] = useState(false);
  const [apply, setApply] = useState(false);

  function handleChange() {
    setApply(true);

    const existing = JSON.parse(localStorage.getItem("appliedJobs") || "[]");

    // avoid duplicates
    if (!existing.find((j: any) => j.id === job.id)) {
      existing.push(job);
      localStorage.setItem("appliedJobs", JSON.stringify(existing));
    }
  }

  //FETCHING DATA FROM JSON FAKE DATA & HANDLING ERROR
  useEffect(() => {
    fetch(`https://jsonfakery.com/jobs`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Job not found");
        }
        return response.json();
      })
      .then((data) => {
        const found = data.find((job: any) => job.id === id);
        if (found) {
          setjob(found);
        } else {
          setError(true);
        }
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(true);
      });
  }, [id]);
  if (error) {
    return <h2>Job not found or failed to load.</h2>;
  }
  if (!job) {
    return <p>Loading job details...</p>;
  }
  // PROPERTIES OF JOB
  return (
    <div>
      <Navbar />

      <div className={styles.aboutcontainer}>
        <h1>Job Details</h1>
        <div className={styles.aboutbox}>
          <div className={styles.aboutcard}>
            <h3>Title :{job.title}</h3>
            <p>Company :{job.company}</p>
            <p>Location :{job.location}</p>
            <p>Salary from :{job.salary_from}</p>
            <p>Salary to :{job.salary_to}</p>
            <p>Application deadline : {job.application_deadline}</p>
            <p>Job category :{job.job_category}</p>

            <p>Contact :{job.contact}</p>
            <p>Number of opening :{job.number_of_opening}</p>
          </div>
          <div className={styles.buttoncontainer}>
            <div>
              <button
                className={styles.button}
                onClick={() => {
                  handleChange();
                }}
              >
                <p>{apply ? "Applied" : "ApplyNow"}</p>
              </button>
            </div>
            <div>
              <Link to={`/`}>
                <button className={styles.button}>Back</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
