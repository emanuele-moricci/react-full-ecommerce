import { useState } from "react";

import collections, { Collection } from "./shop.collections";

const Shop = (): JSX.Element => {
  const [collection] = useState<Collection[]>(collections);

  return <div>SHOP PAGE</div>;
};

export default Shop;
