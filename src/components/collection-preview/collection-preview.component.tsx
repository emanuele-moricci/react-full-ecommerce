import { Collection } from "../../pages/shop/shop.collections";
import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

interface ICollectionPreview extends Collection {}

const CollectionPreview = ({
  title,
  items,
}: ICollectionPreview): JSX.Element => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((_, i) => i < 4)
        .map((item) => (
          <CollectionItem key={item.id} {...item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
