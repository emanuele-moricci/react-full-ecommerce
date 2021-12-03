import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Collection } from "src/redux/shop/shop.types";
import { selectCollections } from "src/redux/shop/shop.selectors";

import CollectionPreview from "src/components/collection/collection-preview/collection-preview.component";

import * as Styled from "./collections-overview.styles";

interface ICollectionOverviewProps {
  collections: Collection[];
}

const CollectionOverview = ({
  collections,
}: ICollectionOverviewProps): JSX.Element => (
  <Styled.CollectionsOverview>
    {collections.map((collection) => (
      <CollectionPreview key={collection.id} {...collection} />
    ))}
  </Styled.CollectionsOverview>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
