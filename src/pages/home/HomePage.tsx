import { Title } from '@/components';
import classes from './styles.module.scss';

export const HomePage = () => {
  return (
    <div className={classes.homePage}>
      <Title name="Главная" />
    </div>
  );
};
