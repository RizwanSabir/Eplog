// NavBarContext.js
import  { createContext, useContext, useState } from 'react';

const NavBarContext = createContext();

export const NavBarProvider = ({ children }) => {
    const [User, setUser] = useState(['New Projects', 'NEW']); // Or your initial state

    return (
        <NavBarContext.Provider value={{ User, setUser }}>
            {children}
        </NavBarContext.Provider>
    );
};

export const useNavBar = () => {
    return useContext(NavBarContext);
};
