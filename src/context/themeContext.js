import React, { createContext, useState, useContext } from 'react';


export const ThemeContext = createContext(null);


export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
export const useTheme = () => {
    const { theme } = useContext(ThemeContext);
    const { setTheme } = useContext(ThemeContext);
    return { theme, setTheme };

};

