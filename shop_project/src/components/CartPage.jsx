
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, clearCart, deleteFromCart, removeFromCart, setTotalSum } from '../redux/CartSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cartList);
  const totalSum = useSelector(state => state.cart.totalSum);
  let runningTotal = 0;
  const [isShippingAdded, setIsShippingAdded] = useState(false);
  const shippingCost = 50;

  const handleAddShipping = () => {
    if (!isShippingAdded) {
      dispatch(setTotalSum(totalSum + shippingCost));
      setIsShippingAdded(true);
    };
  };
  const handlePaymentOrder = () => {
    if(window.confirm("Do you want to complete the order?")){
      dispatch(clearCart());
    }
  };

  return (
    <div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>

      ) :
        <>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Amount</th>
                <th>SubSum</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map(product => {
                runningTotal += product.price * product.quantity;
                return (
                  <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>${product.price}</td>
                    <td>
                      {product.quantity}
                    </td>
                    <td>
                      ${runningTotal.toFixed(2)}
                    </td>
                    <td>
                      <button className="updateQuantity" onClick={() => dispatch(addToCart(product))}><FontAwesomeIcon icon={faPlus} style={{ color: 'blue' }} /> </button>
                      <button className="updateQuantity" onClick={() => dispatch(removeFromCart(product))}><FontAwesomeIcon icon={faMinus} style={{ color: 'blue' }} /></button>
                    </td>
                    <td>
                      <button onClick={() => dispatch(deleteFromCart(product))}> <FontAwesomeIcon icon={faTrash} style={{ color: 'blue' }} /></button>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan="2" style={{ backgroundColor: 'blue', color: 'white' }}>Total sum</td>
                <td style={{ backgroundColor: 'blue', color: 'white' }}>${totalSum.toFixed(2)} </td>
              </tr>
            </tbody>
          </table>
          <button type="button" class="btn btn-outline-primary" onClick={handleAddShipping} style={{ marginRight: '10px' }}>Shipping Added</button>
          <button type="button" class="btn btn-outline-primary" onClick={handlePaymentOrder}>For payment and order</button>
        </>
      }

    </div>
  );
};

export default CartPage;





