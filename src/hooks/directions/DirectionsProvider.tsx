import { useState, type FC, type ReactNode } from 'react';
import { DirectionsContext } from './context';
import type { DirectionWithQualificationAndProfile } from '@/types/directions';
import { DirectionsService } from '@/api';

const DirectionsContextProvider = DirectionsContext.Provider;

interface DirectionsProviderProps {
  children?: ReactNode;
}

export const DirectionsProvider: FC<DirectionsProviderProps> = ({
  children,
}) => {
  const [directions, setDirections] = useState<
    DirectionWithQualificationAndProfile[]
  >([]);

  const fetchDirections = async () => {
    const response = await DirectionsService.getAllDirectionsFn();
    setDirections(response);
  };

  const contextValue = { directions, fetchDirections };

  return (
    <DirectionsContextProvider value={contextValue}>
      {children}
    </DirectionsContextProvider>
  );
};
