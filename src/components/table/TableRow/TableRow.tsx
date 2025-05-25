import type { DirectionWithQualificationAndProfile } from '@/types';
import type { FC } from 'react';

interface TableRowProps {
  direction: DirectionWithQualificationAndProfile;
}

export const TableRow: FC<TableRowProps> = ({ direction }) => (
  <tr>
    <td>{direction.code}</td>
    <td>{direction.name}</td>
    <td>{direction.profile}</td>
  </tr>
);
