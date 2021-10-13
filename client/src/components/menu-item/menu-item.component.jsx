import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const history = useHistory();
  const match = useRouteMatch();
  return (
    <MenuItemContainer
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImageContainer imageUrl={imageUrl} />
      <ContentContainer>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>shop now</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default MenuItem;
