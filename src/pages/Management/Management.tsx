import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { FaBars, FaBell, FaSearch } from "react-icons/fa";

const Management = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex">
            <Sidebar setIsOpen={setIsOpen} isOpen={isOpen} />
            <div className={`flex flex-col w-full ${isOpen ? '' : 'ml-64'}`}>
                <div className="bg-gray-800 px-4 py-3 flex justify-between items-center">
                    <div className="flex items-center text-xl">
                        <FaBars onClick={() => setIsOpen(!isOpen)} className="text-white me-4 cursor-pointer" />
                        <span className="text-white font-semibold">Camping Shop</span>
                    </div>
                    <div className="flex items-center gap-x-5">
                        <div className="relative md:w-64">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <button className="p-1 focus:outline-none text-wrap md:text-black">
                                    <FaSearch />
                                </button>
                            </span>
                            <input type="text" className="w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block" />
                        </div>
                        <div className="text-white">
                            <FaBell />
                        </div>
                        <div>
                            <h1 className="text-white">Nothing</h1>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Management;
