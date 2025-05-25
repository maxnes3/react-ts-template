import type { AuthRequestDto } from '@/types';
import { Button } from '@/components';
import { useForm } from 'react-hook-form';
import { FormField } from '../field/FormField';
import { useAuthContext } from '@/hooks/auth';
import classes from './styles.module.scss';
import cn from 'classnames';

export const AuthForm = () => {
  const { loginInAccount } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthRequestDto>();

  const onSubmit = async (data: AuthRequestDto) => {
    loginInAccount(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.authForm}>
      <FormField label="Телефон" error={errors.phone && 'Телефон обязателен'}>
        <input
          type="tel"
          {...register('phone', { required: true, valueAsNumber: true })}
          placeholder="Введите телефон"
          className={cn(classes.input, { [classes.isError]: errors.phone })}
        />
      </FormField>
      <FormField label="Пароль" error={errors.password && 'Пароль обязателен'}>
        <input
          type="password"
          {...register('password', { required: true })}
          placeholder="Введите пароль"
          className={cn(classes.input, { [classes.isError]: errors.password })}
        />
      </FormField>
      <Button type="submit" className={classes.submit}>
        Войти
      </Button>
    </form>
  );
};
