import * as Yup from 'yup';

export const signUpFormValidation = Yup.object().shape({
  email: Yup.string()
    .email('Must be a valid email!')
    .required('Email is required!'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters!')
    .required('Password is required!'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Repeat password is required'),
});
