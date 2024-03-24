import React, { useState } from 'react';
import '../healper/style.css';
import { useNavigate} from "react-router-dom";

const ForLoginPage = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate()

    const handleLogin = () => {
        const containsUpperCase = /[A-Z]/.test(password);
        const containsPunctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(password);

        let error = '';

        if (login.length < 6) {
            error = 'Логин должен содержать минимум 6 символов';
        }
        if (login.length > 12) {
            error = 'Логин должен содержать максимум 12 символов';
        }
        if (password.length < 8 || password.length > 14 || !containsUpperCase || containsPunctuation) {
            error = 'Пароль должен содержать от 8 до 14 символов, хотя бы одну заглавную букву, ' +
                'одну цифру и без знаков препинания';
        }
        if (password !== repeatPassword) {
            error = 'Пароль и повтор пароля не совпадают';
        }

        setErrorMessage(error);

        if (!error) {
            console.log('Логин и пароль верны');
            navigate('/pages/main')

        }
    };

    return (
        <div className={'login_block'}>
            <div className={'avatar'}></div>
            <input
                className={'input_login'}
                type={'text'}
                placeholder={'LOGIN'}
                value={login}
                onChange={(e) => setLogin(e.target.value)}
            />
            <input
                className={'input_login'}
                type={'password'}
                placeholder={'PASSWORD'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                className={'input_login'}
                type={'password'}
                placeholder={'REPEAD PASSWORD'}
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
            />
            <div className={'error_message'}>{errorMessage}</div>
            <button className={'logIn'} onClick={handleLogin}>Вход</button>
        </div>
    );
};

export default ForLoginPage;
