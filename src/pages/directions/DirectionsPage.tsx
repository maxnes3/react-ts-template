import { DirectionsProvider } from '@/hooks/directions';
import classes from './styles.module.scss';

export const DirectionsPage = () => {
  return (
    <DirectionsProvider>
      <div className={classes.directionsPage}></div>
    </DirectionsProvider>
  );
};
