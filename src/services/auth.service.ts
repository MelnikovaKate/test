import { knownUsers } from "../constants/knownUsers";

export const AuthService = () => {
    let authorize = (login: string, password: string) => {
        if (knownUsers.some(u => u.login === login && u.password === password)) {
            return {
                isSuccessful: true,
                token: 'evdHdawhdbhvgvwacfgDGdvghwacdahwvdhgvdhavhwvHJVJ@@=',
            }
        }
        return {
            isSuccessful: false,
            token: null
        }
    };

    return { authorize };
}

