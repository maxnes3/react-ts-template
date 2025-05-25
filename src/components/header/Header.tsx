import { useNavigate } from 'react-router-dom';
import { RoutesPahEnum } from '@/types';
import { Button } from '../button';
import { useState } from 'react';
import FaviconImg from '@assets/icons/favicon.png';
import BurgerMenuIcon from '@assets/icons/burger-menu.svg';
import classes from './styles.module.scss';

export const Header = () => {
  const [isCollapse, setIsCollapse] = useState(false);
  const navigate = useNavigate();

  const handleFaviconClick = () => {
    navigate(RoutesPahEnum.HOME);
  };

  const handleNewsClick = () => {
    navigate(RoutesPahEnum.NEWS);
  };

  const handleDirectionsClick = () => {
    navigate(RoutesPahEnum.DIRECTIONS);
  };

  const handleToggleClick = () => {
    setIsCollapse((prev) => !prev);
  };

  const collapseButtons = (
    <>
      <Button className={classes.headerButton} onClick={handleNewsClick}>
        Новости
      </Button>
      <Button className={classes.headerButton} onClick={handleDirectionsClick}>
        Направления
      </Button>
    </>
  );

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Button className={classes.favicon} onClick={handleFaviconClick}>
          <img src={FaviconImg} alt={FaviconImg} />
        </Button>
        <div className={classes.desktop}>{collapseButtons}</div>
        <Button
          className={classes.burgerMenuButton}
          onClick={handleToggleClick}
        >
          <BurgerMenuIcon />
        </Button>
      </div>
      {isCollapse && <div className={classes.mobile}>{collapseButtons}</div>}
    </header>
  );
};
