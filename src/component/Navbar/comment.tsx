import { Link, NavLink, useLocation } from "react-router-dom";
import logo from '../../assets/logo/campLogo.png'
import { HiOutlineShoppingBag } from "react-icons/hi";
import Hamburger from "hamburger-react";
import { useState } from "react";

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const navItems = [
        { id: 1, link: '/', title: 'Home' },
        { id: 2, link: '/footeware', title: 'Footeware' },
        { id: 3, link: '/backpacks', title: 'Backpacks' },
        { id: 4, link: '/equipments', title: 'Equipments' },
      ];

      
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

    return (
        <nav className="bg-gray-800 fixed top-0 inset-x-0 z-50 shadow-sm">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    
                    <div className='hidden md:block lg:block'>
                        <NavLink to="/" className="flex items-center gap-2 text-white">
                            <img src={logo} className='w-28' alt="" />
                            <Link to='/' className="font-bold text-2xl uppercase">Camping Hub</Link>
                        </NavLink>
                    </div>

                    <div className="hidden md:block lg:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                        {navItems.map(({ id, link, title }) => (
                            <NavLink
                            key={id}
                            to={link}
                            // Color for active page
                            className={` hover:scale-105 px-3 py-2 font-medium hover:border-b border-white translate-x-2 duration-150 rounded-none inline-block ${
                                location.pathname === link ? 'text-white ' : 'text-gray-100'}`} >
                            {title}
                            </NavLink>
                        ))}

                        </div>
                    
                    </div>

                    <div className='hidden md:block lg:block'>
                        <div className='flex items-center gap-4'>
                            <Link to='/login' className='border border-white px-6 py-2 text-white font-medium'> Account</Link>
                            <Link to="/cart" className="flex items-center text-white font-medium gap-2 border border-white px-6 py-2"> 
                            <span>Cart</span>
                            <HiOutlineShoppingBag className="w-6 h-6" />
                            {/* <sup className="bg-red-500 text-white rounded-full px-[6px] py-[10px] -ml-2 mb-3 text-center">{getTotalCartItems()}</sup> */}
                            </Link>   
                        </div>
                    </div>  

                    
                    <div className="-mr-2 flex md:hidden shadow-md text-white">
                        <Hamburger toggled={isOpen} toggle={setIsOpen} />
                    </div>    

                    {/* for mobile */}
                    <div className='block md:hidden lg:hidden'>
                        <NavLink to="/" className="flex items-center gap-2 text-red-500">
                        {/* <BsCart4 className="h-8 w-8" /> */}
                        <img src={logo} className='w-12' alt="" />
                        <Link to='/' className="font-bold text-3xl uppercase">Camping ub</Link>
                        </NavLink>
                    </div>

                    <div className='block md:hidden lg:hidden'>
                        <div className='flex items-center gap-4'>
                            {/* <Link to='/login' className='border border-red-500 rounded-3xl px-6 py-2 text-red-500 font-bold'> Login</Link> */}
                            <Link to="/cart" className="flex items-center px-4 text-red-500 font-bold">
                            <HiOutlineShoppingBag className="w-6 h-6" />
                            {/* <sup className="bg-red-500 text-white rounded-full px-[6px] py-[10px] -ml-2 mb-3 text-center">{getTotalCartItems()}</sup> */}
                            </Link>   
                        </div>
                    </div>

                    


                </div>
            </div>
        </nav>
    );
};

export default Navbar;