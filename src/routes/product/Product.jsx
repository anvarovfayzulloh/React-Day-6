import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';
import './product.css';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios(`products/${id}`)
      .then(response => setProduct(response.data))
  }, [id]);


  return (
    <section>
      <div className="container">
        <div className="product__wrapper">
          <img width={"500px"} height={"500px"} src={product.images} alt="" />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
        </div>
      </div>
    </section>
  );
}

export default Product;
