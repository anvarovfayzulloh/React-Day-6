import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import './products.css';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('products')
      .then(response => setProducts(response.data))
  }, []);

  console.log(products);

  return (
    <section className='products'>
      <div className="container">
        <div className="products__wrapper">
          {
            products.map(product => (
              <Link className="product" to={`/product/${product.id}`} >
                <div  key={product.id}>
                  <img src={product.images[0]} alt={product.title} />
                  <h3>{product.title.slice(0, 25)}</h3>
                  <p>{product.description.slice(0, 50)}...</p>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Products;
