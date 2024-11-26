import React, { useEffect, useState } from "react";
import css from "./Product.module.css";
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products";
import { useAutoAnimate } from "@formkit/auto-animate/react";
const Product = () => {


  const [MenuProducts, SetMenuProduct] = useState(ProductsData);

  const filter=(type)=>{
    if (type === "All") {
      SetMenuProduct(ProductsData);
    }   else {
      const filteredProducts = ProductsData.filter(product => product.type.toLowerCase() === type.toLowerCase());
      console.log("Filtered products:", filteredProducts);
      SetMenuProduct(filteredProducts);
    }
    
}

  return (
    <div className={css.container}>
      <img src={Plane} alt="" />
      <h1>our featured products</h1>

      <div className={css.products} >
        <ul className={css.menu} >
          <li onClick={() => filter("All")}>All</li>
          <li onClick={() => filter("Skin Care")}>Skin</li>
          <li onClick={() => filter("Conditioner")}>Conditioner</li>
          <li onClick={() => filter("Foundation")}>Foundation</li>
          <li onClick={() => filter("Nature")}>Nature</li>
        </ul>

        <div className={css.list} >
          {MenuProducts.map((product, i) => (
            <div className={css.product} key={i}>
              <div className="left-s">
                <div className="name">
                  <span>{product.name}</span>
                  <span>{product.detail}</span>
                </div>
                <span>{product.price}$</span>
                <div >Shop now</div>
              </div>
              <img src={product.img} alt="product image" className="img-p" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
