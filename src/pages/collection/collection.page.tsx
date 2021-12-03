import { useParams } from "react-router-dom";

import CollectionOverview from "src/components/collection/collection-overview/collection-overview.component";

import * as Styled from "./collection.styles";

const Collection = (): JSX.Element => {
  let { collection } = useParams();

  return (
    <Styled.CollectionPage>
      <CollectionOverview collectionId={collection ?? ""} />
    </Styled.CollectionPage>
  );
};

export default Collection;
