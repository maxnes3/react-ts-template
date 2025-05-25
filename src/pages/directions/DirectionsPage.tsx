import { Table, Title } from '@/components';
import classes from './styles.module.scss';
import { useDirectionsContext } from '@/hooks/directions';
import { useEffect } from 'react';

export const DirectionsPage = () => {
  const { directions, fetchDirections } = useDirectionsContext();

  useEffect(() => {
    fetchDirections();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.directionsPage}>
      <Title name="Направления обучения" />
      <Table directions={directions} />
    </div>
  );
};
