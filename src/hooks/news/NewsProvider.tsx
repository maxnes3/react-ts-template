import { useState, type FC, type ReactNode } from 'react';
import { NewsContext } from './context';
import type { NewsWithAuthor } from '@/types/news';
import { NewsService } from '@/api';

const NewsContextProvider = NewsContext.Provider;

interface NewsProviderProps {
  children?: ReactNode;
}

export const NewsProvider: FC<NewsProviderProps> = ({ children }) => {
  const [news, setNews] = useState<NewsWithAuthor[]>([]);

  const fetchNews = async () => {
    const response = await NewsService.getAllNewsFn();
    setNews(response);
  };

  const contextValue = { news, fetchNews };

  return (
    <NewsContextProvider value={contextValue}>{children}</NewsContextProvider>
  );
};
