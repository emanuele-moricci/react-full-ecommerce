import { NavigateFunction, useNavigate } from "react-router-dom";

import { Section } from "src/pages/home/state/directory.types";

import * as Styled from "./directory-item.styles";

interface IDirectoryItemProps extends Section {}

const DirectoryItem = ({
  title,
  imageUrl,
  size,
  linkUrl,
}: IDirectoryItemProps): JSX.Element => {
  const navigate: NavigateFunction = useNavigate(),
    navigateFn = (): void => navigate(`${linkUrl}`);

  return (
    <Styled.DirectoryItemContainer size={size} onClick={navigateFn}>
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
    </Styled.DirectoryItemContainer>
  );
};

export default DirectoryItem;
