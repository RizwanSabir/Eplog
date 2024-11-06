
import React, { useRef, useState } from "react";
import { motion } from 'framer-motion';
import { div } from "framer-motion/client";
import ScrollProperty from "../../Components/ScrollProperty/ScrollProperty";

const ExploreProperties = () => {

    let [User, setUser] = useState(['New Projects', 'NEW']);

    const url = `${import.meta.env.VITE_REACT_APP_BASE_URL}`;

 

    return (
        <>

            <section className="section px-[50px] bg-slate-500">
                <h1 className="section-title-small text-white  text-center text-[20px] md:text-[40px]">
                    Explore Properties
                </h1>
                <div className="max-w-[1140px]  mx-auto">
                    <div className=" flex justify-between items-center mt-10">
                        <div className="w-full flex items-center justify-center gap-10 ">
                            <NavBar User={User} setUser={setUser} />

                            <div className="line hidden md:flex">
                                <img
                                    src="https://eplogproperties.com/wp-content/themes/dtheme/assets/images/dashed-line-black.svg"
                                    className="w-full"
                                    alt="dashed-line"
                                />
                            </div>
                            
                            <div className=" flex  gap-x-4">
                                <div className="border border-white size-[50px] rounded-full flex justify-center items-center text-white">
                                    <i className="fa-solid fa-chevron-left"></i>
                                </div>
                                <div className="border border-white size-[50px] rounded-full flex justify-center items-center text-white">
                                    <i className="fa-solid fa-chevron-right"></i>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>


<ScrollProperty  User={User} Page={1}/>

                <div>
                    <div className="bg-white w-[200px] h-[50px] rounded-full ml-auto flex justify-center gap-x-3 items-center ">
                        
                        <a
                                href={`${url}/properties/`}
                                className=" text-[16px] font-bold leading-[19.23px]"
                            >
                                View All
                            </a>
                        <div className="bg-black size-[35px] rounded-full text-white flex justify-center items-center " >
                        <i className="fa-solid fa-arrow-right"></i>
                        </div>

                    </div>
                </div>


            </section>



        </>
    )
}





const NavBar = ({ User, setUser }) => {


    let users = [['Buy', 'SELL'], ['New Projects', 'NEW'], ['Rent', 'RENT']]

    return (
        <>

            <div className="flex  flex-row justify-center  text-[8px] sm:text-[12px] w-[150px] xs:w-[200px] sm:w-[250px]  bg-white  rounded-full">
                <div className="flex flex-row bgColor py-1 w-full justify-around items-center rounded-3xl ">
                    {
                        users.map((user) => {
                            return (


                                user[0] === User[0] ?
                                    (<WhiteBackground key={user} user={user} setUser={setUser}>
                                        <motion.div className="absolute w-full bg-[#82DFDF] h-full top-0 left-0   rounded-full   -z-10" layoutId="explore" ></motion.div>
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





export default ExploreProperties