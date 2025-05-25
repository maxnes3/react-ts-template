import type { DirectionResponseDto } from '@/types/directions';
import { createContext } from 'react';

interface Context {
  directions: DirectionResponseDto[];
  fetchDirections: VoidFunction;
}

export const DirectionsContext = createContext({} as Context);
