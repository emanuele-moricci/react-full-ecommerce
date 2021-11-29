import { useParams } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";

import "./collection.styles.scss";

const Collection = (props: any): JSX.Element => {
  let { collection } = useParams();

  return (
    <div className="collection-page">
      <h2>{collection?.toUpperCase()} PAGE</h2>
      <CollectionOverview collectionId={collection ?? ""} />
    </div>
  );
};

export default Collection;
