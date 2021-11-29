import { useState } from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selectors";
import { Collection } from "../../redux/shop/shop.types";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

interface IShopProps {
  collections: Collection[];
}

const Shop = ({ collections }: IShopProps): JSX.Element => {
  const [shopCollections] = useState<Collection[]>(collections);

  return (
    <div className="shop-page">
      {shopCollections.map((collection) => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(Shop);
