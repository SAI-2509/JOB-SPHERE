import "../Searchresults.css";
import { Link } from "react-router-dom";

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  salary_from: string;
  salary_to: string;
  application_deadline: string;
};

type Props = {
  results: Job[];
};

const Searchresults = ({ results }: Props) => {
  return (
    <div className="resultlist">
      {results.map((result) => (
        <Link key={result.id} to={`/about/${result.id}`} className="result-link">
          <div key={result.id}>{result.title}</div>
        </Link>
      ))}
    </div>
  );
};

export default Searchresults;
