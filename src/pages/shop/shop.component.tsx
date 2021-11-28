import { useState } from "react";

import collections, { Collection } from "./shop.collections";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const Shop = (): JSX.Element => {
  const [shopCollections] = useState<Collection[]>(collections);

  return (
    <div className="shop-page">
      {shopCollections.map((collection) => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </div>
  );
};

export default Shop;
