import { Item } from "../../pages/shop/shop.collections";

import "./collection-item.styles.scss";

interface ICollectionItem extends Item {}

const CollectionItem = ({
  name,
  price,
  imageUrl,
}: ICollectionItem): JSX.Element => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);

export default CollectionItem;
