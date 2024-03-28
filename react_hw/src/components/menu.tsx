import React from 'react';
import Switch from "./switch";

interface MenuProps {
    isOpen: boolean;
    lightTheme: boolean
}

const Menu: React.FC<MenuProps> = ({isOpen,lightTheme}) => {

    return (
        <div className={`menu ${isOpen ? 'open' : ''}`}>
            <div>аватар</div>
            <div>аватар</div>
            <Switch/>
        </div>
    );
};

export default Menu;