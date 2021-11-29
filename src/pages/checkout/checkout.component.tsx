import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import { CartItem } from "../../redux/cart/cart.types";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";

interface ICheckoutProps {
  items: CartItem[];
  total: number;
}

const Checkout = ({ items, total }: ICheckoutProps) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {items.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
