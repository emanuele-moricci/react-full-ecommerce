import { connect } from "react-redux";
import { selectCollection } from "../../../redux/shop/shop.selectors";
import { Collection } from "../../../redux/shop/shop.types";

import CollectionItem from "../collection-item/collection-item.component";

import "./collection-overview.styles.scss";

interface ICollectionOverviewProps {
  collectionId: string;
  foundCollection?: Collection;
}

const CollectionOverview = ({
  collectionId,
  foundCollection,
}: ICollectionOverviewProps): JSX.Element => {
  if (!foundCollection) return <div></div>;

  const { title, items } = foundCollection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (
  state: never,
  { collectionId }: ICollectionOverviewProps
) => ({
  foundCollection: selectCollection(collectionId)(state),
});

export default connect(mapStateToProps)(CollectionOverview);
