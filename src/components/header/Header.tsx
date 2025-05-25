import { useNavigate } from 'react-router-dom';
import { RoutesPahEnum } from '@/types';
import { Button } from '../button';
import { useState } from 'react';
import { useAuthContext } from '@/hooks/auth';
import BurgerMenuIcon from '@assets/icons/burger-menu.svg';
import classes from './styles.module.scss';

export const Header = () => {
  const { account } = useAuthContext();
  const [isCollapse, setIsCollapse] = useState(false);
  const navigate = useNavigate();

  const handleFaviconClick = () => {
    navigate(RoutesPahEnum.HOME);
    setIsCollapse((prev) => !prev);
  };

  const handleNewsClick = () => {
    navigate(RoutesPahEnum.NEWS);
    setIsCollapse((prev) => !prev);
  };

  const handleDirectionsClick = () => {
    navigate(RoutesPahEnum.DIRECTIONS);
    setIsCollapse((prev) => !prev);
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
          <img src="https://is.ulstu.ru/Images/logo_1_1.png" alt="logo" />
        </Button>
        <div className={classes.desktop}>{collapseButtons}</div>
        {account && <p>{account.name}</p>}
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
