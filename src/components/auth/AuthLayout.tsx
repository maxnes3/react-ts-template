import type { FC, ReactNode } from 'react';
import classes from './styles.module.scss';
import { AuthForm } from './from/AuthForm';
import { useAuthContext } from '@/hooks/auth';

interface AuthLayoutProps {
  children?: ReactNode;
}

export const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  const { account } = useAuthContext();

  return (
    <div className={classes.authLayout}>
      {!account && (
        <aside className={classes.authAside}>
          <AuthForm />
        </aside>
      )}
      {children}
    </div>
  );
};
