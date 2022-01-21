import { useDispatch, useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {

  const cart = useSelector(state => state.cart);
  const isVisible = useSelector(state => state.cart.isCartVisible);

  return isVisible && (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        { cart.products.map(product => ( product.quantity !== 0 && <CartItem
            key={product.id} item={{ id: product.id, title: product.name, quantity: product.quantity, total: product.totalProductPrice, price: product.price }}
          />)
        )}
      </ul>
    </Card>
  );
};

export default Cart;
