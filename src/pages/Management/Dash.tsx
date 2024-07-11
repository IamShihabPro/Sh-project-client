import { FaBars, FaBell, FaSearch } from "react-icons/fa";

const Dash = ({setIsOpen, isOpen}) => {
    return (
        <div className={`${isOpen ?'' : ' ml-64' } bg-gray-800 px-4 py-3 flex justify-between w-full`}>
            <div className="flex items-center text-xl">
                <FaBars onClick={() => setIsOpen(!isOpen)} className="text-white me-4 cursor-pointer" />
                <span className="text-white font-semibold">Camping Shop</span>
            </div>

            <div className="flex items-center gap-x-5">
                <div className="relative md:w-64">
                    <span className="relative md:absolute inset-y-0 left-0 flex items-centerpl-2"> 
                        <button className="p-1 focus:outline-none text-wrap md:text-black"> <FaSearch/> </button> </span>
                    <input type="text" className="w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block" />
                </div>

                <div className="text-white">
                    <FaBell/>
                </div>

                <div>
                    <h1 className="text-white">Nothing</h1>
                </div>
            </div>
        </div>
    );
};

export default Dash;