import type { FC, ReactNode } from 'react';
import classes from './styles.module.scss';

interface FormFieldProps {
  label: string;
  error?: ReactNode;
  children: ReactNode;
}

export const FormField: FC<FormFieldProps> = ({ label, error, children }) => (
  <div className={classes.field}>
    <label className={classes.label}>{label}</label>
    {children}
    {error && <span className={classes.error}>{error}</span>}
  </div>
);
