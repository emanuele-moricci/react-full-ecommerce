import { useState } from "react";

import MenuItem from "../menu-item/menu-item.component";

import sections, { Section } from "./directory.sections";

import "./directory.styles.scss";

const Directory = (): JSX.Element => {
  const [dirSections] = useState<Section[]>(sections);

  return (
    <div className="directory-menu">
      {dirSections.map((section) => (
        <MenuItem key={section.id} {...section} />
      ))}
    </div>
  );
};

export default Directory;
