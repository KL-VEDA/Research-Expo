import "./PageNotFound.css";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="page-not-found" role="main" aria-labelledby="notfound-title">
      <h1 id="notfound-title">404</h1>
      <p>
        Hey Researcher! Looks like your research navigation went off track. Maybe
        it’s time to — head back to the home page by clicking the button below.
      </p>
      <button className="back-home-button" onClick={handleGoHome} aria-label="Go back to home page">
        Go Back Home
      </button>
    </div>
  );
}

export default PageNotFound;
