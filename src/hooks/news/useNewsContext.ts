import { useContext } from 'react';
import { NewsContext } from './context';

export const useNewsContext = () => useContext(NewsContext);
