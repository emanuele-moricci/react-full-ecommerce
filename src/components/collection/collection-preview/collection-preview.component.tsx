import { Collection } from "src/redux/shop/shop.types";

import CollectionItem from "src/components/collection/collection-item/collection-item.component";

import * as Styled from "./collection-preview.styles";

interface ICollectionPreviewProps extends Collection {}

const CollectionPreview = ({
  title,
  items,
}: ICollectionPreviewProps): JSX.Element => (
  <Styled.CollectionPreview>
    <Styled.Title>{title.toUpperCase()}</Styled.Title>
    <Styled.Preview>
      {items
        .filter((_, i) => i < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </Styled.Preview>
  </Styled.CollectionPreview>
);

export default CollectionPreview;
