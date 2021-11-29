import { connect } from "react-redux";
import { Dispatch } from "redux";
import { removeItem } from "../../redux/cart/cart.actions";
import { CartItem } from "../../redux/cart/cart.types";

import "./checkout-item.styles.scss";

interface ICheckoutItemProps {
  item: CartItem;
  removeItem: (item: CartItem) => void;
}

const CheckoutItem = ({ item, removeItem }: ICheckoutItemProps) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={item.imageUrl} />
      </div>
      <span className="name">{item.name}</span>
      <span className="quantity">{item.quantity}</span>
      <span className="price">{item.price}</span>
      <div className="remove-button" onClick={() => removeItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  removeItem: (item: CartItem) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
