import ReactCheckout, { Token } from "react-stripe-checkout";
import { useDispatch } from "react-redux";

import { checkoutActions } from "src/redux/checkout/checkout.slice";

interface IStripeCheckoutButtonProps {
  price: number;
}

const StripeCheckoutButton = ({ price }: IStripeCheckoutButtonProps) => {
  const dispatch = useDispatch();

  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51K1WOJIU1uoEyCuhqlPZE3Fc12QzMQ9qi3xa20bgsTmiCdL0NZcejHOqIazDVBqs7jCztbG5ClEcQXzR3FvV7ymm00DY9jaevJ";

  const onToken = (token: Token) => {
    dispatch(checkoutActions.checkoutStart({ token, total: priceForStripe }));
  };

  return (
    <ReactCheckout
      label="Pay Now"
      name="React Full E-Commerce"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
