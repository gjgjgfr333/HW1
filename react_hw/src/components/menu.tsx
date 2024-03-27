import React from 'react';

interface MenuProps {
    isOpen: boolean;
}

const Menu: React.FC<MenuProps> = ({isOpen}) => {
    return (
        <div className={`menu ${isOpen ? 'open' : ''}`}>
            <div>аватар</div>
            <div>аватар</div>
            <div>аватар</div>
        </div>
    );
};

export default Menu;