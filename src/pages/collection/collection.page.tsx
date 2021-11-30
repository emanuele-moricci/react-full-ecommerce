import { useParams } from "react-router-dom";

import CollectionOverview from "src/components/collection/collection-overview/collection-overview.component";

import "./collection.styles.scss";

const Collection = (): JSX.Element => {
  let { collection } = useParams();

  return (
    <div className="collection-page">
      <CollectionOverview collectionId={collection ?? ""} />
    </div>
  );
};

export default Collection;
