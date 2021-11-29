import { Collection } from "../../redux/shop/shop.types";

import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

interface ICollectionPreviewProps extends Collection {}

const CollectionPreview = ({
  title,
  items,
}: ICollectionPreviewProps): JSX.Element => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((_, i) => i < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
