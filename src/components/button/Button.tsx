import type { FC, ReactNode } from 'react';
import classes from './styles.module.scss';
import cn from 'classnames';

interface Props {
  children?: ReactNode;
  onClick?: VoidFunction;
  className?: string;
  type?: 'button' | 'submit';
}

export const Button: FC<Props> = ({
  children,
  onClick: handleClick,
  className,
  type = 'button',
}) => {
  return (
    <button
      className={cn(classes.button, className)}
      onClick={handleClick}
      type={type}
    >
      {children}
    </button>
  );
};
