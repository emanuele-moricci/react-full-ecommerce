import { NavigateFunction, useNavigate } from "react-router-dom";

import { Section } from "src/redux/directory/directory.types";

import * as Styled from "./menu-item.styles";

interface IMenuItemProps extends Section {}

const MenuItem = ({
  title,
  imageUrl,
  size,
  linkUrl,
}: IMenuItemProps): JSX.Element => {
  const navigate: NavigateFunction = useNavigate(),
    navigateFn = (): void => navigate(`${linkUrl}`);

  return (
    <Styled.MenuItemContainer size={size} onClick={navigateFn}>
      <Styled.BackgroundImage
        className="background-image"
        imageUrl={imageUrl}
      />
      <Styled.ContentContainer className="content">
        <Styled.ContentTitle className="title">
          {title.toUpperCase()}
        </Styled.ContentTitle>
        <Styled.ContentSubtitle className="subtitle">
          SHOP NOW
        </Styled.ContentSubtitle>
      </Styled.ContentContainer>
    </Styled.MenuItemContainer>
  );
};

export default MenuItem;
