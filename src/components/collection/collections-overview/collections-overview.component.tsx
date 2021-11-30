import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Collection } from "src/redux/shop/shop.types";
import { selectCollections } from "src/redux/shop/shop.selectors";

import CollectionPreview from "src/components/collection/collection-preview/collection-preview.component";

import "./collections-overview.styles.scss";

interface ICollectionOverviewProps {
  collections: Collection[];
}

const CollectionOverview = ({
  collections,
}: ICollectionOverviewProps): JSX.Element => (
  <div className="collections-overview">
    {collections.map((collection) => (
      <CollectionPreview key={collection.id} {...collection} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
