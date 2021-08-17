import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import { DirectoryMenuContainer } from "./directory.styles";

const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...props }) => (
      <MenuItem key={id} {...props} />
    ))}
  </DirectoryMenuContainer>
);

export default Directory;
