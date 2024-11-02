// NavBarContext.js
import  { createContext, useContext, useState } from 'react';

const NavBarContext = createContext();

export const PropertyDataProvider = ({ children }) => {
    const [PropertyData, setPropertyData] = useState(['New Projects', 'NEW']); // Or your initial state

    return (
        <NavBarContext.Provider value={{ PropertyData, setPropertyData }}>
            {children}
        </NavBarContext.Provider>
    );
};

export const usePropertyData = () => {
    return useContext(NavBarContext);
};
