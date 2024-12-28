import "./index.css";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  function goHome() {
    navigate("/");
  }
  return (
    <div className="not-found-container">
      <div className="content-wrapper">
        <div className="character-container">
          <div className="character">
            <div className="cape"></div>
            <div className="body"></div>
            <div className="eye"></div>
          </div>
        </div>
        <div className="error-text">404</div>
        <h2 className="error-message">Oops! Page not found</h2>
        <button className="home-button" onClick={goHome}>
          Go Home
        </button>
        <div className="decorations">
          <div className="cloud cloud-1"></div>
          <div className="cloud cloud-2"></div>
          <div className="cloud cloud-3"></div>
          <div className="star star-1">+</div>
          <div className="star star-2">+</div>
          <div className="star star-3">+</div>
        </div>
      </div>
    </div>
  );
}
