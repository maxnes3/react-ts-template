import type { FC } from 'react';
import type { DirectionWithQualificationAndProfile } from '@/types';
import { QualificationGroup } from './QualificationGroup';
import classes from './styles.module.scss';

interface TableProps {
  directions: DirectionWithQualificationAndProfile[];
}

export const Table: FC<TableProps> = ({ directions }) => {
  if (directions.length === 0) {
    return <p>No directions available.</p>;
  }

  const grouped = directions.reduce<
    Record<string, DirectionWithQualificationAndProfile[]>
  >((acc, dir) => {
    if (!acc[dir.qualification]) acc[dir.qualification] = [];
    acc[dir.qualification].push(dir);
    return acc;
  }, {});

  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th>Код</th>
          <th>Направление</th>
          <th>Профиль</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(grouped).map(([qualification, dirs]) => (
          <QualificationGroup
            key={qualification}
            qualification={qualification}
            directions={dirs}
          />
        ))}
      </tbody>
    </table>
  );
};
