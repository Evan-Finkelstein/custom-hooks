import React from 'react';
import { Link } from 'react-router-dom'
import { useTheme } from '../../context/themeContext';
import styles from './Header.css'



const Header = () => {
    const { theme, setTheme } = useTheme()

    const toggleTheme = ({ target }) => {
        if (target.checked) setTheme('dark');
        else setTheme('light')
    }


    return (
        <div className={`${styles[theme]}`}>
            Dark Mode  <input type='checkbox' onChange={toggleTheme} />
            <Link to={'/'}>Home</Link>
        </div>)
}
    ;


export default Header;

