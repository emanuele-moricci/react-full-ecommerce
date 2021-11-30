import { CartItem as CartItemType } from "../../../redux/cart/cart.types";

import "./cart-item.styles.scss";

interface ICartItemProps {
  item: CartItemType;
}

const CartItem = ({
  item: { imageUrl, price, name, quantity },
}: ICartItemProps) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
