import { Dispatch } from "redux";
import { connect } from "react-redux";
import { CartItem } from "src/redux/cart/cart.types";
import {
  addItem,
  removeItem,
  deleteItemFromCart,
} from "src/redux/cart/cart.actions";

import "./checkout-item.styles.scss";

interface ICheckoutItemProps {
  item: CartItem;
  addItem: (item: CartItem) => void;
  removeItem: (item: CartItem) => void;
  deleteItemFromCart: (item: CartItem) => void;
}

const CheckoutItem = ({
  item,
  addItem,
  removeItem,
  deleteItemFromCart,
}: ICheckoutItemProps) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={item.imageUrl} />
      </div>
      <span className="name">{item.name}</span>
      <span className="quantity">
        <span className="arrow" onClick={() => removeItem(item)}>
          &#10094;
        </span>
        <span className="value">{item.quantity}</span>
        <span className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </span>
      </span>
      <span className="price">{item.price}</span>
      <div className="remove-button" onClick={() => deleteItemFromCart(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addItem: (item: CartItem) => dispatch(addItem(item)),
  removeItem: (item: CartItem) => dispatch(removeItem(item)),
  deleteItemFromCart: (item: CartItem) => dispatch(deleteItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
