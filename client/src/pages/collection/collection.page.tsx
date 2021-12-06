import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectIsFetching } from "src/pages/shop/state/shop.selectors";

import CollectionOverviewComponent from "src/pages/collection/components/collection-overview.component";
import Spinner from "src/components/_common/layout/spinner/spinner.component";

import * as Styled from "./collection.styles";

const Collection = (): JSX.Element => {
  let { collection } = useParams();
  const loading = useSelector(selectIsFetching);

  return loading ? (
    <Spinner />
  ) : (
    <Styled.CollectionPage>
      <CollectionOverviewComponent collectionId={collection ?? ""} />
    </Styled.CollectionPage>
  );
};

export default Collection;
