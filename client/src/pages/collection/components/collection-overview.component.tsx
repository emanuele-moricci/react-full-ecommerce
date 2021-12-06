import { useSelector } from "react-redux";
import { selectCollection } from "src/pages/shop/state/shop.selectors";

import CollectionItem from "src/pages/collection/components/collection-item/collection-item.component";

import * as Styled from "./collection-overview.styles";

export interface ICollectionOverviewProps {
  collectionId: string;
}

const CollectionOverview = ({
  collectionId,
}: ICollectionOverviewProps): JSX.Element => {
  const foundCollection = useSelector(selectCollection(collectionId));

  return (
    <Styled.CollectionOverview>
      <Styled.Title>{foundCollection?.title}</Styled.Title>
      <Styled.Items>
        {foundCollection?.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </Styled.Items>
    </Styled.CollectionOverview>
  );
};

export default CollectionOverview;
