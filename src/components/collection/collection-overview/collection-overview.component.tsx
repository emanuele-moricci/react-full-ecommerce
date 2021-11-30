import { connect } from "react-redux";
import { RootState } from "src/redux/root.store";
import { Collection } from "src/redux/shop/shop.types";
import { selectCollection } from "src/redux/shop/shop.selectors";

import CollectionItem from "src/components/collection/collection-item/collection-item.component";

import "./collection-overview.styles.scss";

interface ICollectionOverviewProps {
  collectionId: string;
  foundCollection?: Collection;
}

const CollectionOverview = ({
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
  state: RootState,
  { collectionId }: ICollectionOverviewProps
) => ({
  foundCollection: selectCollection(collectionId)(state),
});

export default connect(mapStateToProps)(CollectionOverview);
