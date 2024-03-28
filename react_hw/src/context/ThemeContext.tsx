import React, {createContext, useState} from 'react';
interface ContextProps {
    isDarkMode : boolean,
    toggleTheme : () => void
}
 export const ThemeContext = createContext<ContextProps>({
     isDarkMode: true,
     toggleTheme: () => {},
 })
interface Props {
    children?: React.ReactNode
}
const ThemeProvider : React.FC<Props> =  ({children}) => {
    const [darkTheme, setDarkTheme] = useState(true)
    const toggleThemeHandler = () => {
        setDarkTheme((prevState)=> !prevState)
    }
    return (
        <ThemeContext.Provider
            value={{
                isDarkMode: darkTheme,
                toggleTheme: toggleThemeHandler,
            }}
            >
            {children}
        </ThemeContext.Provider>
    )
}
export default  ThemeProvider


