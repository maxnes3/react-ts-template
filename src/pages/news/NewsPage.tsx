import { NewsProvider } from '@/hooks/news';
import classes from './styles.module.scss';

export const NewsPage = () => {
  return (
    <NewsProvider>
      <div className={classes.newsPage}></div>
    </NewsProvider>
  );
};
