import { connect } from "react-redux";
import { RootState } from "src/redux/root.store";
import { Collection } from "src/redux/shop/shop.types";
import {
  selectCollection,
  selectIsFetching,
} from "src/redux/shop/shop.selectors";

import CollectionItem from "src/components/collection/collection-item/collection-item.component";

import WithSpinner from "src/components/HOC/with-spinner/with-spinner.component";

import * as Styled from "./collection-overview.styles";

interface ICollectionOverviewProps {
  collectionId: string;
  foundCollection?: Collection | null;
  loading?: boolean;
}

const CollectionOverview = ({
  foundCollection,
  loading,
}: ICollectionOverviewProps): JSX.Element => {
  return WithSpinner(
    <Styled.CollectionOverview>
      <Styled.Title>{foundCollection?.title}</Styled.Title>
      <Styled.Items>
        {foundCollection?.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </Styled.Items>
    </Styled.CollectionOverview>
  )(loading ?? false);
};

const mapStateToProps = (
  state: RootState,
  { collectionId }: ICollectionOverviewProps
) => ({
  foundCollection: selectCollection(collectionId)(state),
  loading: selectIsFetching(state),
});

export default connect(mapStateToProps)(CollectionOverview);
