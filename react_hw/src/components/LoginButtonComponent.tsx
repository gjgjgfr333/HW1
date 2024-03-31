import React from 'react';
import './LoginButtonStyle.css'
interface LoginProps {
    isPhotoUploaded: boolean;
    handleLogin: () => void;
}
const LoginButtonComponent: React.FC<LoginProps> = ({isPhotoUploaded, handleLogin}) => {
    return (
        <button className={'logIn'} onClick={handleLogin} disabled={!isPhotoUploaded}>
            Вход
        </button>
    );
};

export default LoginButtonComponent;