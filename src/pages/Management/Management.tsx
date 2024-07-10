import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Management = () => {
    return (
        <div className='flex gap-4 justify-between h-screen'>
            <div className='w-2/12 h-screen lg:bg-gray-900 fixed z-50'>
                <Sidebar />
            </div>
            <div className='w-full lg:w-8/12 mx-auto mt-10 flex justify-center'>
                <Outlet />
            </div>
        </div>
    );
};

export default Management;
