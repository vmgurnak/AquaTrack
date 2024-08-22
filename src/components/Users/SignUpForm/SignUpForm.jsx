import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';

import { ICONS } from '../../Constants/constants.js';
import Button from '../../REUSABLE/Button/Button.jsx';
import Container from '../../REUSABLE/Container/Container.jsx';
import CustomInput from '../../REUSABLE/Input/CustomInput.jsx';
import { signUpFormValidation } from '../../Validation/signUpFormValidation.js';

import css from './SignUpForm.module.css';

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(signUpFormValidation),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container type="div" addClass={css.form}>
      <h2 className={css.title}>SignUp</h2>

      <form onSubmit={handleSubmit(onSubmit)} autoComplete="on" noValidate>
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
          inputType={showPassword ? 'text' : 'password'}
          inputClass={css.input}
          placeholder="Enter your password"
          error={errors.password ? true : false}
          {...register('password', {
            onBlur: () => {},
            onFocus: () => {},
          })}
        >
          <svg className={css.eyeIcon} onClick={toggleShowPassword}>
            <use href={showPassword ? ICONS.eye : ICONS.eyeOff}></use>
          </svg>
        </CustomInput>
        {errors.password && (
          <p className={css.error}>{errors.password.message}</p>
        )}

        <CustomInput
          label={true}
          labelName="Repeat password"
          labelClass={css.label}
          inputType={showPassword ? 'text' : 'password'}
          inputClass={css.input}
          placeholder="Repeat password"
          error={errors.repeatPassword ? true : false}
          {...register('repeatPassword', {
            onBlur: () => {},
            onFocus: () => {},
          })}
        >
          <svg className={css.eyeIcon} onClick={toggleShowPassword}>
            <use href={showPassword ? ICONS.eye : ICONS.eyeOff}></use>
          </svg>
        </CustomInput>
        {errors.repeatPassword && (
          <p className={css.error}>{errors.repeatPassword.message}</p>
        )}

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
        <Button
          addClass={css.button}
          type="submit"
          disabled={!isDirty || !isValid}
        >
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default SignUpForm;
