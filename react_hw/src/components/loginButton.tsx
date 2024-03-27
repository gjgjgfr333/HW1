import React from 'react';
interface LoginProps {
    isPhotoUploaded: boolean;
    handleLogin: () => void;
}
const LoginButton: React.FC<LoginProps> = ({isPhotoUploaded, handleLogin}) => {
    return (
        <button className={'logIn'} onClick={handleLogin} disabled={!isPhotoUploaded}>
            Вход
        </button>
    );
};

export default LoginButton;