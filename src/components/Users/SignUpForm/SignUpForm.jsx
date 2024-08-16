import { useForm } from 'react-hook-form';

import { ICONS } from '../../Constants/constants.js';
import Button from '../../REUSABLE/Button/Button.jsx';
import Container from '../../REUSABLE/Container/Container.jsx';
import CustomInput from '../../REUSABLE/Input/CustomInput.jsx';

import css from './SignUpForm.module.css';
const SignUpForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container type="section" addClass={css.signUpForm}>
      <h2 className={css.title}>SignUp</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <CustomInput
          label={true}
          labelName="Email"
          labelClass={css.label}
          inputType="email"
          placeholder="Enter your email"
          {...register('newemail')}
        />
        <label>
          Email
          <input type="email" {...register('email')} />
        </label>
        <label>
          Password
          <input type="password" {...register('password')} />
          <svg className={css.eye} width="20" height="20">
            <use href={ICONS.eye}></use>
          </svg>
          <svg className={css.eye} width="20" height="20">
            <use href={ICONS.eyeOff}></use>
          </svg>
        </label>
        <label>
          Repeat password
          <input type="password" {...register('repeatPassword')} />
        </label>
        <Button addClass={css.signUpBtn} type="submit">
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default SignUpForm;
