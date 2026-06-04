import styles from '../Job.module.css'
import { Link } from 'react-router-dom';

function Job(props:any){
   
//creating props 
  return (
    <div className={styles.card}>
  
      <h3>Title:{props.title}</h3>
      <p>Company :{props.company}</p>
      <p>Location :{props.location}</p>
      <p>Salary from :{props.salary_from}</p>
      <p>Salary to:{props.salary_to}</p>
      <p>Application deadline:{props.application_deadline}</p>
      <div className={styles.buttonstyles}>
      <Link to={`/about/${props.id}`} >
      <button  className='btn'> Details </button></Link>
     
      </div>
     
      
      
    </div>
  )
}



export default Job

