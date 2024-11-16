import { createContext, useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const NavBarContext = createContext();

export const PropertyDataProvider = ({ children }) => {
    const [searchParams] = useSearchParams();
    const [PropertyData, setPropertyData] = useState({ listingType: "NEW" }); // Initial state

    useEffect(() => {
        const queryParams = Object.fromEntries(searchParams.entries());

        // Convert query parameters to arrays where necessary
        const updatedQueryParams = Object.keys(queryParams).reduce((acc, key) => {
            if (key === "listingType") {
                acc[key] = queryParams[key];
            }else if (key === "SearchName") {
                let words = queryParams[key].split(',');
                words.pop(); // Remove the last word
                acc[key] = words.join(','); // Join the remaining words back into a string
            }
             else if (typeof queryParams[key] === 'string' && queryParams[key].includes(',')) {
                // Convert comma-separated strings to arrays
                acc[key] = queryParams[key].split(',');
            } else {
                acc[key] = Array.isArray(queryParams[key]) ? queryParams[key] : [queryParams[key]];
            }
            return acc;
        }, {});

        console.log("Updated Query Params:", updatedQueryParams);

        if (updatedQueryParams?.listingType) {
            setPropertyData(updatedQueryParams);
        }
    }, [searchParams]);

    return (
        <NavBarContext.Provider value={{ PropertyData, setPropertyData }}>
            {children}
        </NavBarContext.Provider>
    );
};

export const usePropertyData = () => {
    return useContext(NavBarContext);
};
