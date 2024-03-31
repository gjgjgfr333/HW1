import React from 'react';
import './BurgerStyle.css'
interface OpenOrNot {
    isOpen: boolean
    setIsOpen : (isOpen : boolean) => any
}
const BurgerComponent : React.FC<OpenOrNot> = ({ isOpen, setIsOpen })=> {
    const handlerOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className={`burger-menu ${isOpen ? 'burger-to-cross' : ''}`} id="burger" onClick={handlerOpen}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
    );
};

export default BurgerComponent;