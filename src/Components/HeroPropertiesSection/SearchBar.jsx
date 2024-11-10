import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { div } from 'framer-motion/client';
import { useNavigate } from 'react-router-dom';

import './index.css';
import { useNavBar } from '../../Context/NavBarContext';
import { usePropertyData } from '../../Context/PropertyDataContext';

const SearchBar = () => {

    // Here get all the query params if there exists 
    
    const [UseFilter, setUseFilter] = useState(0);

    const [selectedFilters, setSelectedFilters] = useState();
    const [developers, setDevelopers] = useState([]); // State for developers list
    const { User, setUser } = useNavBar();

    

   const  PropertyType  =[
        {"id": "APARTMENT", "name": "Apartment"},
        {"id": "VILLA", "name": "Villa"},
        {"id": "TOWNHOUSE", "name": "Townhouse"},
        {"id": "PENTHOUSE", "name": "Penthouse"},
        {"id": "HOTEL_APARTMENT", "name": "Hotel Apartment"},
        {"id": "DUPLEX", "name": "Duplex"},
        {"id": "RESIDENTIAL_FLOOR", "name": "Residential Floor"},
        {"id": "RESIDENTIAL_PLOT", "name": "Residential Land"},
        {"id": "RESIDENTIAL_BUILDING", "name": "Residential Building"},
        {"id": "BULK_UNITS", "name": "Bulk Units"},
        {"id": "COMPOUND", "name": "Compound"},
        {"id": "TWIN_HOUSE", "name": "Twin House"},
        {"id": "TRIPLEX", "name": "Triplex"},
        {"id": "LOFT", "name": "Loft"},
        {"id": "LOFT_APARTMENT", "name": "Loft Apartment"},
        {"id": "OFFICE", "name": "Office"},
        {"id": "SHOP", "name": "Shop"},
        {"id": "COMMERCIAL_BUILDING", "name": "Commercial Building"},
        {"id": "COMMERCIAL_FLOOR", "name": "Commercial Floor"},
        {"id": "COMMERCIAL_PLOT", "name": "Commercial Land"},
        {"id": "LABOR_CAMP", "name": "Labor Camp"},
        {"id": "RETAIL", "name": "Retail"},
        {"id": "SHOW_ROOM", "name": "Showroom"},
        {"id": "STAFF_ACCOMMODATION", "name": "Staff accommodation"},
        {"id": "COMMERCIAL_VILLA", "name": "Commercial Villa"},
        {"id": "WAREHOUSE", "name": "Warehouse"},
        {"id": "FARM", "name": "Farm"},
        {"id": "FACTORY", "name": "Factory"},
        {"id": "HOTEL", "name": "Hotel"},
        {"id": "HOSPITAL", "name": "Hospital"},
        {"id": "BULK_UNITS_COMMERCIAL", "name": "Bulk Units"},
        {"id": "GARAGE", "name": "Garage"},
        {"id": "RESTAURANT", "name": "Restaurant"},
        {"id": "BUSINESS_CENTRE", "name": "Business Centre"},
        {"id": "CO_WORKING_SPACE", "name": "Co-Working Space"},
        {"id": "OTHER_COMMERCIAL", "name": "Other Commercial"}
    ]
   

   

    useEffect(() => {
        const fetchDevelopers = async () => {
            try {
                const DevelopersList = await fetch('https://dataapi.pixxicrm.ae/pixxiapi/v1/developer/list', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-PIXXI-TOKEN': 'FjuseQnHvSZy4jTqs8EN6uHfRz85YGv-'
                    },
                    body: JSON.stringify({
                        page: 1,
                        size: 10000
                    })
                });
               
                const DevelopersData = await DevelopersList.json();
                if (DevelopersData.statusCode === 200) {
                    const developersList = DevelopersData.data.list.map(dev => ({ id: dev.id+"", name: dev.name }));
                    setDevelopers(developersList); // Store only id and name
                } else {
                    console.error("Failed to fetch developers");
                }
            } catch (error) {
                console.error("Error fetching developers:", error);
            }
        };
        fetchDevelopers();
    }, []);

    // const Status = ['Post HandOver']
    // const Rooms = Array.from({ length: 20 }, (_, i) => `${i + 1}`);

    
    
        
    const Years = ['2024', '2025', '2026', '2027', '2028', '2029', '2030']
    // Handle the filter change when a developer is selected
    const handleFilterChange = (filterType, value) => {
        
        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            [filterType]: value
        }));
    };
   
    const navigate = useNavigate();
   

    const SearchProperties  = () => {
        // Combine selected filters and listingType into one object
        const searchParams = {...selectedFilters, listingType: User[1]};

        // Convert the search parameters object to a query string
        const queryString = new URLSearchParams(searchParams).toString();

        // Log the data for debugging
        console.log("User is ", searchParams);

        // Navigate to the /SearchProperties route with the query string
        navigate(`/properties?${queryString}`);
    };


    return (
        <>
   
            <div className='flex justify-center mt-5'>
                {/* Show when UserFilter is Not Clicked */}
                {!UseFilter ? <div className='bg-white relative w-[500px] h-[45px] rounded-full overflow-hidden flex border '>
                    <img className='absolute  top-[35%] left-3' src="/Svg/Search.svg" alt="" />
                    <input className='ml-10 h-full w-[700px] outline-none text-[14px]' type="text" placeholder='Search by area or project name' />


                    {UseFilter ? <div className='flex justify-end w-full'>
                        <h1 className='bg-[#82DFDF] rounded-full px-4 py-1 my-1 mr-2 cursor-pointer' onClick={() => { SearchProperties() }} >Search  </h1>
                    </div> : <div className='flex justify-end w-full'>
                        <h1 className='bg-[#82DFDF] rounded-full px-4 py-1 my-1 mr-2 cursor-pointer ' onClick={() => { SearchProperties() }} >Search</h1>
                        <h1 className='b rounded-full px-4 py-1 my-1 mr-2 cursor-pointer' onClick={() => { setUseFilter(!UseFilter) }}>Filter</h1>
                    </div>}
                </div> : ""}
            </div>

            {UseFilter ? <motion.div
                animate={{ height: "auto" }}
                transition={{ duration: 1 }}
                className=" inset-0 z-30 flex justify-center items-center bg-gray-800 bg-opacity-50  rounded relative">

                <div className='bg-white rounded-3xl py-5 px-5'>

                    <div className='bg-white mx-auto relative w-[500px] h-[45px] rounded-full overflow-hidden flex border  '>
                        <img className='absolute  top-[35%] left-3' src="/Svg/Search.svg" alt="" />
                        <input className='ml-10 h-full w-[700px] outline-none text-[14px]' type="text" placeholder='Search by area or project name' />

                        <h1 className='bg-[#82DFDF] rounded-full px-4 py-1 my-1 mr-2 cursor-pointer' onClick={() => { SearchProperties() }}  >Search  </h1>

                    </div>


                    {/* Filter Fields */}
                    <div className="bg-white  rounded-lg  w-[800px] z-50 ">

                        <div className="grid grid-cols-2  gap-x-2    relative   w-[400px] mx-auto">
                            {/* Location */}



                            {/* <DropFilter Name="Years" developers={developers} handleFilterChange={handleFilterChange} /> */}

                            <CustomDropFilter Name="Developers"  Value="developerIds"  developers={developers} handleFilterChange={handleFilterChange} />
                            <CustomDropFilter Name="Property Type" Value="propertyType"  developers={PropertyType} handleFilterChange={handleFilterChange} />

                            {/* <DropFilter Name="HandOver Year" Value="dateStart" developers={Years} handleFilterChange={handleFilterChange} /> */}
                            {/* <DropFilter Name="All Payment" value="" developers={Status} handleFilterChange={handleFilterChange} /> */}





                        </div>
                        <h1 className='bg-[#82DFDF] rounded-full px-4 py-1 w-[100px] ml-auto mt-2  mr-2 cursor-pointer' onClick={() => { setUseFilter(!UseFilter) }} >Close  </h1>
                    </div>
                </div>




            </motion.div> : ""}


   

        </>
    );
};







const DropFilter = ({ Name, Value,developers, handleFilterChange ,Obj}) => {
    const [selectedDevelopers, setSelectedDevelopers] = useState([]); // Store selected developers
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Manage dropdown visibility
    const [searchTerm, setSearchTerm] = useState(''); // Store search term
    const dropdownRef = useRef(null); // Ref for the dropdown

    // Handle the change of developer selection
    const handleSelectChange = (value) => {
        setSelectedDevelopers((prev) => {
            let updatedSelected;
            if (prev.includes(value)) {
                updatedSelected = prev.filter(dev => dev !== value); // Remove if already selected
            } else {
                updatedSelected = [...prev, value]; // Add if not selected
            }
            handleFilterChange(Value, updatedSelected); // Update filter
            return updatedSelected;
        });
    };

    // Handle removal of selected developer
    const handleRemoveDeveloper = (value) => {
        setSelectedDevelopers((prev) => {
            const updatedSelected = prev.filter(dev => dev !== value);
            handleFilterChange(Value, updatedSelected); // Update filter with the updated list
            return updatedSelected;
        });
    };

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Filter developers based on the search term
    const filteredDevelopers = developers.filter(dev => 
        dev.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <motion.div
            key={isDropdownOpen}
            animate={{ height: "auto" }}
            transition={{ duration: 0.5 }}
            className='text-[#bebec0] select-none mt-5'
            ref={dropdownRef} // Attach ref to the dropdown div
        >
         
            <div className='relative'>
                <div
                    className={`w-full text-left flex py-1 px-2 border rounded cursor-pointer ${selectedDevelopers.length >= 1 ? 'scrollbarX' : ''} overflow-y-auto`}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >

                     
                    {/* Display all selected developers with a close button */}
                    <div className='flex gap-x-2 z-50 flex-shrink-0'>
                        {selectedDevelopers.length > 0 ? (
                            selectedDevelopers.map((dev, index) => (
                                <div key={index} className='border-[#82DFDF] border px-2 rounded max-h-fit flex flex-shrink-0'>
                                    <span className='flex items-center'>
                                        <span className='text-[#82DFDF]'>{Obj?dev[1]:dev}</span>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation(); // Prevent dropdown toggle
                                                handleRemoveDeveloper(dev);
                                            }}
                                            className="ml-2 text-[#82DFDF]"
                                            title="Remove"
                                        >
                                            <i className="fa-solid fa-times"></i>
                                        </button>
                                    </span>
                                </div>
                            ))
                        ) : (
                            isDropdownOpen?'':  Name
                        )}
                    </div>
                  

                   {/* Search input */}
                   {isDropdownOpen && (
                        <input
                            type="text"
                            className="w-full  px-2 py-1  rounded text-black outline-none  flex flex-shrink-0"
                            placeholder={`Search ${Name} ...`}
                            value={searchTerm}
                            onClick={(e) => e.stopPropagation()} // Prevent closing dropdown on input click
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    )}


                </div>
                
                {isDropdownOpen && (
    <div className="mt-2 text-black bg-white absolute border overflow-auto z-[150] rounded w-full text-left h-[200px] flex flex-col scrollbar"> {/* Add scrollbar class here */}
        {filteredDevelopers.map((dev, index) => (
            <div
                key={index}
                className="w-full cursor-pointer hover:bg-gray-200 pl-2 flex gap-x-2 items-center"
                onClick={() => handleSelectChange(dev)}
            >
                {/* Show a tick if the developer is selected */}
                {selectedDevelopers.includes(dev) && (
                    <i className="fa-solid fa-check" style={{ color: "#63E6BE" }}></i>
                )}
                <p>{dev}</p>
            </div>
        ))}
    </div>
)}

            </div>
        </motion.div>
    );
};







const CustomDropFilter = ({ Name, Value,developers, handleFilterChange }) => {
    
    const [selectedDevelopers, setSelectedDevelopers] = useState([]); // Store selected developers
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Manage dropdown visibility
    const [searchTerm, setSearchTerm] = useState(''); // Store search term
    const dropdownRef = useRef(null); // Ref for the dropdown

    // Handle the change of developer selection
    const handleSelectChange = (value) => {
        setSelectedDevelopers((prev) => {
            let updatedSelected;
            if (prev.includes(value)) {
                updatedSelected = prev.filter(dev => dev.name !== value.name); // Remove if already selected
            } else {
                updatedSelected = [...prev, value]; // Add if not selected
            }
             // Create an array of selected developer IDs (or names, if that's what you need)
        const selectedIds = updatedSelected.map(dev => dev.id); // Assuming each developer has an 'id' property

        handleFilterChange(Value, selectedIds); // Update filter with selected IDs
            return updatedSelected;
        });
    };

    // Handle removal of selected developer
    const handleRemoveDeveloper = (value) => {
        setSelectedDevelopers((prev) => {
            const updatedSelected = prev.filter(dev => dev.name !== value);
            handleFilterChange(Value, updatedSelected); // Update filter with the updated list
            return updatedSelected;
        });
    };

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Filter developers based on the search term
    const filteredDevelopers = developers.filter(dev => 
        dev.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <motion.div
            key={isDropdownOpen}
            animate={{ height: "auto" }}
            transition={{ duration: 0.5 }}
            className='text-[#bebec0] select-none mt-5'
            ref={dropdownRef} // Attach ref to the dropdown div
        >
            
            <div className='relative'>
                <div
                    className={`w-full text-left flex py-1 px-2 border rounded cursor-pointer ${selectedDevelopers.length >= 1 ? '  scrollbarX' : ''} overflow-y-auto`}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >

                     
                    {/* Display all selected developers with a close button */}
                    <div className='flex gap-x-2 z-50 flex-shrink-0'>
                        {selectedDevelopers.length > 0 ? (
                            selectedDevelopers.map((dev, index) => (
                                <div key={index} className='border-[#82DFDF] border px-2 rounded max-h-fit flex flex-shrink-0'>
                                    <span className='flex items-center'>
                                        <span className='text-[#82DFDF]'>{dev.name}</span>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation(); // Prevent dropdown toggle
                                                handleRemoveDeveloper(dev.name);
                                            }}
                                            className="ml-2 text-[#82DFDF]"
                                            title="Remove"
                                        >
                                            <i className="fa-solid fa-times"></i>
                                        </button>
                                    </span>
                                </div>
                            ))
                        ) : (
                            isDropdownOpen?'':'Select ' + Name
                        )}
                    </div>
                  

                   {/* Search input */}
                   {isDropdownOpen && (
                        <input
                            type="text"
                            className="w-full  px-2 py-1  rounded text-black outline-none  flex flex-shrink-0"
                            placeholder="Search developers..."
                            value={searchTerm}
                            onClick={(e) => e.stopPropagation()} // Prevent closing dropdown on input click
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    )}


                </div>
                
                {isDropdownOpen && (
                    <div className="mt-2 text-black bg-white absolute border overflow-auto  rounded w-full text-left h-[200px] flex flex-col z-[150] scrollbar">
                        {filteredDevelopers.map((dev, index) => (
                            <div
                                key={index}
                                className="w-full cursor-pointer hover:bg-gray-200 pl-2 flex gap-x-2 items-center"
                                onClick={() => handleSelectChange(dev)}
                            >
                                {/* Show a tick if the developer is selected */}
                                {/* Show a tick if the developer is selected */}
            {selectedDevelopers.some(d => d.name === dev.name) && (
                <i className="fa-solid fa-check" style={{ color: "#63E6BE" }}></i>
            )}
                                <p>{dev.name}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
};


export default SearchBar;
