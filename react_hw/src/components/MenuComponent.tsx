import React, {useEffect, useState} from 'react';
import SwitchComponent from "./SwitchComponent";
import {useSelector} from "react-redux";
import './MenuStyle.css'
import SwithLanguageComponent from "./SwithLanguageComponent";


interface MenuProps {
    isOpen: boolean;
    lightTheme: boolean
}

const MenuComponent: React.FC<MenuProps> = ({isOpen,lightTheme}) => {
    useSelector((state:any) => state.logins.login);
    const [photoUrl, setPhotoUrl] = useState<string | null>(null);
    const [name, setName] = useState<string | null>(null);
    useEffect(() => {
        const localPhoto = localStorage.getItem('photo')
        if (localPhoto){
            setPhotoUrl(localPhoto)
        }
        const userName = localStorage.getItem('userName')
        if (userName){
            setName(userName)
        }
    }, []);
    return (
        <div className={`menu ${isOpen ? 'open' : ''}`}>
            <div className={'menu_inside'}>
                <div className={'menu_center'}>
                    {photoUrl && <img className={'avatar_manu'} src={photoUrl} alt="User Avatar" />}

                    <div className={'userName'}>{name}</div>
                </div>
                <SwitchComponent/>
                <SwithLanguageComponent/>
            </div>

        </div>
    );
};

export default MenuComponent;