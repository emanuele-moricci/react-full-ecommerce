import ReactCheckout from "react-stripe-checkout";

interface IStripeCheckoutButtonProps {
  price: number;
}

const StripeCheckoutButton = ({ price }: IStripeCheckoutButtonProps) => {
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY ?? "";

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
      token={(token) => {
        console.log(token);
        alert("Payment Successful");
      }}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
