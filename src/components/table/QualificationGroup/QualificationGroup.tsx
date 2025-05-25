import type { DirectionWithQualificationAndProfile } from '@/types/directions';
import { TableRow } from '../TableRow';
import type { FC } from 'react';
import classes from './styles.module.scss';

interface QualificationGroupProps {
  qualification: string;
  directions: DirectionWithQualificationAndProfile[];
}

export const QualificationGroup: FC<QualificationGroupProps> = ({
  qualification,
  directions,
}) => (
  <>
    <tr>
      <td colSpan={3} className={classes.qualification}>
        {qualification}
      </td>
    </tr>
    {directions.map((dir) => (
      <TableRow key={dir.code + dir.profile + dir.name} direction={dir} />
    ))}
  </>
);
