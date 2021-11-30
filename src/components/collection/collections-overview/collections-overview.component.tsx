import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../../redux/shop/shop.selectors";
import { Collection } from "../../../redux/shop/shop.types";

import CollectionPreview from "../collection-preview/collection-preview.component";

import "./collections-overview.styles.scss";

interface ICollectionOverviewProps {
  collections: Collection[];
}

const CollectionOverview = ({ collections }: ICollectionOverviewProps) => (
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
