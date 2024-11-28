import React, { useEffect, useState } from "react";
import loader from "../../assets/loader.gif";
import "./collection.css";
const Collections = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://makeup-api.herokuapp.com/api/v1/products.json"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="collections">
      <h1>Makeup Products</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      <div className="product-list">
        {filteredProducts.length === 0 ? (
          <div>No products found for {searchTerm}</div>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-item">
              <img
                src={product.image_link}
                alt={product.name}
                className="product-image"
              />
              <h4 className="product-name">{product.name}</h4>
              <p className="product-brand">Brand: {product.brand}</p>
              <p className="product-price">
                Price: {product.price} {product.currency}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );

  // return(
  // <div>collections</div>
  // )
};

export default Collections;