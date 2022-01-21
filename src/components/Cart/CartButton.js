import { useDispatch, useSelector } from 'react-redux';

import classes from './CartButton.module.css';
import { cartAction } from '../../redux/slices/cart-slice';

const CartButton = (props) => {

  const productCount = useSelector(state => state.cart.totalCartItems);

  const dispatch = useDispatch();

  const toggleVisiblity = () => {
    dispatch(cartAction.toggleVisiblity());
  }

  return (
    <button onClick={toggleVisiblity} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{ productCount }</span>
    </button>
  );
};

export default CartButton;
