import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="col-md-4 mb-4"> 
      <div className="card">
        <img src={product.images} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">${product.price}</p>
          <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;