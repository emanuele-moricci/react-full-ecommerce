import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { Collection } from "../../redux/shop/shop.types";

import "./collection-overview.styles.scss";

interface ICollectionOverviewProps {
  collectionId: string;
  foundCollection?: Collection;
}

const CollectionOverview = ({
  collectionId,
  foundCollection,
}: ICollectionOverviewProps): JSX.Element => {
  console.log(collectionId, foundCollection);
  return <div></div>;
};

const mapStateToProps = (
  state: never,
  { collectionId }: ICollectionOverviewProps
) => ({
  foundCollection: selectCollection(collectionId)(state),
});

export default connect(mapStateToProps)(CollectionOverview);
