import { useSelector } from "react-redux";
import { selectSections } from "src/redux/directory/directory.selectors";

import DirectoryItem from "src/components/directory/directory-item/directory-item.component";

import * as Styled from "./directory.styles";

const Directory = (): JSX.Element => {
  const sections = useSelector(selectSections);

  return (
    <Styled.DirectoryMenu>
      {sections.map((section) => (
        <DirectoryItem key={section.id} {...section} />
      ))}
    </Styled.DirectoryMenu>
  );
};

export default Directory;
