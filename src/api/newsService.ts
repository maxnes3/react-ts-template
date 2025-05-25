import type { AuthResponseDto } from '@/types';
import type { NewsResponseDto, NewsWithAuthor } from '@/types/news';
import { axiosConfig } from './axiosConfig';

export const NewsService = {
  getAllNewsFn: async (): Promise<NewsWithAuthor[]> => {
    const [newsRes, usersRes] = await Promise.all([
      axiosConfig.get<NewsResponseDto[]>('/news'),
      axiosConfig.get<AuthResponseDto[]>('/users'),
    ]);

    const usersMap = new Map(usersRes.data.map((u) => [u.id, u.name]));

    return newsRes.data.map((news) => ({
      ...news,
      author: usersMap.get(news.author_id)!,
    }));
  },
};
