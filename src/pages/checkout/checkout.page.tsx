import { useSelector } from "react-redux";
import { selectItems, selectCartTotal } from "src/redux/cart/cart.selectors";

import CheckoutItem from "src/components/checkout/checkout-item/checkout-item.component";
import StripeCheckoutButton from "src/components/checkout/stripe-button/stripe-button.component";

import * as Styled from "./checkout.styles";

const Checkout = (): JSX.Element => {
  const items = useSelector(selectItems);
  const total = useSelector(selectCartTotal);

  return (
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
