import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ICONS } from '../../Constants/constants.js';
import Button from '../../REUSABLE/Button/Button.jsx';
import Container from '../../REUSABLE/Container/Container.jsx';
import CustomInput from '../../REUSABLE/Input/CustomInput.jsx';
import { signUpFormValidation } from '../../Validation/signUpFormValidation.js';

import css from './SignUpForm.module.css';
import clsx from 'clsx';
const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(signUpFormValidation),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Container type="section" addClass={css.signUpForm}>
      <h2 className={css.title}>SignUp</h2>

      <form onSubmit={handleSubmit(onSubmit)} autoComplete="on">
        <CustomInput
          label={true}
          labelName="Email"
          labelClass={css.label}
          inputType="email"
          inputClass={css.input}
          placeholder="Enter your email"
          error={errors.email ? true : false}
          {...register('email', {
            onBlur: () => {},
            onFocus: () => {},
          })}
        />
        {errors.email && <p className={css.error}>{errors.email.message}</p>}

        <CustomInput
          label={true}
          labelName="Password"
          labelClass={css.label}
          inputType="password"
          inputClass={css.input}
          placeholder="Enter your password"
          error={errors.password ? true : false}
          {...register('password', {
            onBlur: () => {},
            onFocus: () => {},
          })}
        />
        {errors.password && (
          <p className={css.error}>{errors.password.message}</p>
        )}

        <CustomInput
          label={true}
          labelName="Repeat password"
          labelClass={css.label}
          inputType="password"
          inputClass={css.input}
          placeholder="Repeat password"
          error={errors.repeatPassword ? true : false}
          {...register('repeatPassword', {
            onBlur: () => {},
            onFocus: () => {},
          })}
        />
        {errors.repeatPassword && (
          <p className={css.error}>{errors.repeatPassword.message}</p>
        )}

        <svg className={css.eye} width="20" height="20">
          <use href={ICONS.eye}></use>
        </svg>
        <svg className={css.eye} width="20" height="20">
          <use href={ICONS.eyeOff}></use>
        </svg>

        {/* <label>
          Password
          <input type="password" {...register('password')} />
          {errors.password && <div>{errors.password.message}</div>}
          <svg className={css.eye} width="20" height="20">
            <use href={ICONS.eye}></use>
          </svg>
          <svg className={css.eye} width="20" height="20">
            <use href={ICONS.eyeOff}></use>
          </svg>
        </label> */}
        {/* <label>
          Repeat password
          <input type="password" {...register('repeatPassword')} />
          {errors.repeatPassword && <div>{errors.repeatPassword.message}</div>}
        </label> */}
        <Button addClass={css.signUpBtn} type="submit" disabled={!isValid}>
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default SignUpForm;
