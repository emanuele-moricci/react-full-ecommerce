import { useDispatch } from "react-redux";
import { Item } from "src/redux/shop/shop.types";
import { cartActions } from "src/redux/cart/cart.slice";

import CustomButton from "src/components/form/custom-button/custom-button.component";

import * as Styled from "./collection-item.styles";

interface ICollectionItemProps {
  item: Item;
}

const CollectionItem = ({ item }: ICollectionItemProps): JSX.Element => {
  const dispatch = useDispatch();
  const { imageUrl, name, price } = item;

  return (
    <Styled.CollectionItem>
      <Styled.Image className="image" imageUrl={imageUrl} />
      <Styled.CollectionFooter>
        <Styled.Name>{name}</Styled.Name>
        <Styled.Price>${price}</Styled.Price>
      </Styled.CollectionFooter>
      <CustomButton
        inverted
        onClick={() => dispatch(cartActions.addItem(item))}
      >
        Add to cart
      </CustomButton>
    </Styled.CollectionItem>
  );
};

export default CollectionItem;
