import type { DirectionWithQualificationAndProfile } from '@/types/directions';
import { createContext } from 'react';

interface Context {
  directions: DirectionWithQualificationAndProfile[];
  fetchDirections: VoidFunction;
}

export const DirectionsContext = createContext({} as Context);
