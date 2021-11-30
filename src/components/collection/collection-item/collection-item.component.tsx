import { Dispatch } from "redux";
import { connect } from "react-redux";
import { Item } from "src/redux/shop/shop.types";
import { addItem } from "src/redux/cart/cart.actions";

import CustomButton from "src/components/form/custom-button/custom-button.component";

import "./collection-item.styles.scss";

interface ICollectionItemProps {
  item: Item;
  addItem: (item: Item) => void;
}

const CollectionItem = ({
  item,
  addItem,
}: ICollectionItemProps): JSX.Element => {
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addItem: (item: Item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
