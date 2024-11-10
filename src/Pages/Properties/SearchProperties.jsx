import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import HeroSearchSection from '../../Components/HeroSearchProperties/HeroSection';
import HeroNavBar from '../../Components/HeroSearchProperties/HeroNavBar';
import SearchBar from '../../Components/SearchBar/SearchBar';
import { NavBarProvider, useNavBar } from '../../Context/NavBarContext';
import { PropertyDataProvider } from '../../Context/PropertyDataContext';
import { motion } from 'framer-motion';

const SearchProperties = () => {
  const [searchParams] = useSearchParams();
  const [PropertyUser, setPropertyUser] = useState()

  useEffect(() => {
    // Convert searchParams to a regular object for easier usage
    const queryParams = Object.fromEntries(searchParams.entries());
    console.log("Query Params:", queryParams);

    // Set user based on listingType in query params
    if (queryParams?.listingType) {
      setPropertyUser(queryParams.listingType);
    }
  }, [searchParams]); // Run this effect when searchParams change

  return (
    <>
      <NavBarProvider>
        <PropertyDataProvider>
          <HeroNavBar>
            <NavBar />
            <SearchBar />
          </HeroNavBar>
          <HeroSearchSection />
        </PropertyDataProvider>
      </NavBarProvider>
    </>
  );
};




const NavBar = () => {
  const { User, setUser } = useNavBar();

  let users = [['New Projects', 'NEW'], ['Buy', 'SELL'], ['Rent', 'RENT']]

  return (
    <>

      <div className="flex flex-row justify-center mt-5 text-[8px] sm:text-[12px] w-[150px] xs:w-[200px] sm:w-[250px] mx-auto bg-white rounded-full z-40 ">
        <div className="flex flex-row bgColor py-1 w-full justify-around items-center rounded-3xl ">
          {
            users.map((user) => {
              return (


                user[0] === User[0] ?
                  (<WhiteBackground key={user} user={user} setUser={setUser}>
                    <motion.div className="absolute w-full bg-[#82DFDF] h-full top-0 left-0   rounded-full   -z-10" layoutId="underline" ></motion.div>
                  </WhiteBackground>


                  ) : <WhiteBackground key={user} user={user} setUser={setUser} />

              );
            })
          }




        </div>
      </div>


    </>
  )
}

const WhiteBackground = ({ user, setUser, children }) => {
  return (
    <motion.div key={user} onMouseEnter={() => { setUser(user) }} className={`poppins-regular px-4 py-1   relative z-30 cursor-pointer`}>
      <h1 >{user[0]}</h1>
      {children}


    </motion.div>
  );
};


export default SearchProperties