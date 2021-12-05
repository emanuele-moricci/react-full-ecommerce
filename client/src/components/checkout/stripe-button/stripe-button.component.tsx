import ReactCheckout, { Token } from "react-stripe-checkout";
import axios from "axios";

interface IStripeCheckoutButtonProps {
  price: number;
}

const StripeCheckoutButton = ({ price }: IStripeCheckoutButtonProps) => {
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY ?? "";

  const onToken = (token: Token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then(() => {
        alert("Payment successfull");
      })
      .catch((error) => {
        console.error("Payment error: ", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please make sure yo use the provided credit card."
        );
      });
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
