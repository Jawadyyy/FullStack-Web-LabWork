import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./products.css";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <h2 className="loading">Loading...</h2>;

  return (
    <div className="product-details-container">
      <img src={product.thumbnail} alt={product.title} className="product-image"/>
      <h1>{product.title}</h1>
      <p className="price">Price: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}
