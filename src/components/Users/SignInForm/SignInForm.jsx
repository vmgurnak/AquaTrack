import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';

import { ICONS } from '../../Constants/constants.js';
import Button from '../../REUSABLE/Button/Button.jsx';
import Container from '../../REUSABLE/Container/Container.jsx';
import CustomInput from '../../REUSABLE/Input/CustomInput.jsx';
import { signInFormValidation } from '../../Validation/signInFormValidation.js';

import css from './SignInForm.module.css';

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(signInFormValidation),
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
      <h2 className={css.title}>SignIn</h2>

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

        <Button
          addClass={css.button}
          type="submit"
          disabled={!isDirty || !isValid}
        >
          Sign Ip
        </Button>
      </form>
    </Container>
  );
};

export default SignInForm;
