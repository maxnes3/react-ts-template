import { useNewsContext } from '@/hooks/news';
import { useEffect } from 'react';
import { Card, Title } from '@/components';
import classes from './styles.module.scss';

export const NewsPage = () => {
  const { news, fetchNews } = useNewsContext();

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.newsPage}>
      <Title name="Новости" />
      <div className={classes.container}>
        {news.length > 0 &&
          news.map((newsItem) => <Card key={newsItem.title} news={newsItem} />)}
      </div>
    </div>
  );
};
