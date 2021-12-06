import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { selectItems, selectCartTotal } from "src/redux/cart/cart.selectors";
import { selectCheckoutPurchasing } from "src/pages/checkout/state/checkout.selectors";

import CheckoutItem from "src/pages/checkout/components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "src/pages/checkout/components/stripe-button/stripe-button.component";
import Spinner from "src/components/_common/layout/spinner/spinner.component";

import * as Styled from "./checkout.styles";

const Checkout = (): JSX.Element => {
  const navigate = useNavigate();

  const items = useSelector(selectItems);
  const total = useSelector(selectCartTotal);
  const purchasing = useSelector(selectCheckoutPurchasing);

  useEffect(() => {
    if (!items.length) navigate("/");
  }, [items, navigate]);

  return purchasing ? (
    <Spinner />
  ) : (
    <Styled.CheckoutPage>
      <Styled.CheckoutHeader>
        <Styled.HeaderBlock>
          <span>Product</span>
        </Styled.HeaderBlock>
        <Styled.HeaderBlock>
          <span>Description</span>
        </Styled.HeaderBlock>
        <Styled.HeaderBlock>
          <span>Quantity</span>
        </Styled.HeaderBlock>
        <Styled.HeaderBlock>
          <span>Price</span>
        </Styled.HeaderBlock>
        <Styled.HeaderBlock>
          <span>Remove</span>
        </Styled.HeaderBlock>
      </Styled.CheckoutHeader>
      {items.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <Styled.Total>
        <span>TOTAL: ${total}</span>
      </Styled.Total>
      <Styled.TestWarning>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/29 - CVV: 123
      </Styled.TestWarning>
      <StripeCheckoutButton price={total} />
    </Styled.CheckoutPage>
  );
};

export default Checkout;
