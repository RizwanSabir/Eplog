
import React, { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import CustomLoader from "../../Components/Loaders/CustomLoader";
import ScrollProperty from "../../Components/ScrollProperty/ScrollProperty";

const TrendingProperties = () => {

    let [User, setUser] = useState(['New Projects', 'NEW']);
    const url = `${import.meta.env.VITE_REACT_APP_BASE_URL}`;

  
    return (
        <>

            <section className="px-10 sm:px-[50px] ">
                <div className="max-w-[1140px]  mx-auto">
                    <div className=" flex justify-between items-center ">
                        <div className="w-full flex items-center justify-between mdm:gap-10">
                            <h1 className="section-title-small grow w-[190px] text-[25px] leading-[20px] mdm:leading-[40px] sm:text-[20px] md:text-[40px] ">
                                Trending
                                Properties
                            </h1>
                            <div className="line hidden md:flex">
                                <img
                                    src="https://eplogproperties.com/wp-content/themes/dtheme/assets/images/dashed-line-black.svg"
                                    className="w-full"
                                    alt="dashed-line"
                                />
                            </div>
                            <a
                                href={`${url}/properties/`}
                                className=" w-[150px]  text-[12px] sm:text-[17px] md:text-[20px] font-bold leading-[19.23px]  btn-primary text-center sm:py-2 bg-blue-500 text-white py-1 px-1 sm:px-2 rounded-[14px]"
                            >
                                View All
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-y-4 sm:gap-10  mdm:mt-10">
                          <div className="w-[272px]  flex items-center  ">
                          <NavBar User={User} setUser={setUser} />

                          </div>
                            
                            
                            <div className=" flex  gap-x-4">
                                <div className="border border-black size-[50px] rounded-full flex justify-center items-center text-black">
                                    <i className="fa-solid fa-chevron-left"></i>
                                </div>
                                <div className="border border-black size-[50px] rounded-full flex justify-center items-center text-black">
                                    <i className="fa-solid fa-chevron-right"></i>
                                </div>


                            </div>
                        </div>

                <ScrollProperty  User={User} Page={1}/>




            </section>



        </>
    )
}





const NavBar = ({ User, setUser }) => {


    let users = [['New Projects', 'NEW'], ['Buy', 'SELL'], ['Rent', 'RENT']]

    return (
        <>

            <div className="flex  flex-row justify-center mt-10 sm:mt-0  text-[10px] leading-[25px] sm:leading-[30px]  w-full sm:text-[12px] xs:w-[200px] sm:w-[250px]  border  rounded-full">
                <div className="flex flex-row bgColor py-1 w-full justify-around items-center rounded-3xl ">
                    {
                        users.map((user) => {
                            return (


                                user[0] === User[0] ?
                                    (<WhiteBackground key={user} user={user} setUser={setUser}>
                                        <motion.div className="absolute w-full bg-[#82DFDF] h-full top-0 left-0   rounded-full   -z-10" layoutId="trending" ></motion.div>
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









export default TrendingProperties