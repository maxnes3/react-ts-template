import type { NewsWithAuthor } from '@/types';
import type { FC } from 'react';
import classes from './styles.module.scss';

interface CardProps {
  news: NewsWithAuthor;
}

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
};

export const Card: FC<CardProps> = ({ news }) => {
  const { title, author, created } = news;

  return (
    <div className={classes.card}>
      <h2 className={classes.title}>{title}</h2>
      <span className={classes.info}>
        Автор: {author} от {formatDate(created)}
      </span>
    </div>
  );
};
