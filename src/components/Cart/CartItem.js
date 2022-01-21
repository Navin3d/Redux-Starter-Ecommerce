import { useDispatch } from 'react-redux';

import classes from './CartItem.module.css';
import { cartAction } from '../../redux/slices/cart-slice';

const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;

  const dispatch = useDispatch();

  const addProduct = () => {
    dispatch(cartAction.addItem({
      id,
      price: price,
    }))
  }

  const removeProduct = () => {
    dispatch(cartAction.removeItem({
      id,
      price: price,
    }))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeProduct}>-</button>
          <button onClick={addProduct}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
