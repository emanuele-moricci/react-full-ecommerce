import { useSelector } from "react-redux";
import { selectSections } from "src/redux/directory/directory.selectors";

import MenuItem from "src/components/layout/menu-item/menu-item.component";

import * as Styled from "./directory.styles";

const Directory = (): JSX.Element => {
  const sections = useSelector(selectSections);

  return (
    <Styled.DirectoryMenu>
      {sections.map((section) => (
        <MenuItem key={section.id} {...section} />
      ))}
    </Styled.DirectoryMenu>
  );
};

export default Directory;
