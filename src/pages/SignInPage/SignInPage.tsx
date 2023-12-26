import React from 'react';
import styles from './SignInPage.module.less';
import { SignInForm } from './signInForm';
import { knownUsers } from 'constants/knownUsers';
import { SignInLabel } from 'enums/SignInLabel';

export const SignInPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.usersContainer}>
                {knownUsers.map(user => (
                    <div className={styles.usersData}>
                        <span><b>{SignInLabel.Username}:</b> {user.login}</span>
                        <span><b>{SignInLabel.Password}:</b> {user.password}</span>
                    </div>
                ))}
            </div>
            <SignInForm />
        </div>
    );
};
