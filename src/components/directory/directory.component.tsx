import { useState } from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Section } from "src/redux/directory/directory.types";
import { selectSections } from "src/redux/directory/directory.selectors";

import MenuItem from "src/components/layout/menu-item/menu-item.component";

import * as Styled from "./directory.styles";

interface IDirectoryProps {
  sections: Section[];
}

const Directory = ({ sections }: IDirectoryProps): JSX.Element => {
  const [dirSections] = useState<Section[]>(sections);

  return (
    <Styled.DirectoryMenu>
      {dirSections.map((section) => (
        <MenuItem key={section.id} {...section} />
      ))}
    </Styled.DirectoryMenu>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectSections,
});

export default connect(mapStateToProps)(Directory);
