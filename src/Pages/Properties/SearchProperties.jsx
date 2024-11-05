import React from 'react'
import HeroSearchSection from '../../Components/HeroSearchProperties/HeroSection'
import HeroPropertiesSection from '../../Components/HeroPropertiesSection/HeroSection'
import HeroNavBar from '../../Components/HeroSearchProperties/HeroNavBar'
import SearchBar from '../../Components/SearchBar/SearchBar'
import { NavBarProvider, useNavBar } from '../../Context/NavBarContext'

import {motion} from 'framer-motion'
import { PropertyDataProvider } from '../../Context/PropertyDataContext'
const SearchProperties = () => {


  return (
    <>
<PropertyDataProvider>
      <HeroNavBar>
        
        <NavBarProvider>
          <NavBar  />
          <SearchBar />
        </NavBarProvider>

      </HeroNavBar>

      <HeroSearchSection />
      </PropertyDataProvider>



    </>
  )
}


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