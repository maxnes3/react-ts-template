import type { NewsWithAuthor } from '@/types/news';
import { createContext } from 'react';

interface Context {
  news: NewsWithAuthor[];
  fetchNews: VoidFunction;
}

export const NewsContext = createContext({} as Context);
