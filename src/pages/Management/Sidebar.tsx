import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = ({ isOpen }) => {
    const location = useLocation();
    const navItems = [
        { id: 1, link: '/management/allProduct', title: 'All Products' },
        { id: 2, link: '/management/addProduct', title: 'Add Product' },
        { id: 3, link: '/', title: 'Home' },
    ];

    return (
        <div className={`${isOpen ? 'hidden' : 'block w-64'} bg-gray-800 fixed h-full`}>
            <div className='my-8'>
                <h1 className='text-lg text-white text-center font-bold'>Admin Dashboard</h1>
            </div>
            <div className='bg-gray-800 text-white flex flex-col h-screen px-8 py-4 gap-8 w-56'>
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

export default Sidebar;
