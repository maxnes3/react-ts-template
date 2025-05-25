import type { FC } from 'react';
import classes from './styles.module.scss';

interface TitleProps {
  name: string;
}

export const Title: FC<TitleProps> = ({ name }) => {
  return <h2 className={classes.title}>{name}</h2>;
};
