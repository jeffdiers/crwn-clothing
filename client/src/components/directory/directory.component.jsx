import React from "react";
import { useSelector } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item.component";

import { DirectoryMenuContainer } from "./directory.styles";

const Directory = () => {
  const sections = useSelector(selectDirectorySections);

  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...props }) => (
        <MenuItem key={id} {...props} />
      ))}
    </DirectoryMenuContainer>
  );
};

export default Directory;
