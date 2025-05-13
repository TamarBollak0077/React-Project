import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataAsyncAction } from '../redux/thunk';
import ProductCard from './ProductCard';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { productsList, loading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchDataAsyncAction());
  }, [dispatch]);

  if (loading) return <div className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="row">
        {productsList.map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  );
};

export default ProductsPage;

