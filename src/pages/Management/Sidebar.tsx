import { NavLink, useLocation } from 'react-router-dom';

interface SidebarProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
    const location = useLocation();
    const navItems = [
        { id: 1, link: '/management/allProduct', title: 'All Products' },
        { id: 2, link: '/management/addProduct', title: 'Add Product' },
        { id: 3, link: '/management/allBookings', title: 'All Bookings' },
        { id: 4, link: '/', title: 'Home' },
    ];

    return (
        <div className={`fixed ${isOpen ? 'hidden' : 'block'} w-64 bg-gray-800 h-full`}>
            <div className='my-8'>
                <h1 className='text-lg text-white text-center font-bold'>Admin Dashboard</h1>
            </div>
            <div className='bg-gray-800 text-white flex flex-col h-screen px-8 py-4 gap-8'>
                {navItems.map(({ id, link, title }) => (
                    <NavLink
                        key={id}
                        to={link}
                        className={`hover:scale-105 px-3 py-2 font-medium hover:border-b border-white duration-150 rounded-none inline-block ${
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

export default Sidebar;
