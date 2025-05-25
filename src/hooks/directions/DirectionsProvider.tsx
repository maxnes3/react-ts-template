import { useState, type FC, type ReactNode } from 'react';
import { DirectionsContext } from './context';
import type { DirectionResponseDto } from '@/types/directions';
import { DirectionsService } from '@/api';

const DirectionsContextProvider = DirectionsContext.Provider;

interface DirectionsProviderProps {
  children?: ReactNode;
}

export const DirectionsProvider: FC<DirectionsProviderProps> = ({
  children,
}) => {
  const [directions, setDirections] = useState<DirectionResponseDto[]>([]);

  const fetchDirections = async () => {
    await DirectionsService.getAllDirectionsFn();
    setDirections([]);
  };

  const contextValue = { directions, fetchDirections };

  return (
    <DirectionsContextProvider value={contextValue}>
      {children}
    </DirectionsContextProvider>
  );
};
