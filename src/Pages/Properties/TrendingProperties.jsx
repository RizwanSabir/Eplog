
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

            <section className=" px-[50px] ">
                <div className="max-w-[1140px]  mx-auto">
                    <div className=" flex justify-between items-center ">
                        <div className="w-full flex items-center justify-center gap-10">
                            <h1 className="section-title-small  text-[20px] md:text-[40px]">
                                Trending<br />
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
                                className=" w-[150px]  text-[16px] font-bold leading-[19.23px]  btn-primary text-center py-2 bg-blue-500 text-white py-1 px-2 rounded-[14px]"
                            >
                                View All
                            </a>
                        </div>
                    </div>
                </div>

                <NavBar User={User} setUser={setUser} />

                <ScrollProperty  User={User} Page={1}/>




            </section>



        </>
    )
}





const NavBar = ({ User, setUser }) => {


    let users = [['New Projects', 'NEW'], ['Buy', 'SELL'], ['Rent', 'RENT']]

    return (
        <>

            <div className="flex  flex-row justify-center mt-10 text-[8px] sm:text-[12px] w-[150px] xs:w-[200px] sm:w-[250px]  border  rounded-full">
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