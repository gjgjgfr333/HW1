import React, {useState} from 'react';
import './LoginStyle.css'
import {useNavigate} from "react-router-dom";
import AvatarComponent from "../../components/AvatarComponent";
import LoginButtonComponent from "../../components/LoginButtonComponent";
import {useDispatch} from "react-redux";
import {setLogins} from "../../redux/slice";



const ForLoginPage = () => {
    const [isPhotoUploaded, setIsPhotoUploaded] = useState<boolean>(false);
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [repeatPassword, setRepeatPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleLogin = () => {
        const containsUpperCase: boolean = /[A-Z]/.test(password);
        const containsPunctuation: boolean = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(password);


        let error: string = '';

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
            dispatch(setLogins ( login) )

        }
    };

    return (
        <div className={'login_block'}>
            <AvatarComponent onPhotoUpload={setIsPhotoUploaded}/>
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
            <LoginButtonComponent isPhotoUploaded={isPhotoUploaded} handleLogin={handleLogin}/>
        </div>
    );
};

export default ForLoginPage;
