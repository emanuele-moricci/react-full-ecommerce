import { Section } from "../directory/directory.sections";
import { NavigateFunction, useNavigate } from "react-router-dom";

import "./menu-item.styles.scss";

interface IMenuItemProps extends Section {}

const MenuItem = ({
  id,
  title,
  imageUrl,
  size,
  linkUrl,
}: IMenuItemProps): JSX.Element => {
  const navigate: NavigateFunction = useNavigate(),
    navigateFn = (): void => navigate(`${linkUrl}/${id}`);

  return (
    <div className={`${size} menu-item`} onClick={navigateFn}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
