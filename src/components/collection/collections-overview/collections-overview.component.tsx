import { useSelector } from "react-redux";
import { selectCollections } from "src/redux/shop/shop.selectors";

import CollectionPreview from "src/components/collection/collection-preview/collection-preview.component";

import * as Styled from "./collections-overview.styles";

const CollectionOverview = (): JSX.Element => {
  const collections = useSelector(selectCollections);

  return (
    <Styled.CollectionsOverview>
      {collections.map((collection) => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </Styled.CollectionsOverview>
  );
};

export default CollectionOverview;
