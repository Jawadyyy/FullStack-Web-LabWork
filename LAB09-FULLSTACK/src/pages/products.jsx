import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./products.css";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <div className="products-container">
      <h1>Products</h1>
      <div className="products-grid">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <Link to={`/product/${p.id}`}>
              <img src={p.thumbnail} alt={p.title} />
              <h3>{p.title}</h3>
              <p>{p.description.slice(0, 60)}...</p>
              <p className="price">${p.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
