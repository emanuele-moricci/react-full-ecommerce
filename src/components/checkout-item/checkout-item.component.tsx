import { connect } from "react-redux";
import { Dispatch } from "redux";
import { deleteItemFromCart } from "../../redux/cart/cart.actions";
import { CartItem } from "../../redux/cart/cart.types";

import "./checkout-item.styles.scss";

interface ICheckoutItemProps {
  item: CartItem;
  deleteItemFromCart: (item: CartItem) => void;
}

const CheckoutItem = ({ item, deleteItemFromCart }: ICheckoutItemProps) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={item.imageUrl} />
      </div>
      <span className="name">{item.name}</span>
      <span className="quantity">{item.quantity}</span>
      <span className="price">{item.price}</span>
      <div className="remove-button" onClick={() => deleteItemFromCart(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  deleteItemFromCart: (item: CartItem) => dispatch(deleteItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
