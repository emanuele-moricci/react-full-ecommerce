import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import { CartItem } from "../../redux/cart/cart.types";

import CheckoutItem from "../../components/checkout/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/checkout/stripe-button/stripe-button.component";

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
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/29 - CVV: 123
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
