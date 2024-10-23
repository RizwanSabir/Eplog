import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const ServerUrl = `${import.meta.env.VITE_REACT_APP_BASE_URL}`

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuItems = [
        { name: 'Home', link: `${ServerUrl}/` },
        { name: 'Services', link: `${ServerUrl}/services/` },
        { name: 'Blogs', link: `${ServerUrl}/blogs/` },
        { name: 'Career', link: `${ServerUrl}/career/` },
        { name: 'Properties', link: `${ServerUrl}/properties/` },
    ];
    

    const variants = {
        open: { y: 0, opacity: 1, transition: { duration: 0.3 } },
        closed: { y: '-100%', opacity: 0, transition: { duration: 0.3 } },
    };

    const listVariants = {
        open: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Stagger the children animations by 0.1 seconds
            },
        },
        closed: {
            opacity: 0,
            transition: {
                staggerChildren: 0.1, // Stagger the closing animations too
                staggerDirection: -1, // Reverse the order when closing
            },
        },
    };

    const itemVariants = {
        open: { y: 0, opacity: 1 },
        closed: { y: 20, opacity: 0 },
    };

    return (
        <nav className="relative z-50">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Toggler Button */}
                <button
                    className="lg:hidden text-black focus:outline-none"
                    type="button"
                    onClick={toggleMenu}
                    aria-controls="navbarSupportedContent"
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                >
                    <FaBars className="text-xl" />
                </button>

                {/* Navbar Items for Large Screens */}
                <div className="hidden w-full lg:flex lg:items-center lg:space-x-4 text-[14px]">
                    {menuItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            className="text-black hover:text-blue-500"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>

            {/* Full-Screen Overlay Menu with AnimatePresence */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-[#7C3EFF] p-4 flex flex-col"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={variants}
                    >
                        <div className="absolute right-5">
                            <button
                                className="text-white text-2xl mb-4"
                                onClick={toggleMenu}
                                aria-label="Close navigation"
                            >
                                <FaTimes />
                            </button>
                        </div>
                        <motion.ul
                            className="flex flex-col items-start space-y-4"
                            variants={listVariants}
                        >
                            {menuItems.map((item, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    transition={{ duration: 0.3 }}
                                >
                                    <a
                                        href={item.link}
                                        className="text-white hover:text-blue-200"
                                    >
                                        {item.name}
                                    </a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
