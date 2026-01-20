import { Link } from "react-router-dom";
import "./home.css"; 

export default function Home() {
  return (
    <div className="home-container">
      <div className="hero">
        <h1>Welcome to My E-Commerce Store</h1>
        <p>Find the best products at amazing prices!</p>
        <Link to="/products">
          <button>Shop Now</button>
        </Link>
      </div>
    </div>
  );
}
