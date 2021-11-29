import { useParams } from "react-router-dom";

import "./collection.styles.scss";

const Collection = (): JSX.Element => {
  let { collection } = useParams();

  return (
    <div className="collection-page">
      <h2>{collection?.toUpperCase()} PAGE</h2>
    </div>
  );
};

export default Collection;
