import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Comment = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const navItems = [
        { id: 1, link: '/management/allProduct', title: 'All Product' },
        { id: 2, link: '/management/addProduct', title: 'Add Product' },
        { id: 3, link: '/', title: 'Home' },
    ];

    return (
        <div>
            <div className='flex justify-between items-center px-8 font-serif'>
                <div className='flex flex-row items-center gap-4'>
                    <FaBars onClick={toggleNavbar} className='text-2xl lg:hidden cursor-pointer' />
                    <Link to='/' className='text-3xl font-bold block lg:hidden'>Dashboard</Link>
                </div>

                {/* Mobile device */}
                <div className={`fixed h-full w-screen bg-white/50 lg:hidden backdrop-blur-sm top-0 right-0 transition duration-300 ease-in-out ${isOpen ? 'flex' : 'hidden'}`}>
                    <div className='bg-gray-800 text-white flex flex-col absolute left-0 top-0 h-screen z-50 p-8 gap-8 w-56'>
                        <IoClose onClick={toggleNavbar} className='mt-0 mb-8 text-2xl cursor-pointer' />
                        {navItems.map(({ id, link, title }) => (
                            <NavLink
                                key={id}
                                to={link}
                                className={`hover:scale-105 px-3 py-2 font-medium hover:border-b border-white translate-x-2 duration-150 rounded-none inline-block ${
                                    location.pathname === link ? 'text-white' : 'text-gray-400'
                                }`}
                            >
                                {title}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>

            {/* Large screen */}
            <div className='h-screen hidden lg:flex lg:flex-col bg-gray-800 p-8'>
                {navItems.map(({ id, link, title }) => (
                    <NavLink
                        key={id}
                        to={link}
                        className={`hover:scale-105 px-3 py-2 font-medium hover:border-b border-white translate-x-2 duration-150 rounded-none inline-block ${
                            location.pathname === link ? 'text-white' : 'text-gray-400'
                        }`}
                    >
                        {title}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default Comment;
