import { NavLink } from "react-router-dom";
import { FaCartPlus, FaRegHeart } from "react-icons/fa";


const Navbar = () => {
    return (
        <div className="w-11/12 mx-auto mt-5">
            <div className="navbar bg-[#9538E2] text-white rounded-tl-xl rounded-tr-xl px-5 lg:px-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/statistics'>Statistics</NavLink>
                            <NavLink to='/dashboard'>Dashboard</NavLink>
                        </ul>
                    </div>
                    <NavLink to='/' className="text-xl font-bold">Gadget Heaven</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-12 text-xl font-bold">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/statistics'>Statistics</NavLink>
                        <NavLink to='/dashboard'>Dashboard</NavLink>
                    </ul>
                </div>
                <div className="navbar-end gap-4 text-2xl">
                    <FaCartPlus /> <FaRegHeart />
                </div>
            </div>
        </div>
    );
};

export default Navbar;