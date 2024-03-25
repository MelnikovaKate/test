import React, { useState, useEffect, useCallback } from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Input from 'antd/es/input';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import styles from './SignInForm.module.less';
import { AuthService } from 'services';
import { useDispatch } from 'react-redux';
import { Path } from 'enums';
import { useNavigate } from 'react-router-dom';
import {  useFormik } from 'formik';
import { validationSchema } from './validation/validationSchema';
import { initUserData } from 'constants/initUserData';
import { SignInFormText } from 'enums/SignInFormText';
import { SignInLabel } from 'enums/SignInLabel';
import { changeAuthAction } from 'store/auth.slice';

export const SignInForm = () => {
    const [size] = useState<SizeType>('large');
    const [error, setError] = useState(false);
    const { authorize } = AuthService();
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleSubmit = (username: string, password: string) => {
        let authResult = authorize(username, password);
        setError(true);

        if (authResult.isSuccessful){
            dispatch(changeAuthAction({ token: authResult.token!, username: username  }))
            navigate(`/${Path.BeersList}`);
            setError(false);
        }
    }

    const formik = useFormik({
        initialValues: initUserData,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            setError(true);
            handleSubmit(values.username, values.password);
        },
    });
    
    return (
        <form onSubmit={formik.handleSubmit} className={styles.container}>
            <UserOutlined className={styles.icon} />
            <div className={styles.inputGroup}>
                <Input
                    addonBefore={<UserOutlined />}
                    placeholder={SignInLabel.Username}
                    className={styles.input}
                    size={size}
                    name='username'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                />
                    {(formik.touched.username && formik.errors.username )&& 
                        <p className={styles.errorText}>{formik.errors.username}</p>
                    }
                <Input.Password
                    addonBefore={<LockOutlined />}
                    placeholder={SignInLabel.Password}
                    size={size}
                    name='password'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {(formik.touched.password && formik.errors.password) && 
                    <p className={styles.errorText}>{formik.errors.password}</p>
                }
            </div>
            <button type="submit" className={styles.button}>
                {SignInFormText.Submit}
            </button>
            {error && (
                <div className={styles.errorMessage}>{SignInFormText.ErrorMessage}</div>
            )}
        </form>
    );
};