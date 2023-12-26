import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    username: Yup
        .string()
        .min(5, 'The username should contain at least 5 characters')
        .max(25, 'The username should contain no more than 25 characters')
        .matches(/^[A-Za-z0-9]+$/u, 'Wrong format. You can only use numbers and letters')
        .required('Username is required'),
    password: Yup
        .string()
        .min(5, 'The password should contain at least 5 characters')
        .max(25, 'The password should contain no more than 25 characters')
        .matches(/^[A-Za-z0-9]+$/u, 'Wrong format. You can only use numbers and letters')
        .required('Password is required'),
});