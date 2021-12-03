import { useParams } from "react-router-dom";

import CollectionOverviewContainer from "src/components/collection/collection-overview/collection-overview.container";

import * as Styled from "./collection.styles";

const Collection = (): JSX.Element => {
  let { collection } = useParams();

  return (
    <Styled.CollectionPage>
      <CollectionOverviewContainer collectionId={collection ?? ""} />
    </Styled.CollectionPage>
  );
};

export default Collection;
