import { json, NavLink, useLocation } from "react-router-dom";
import { FaCartPlus, FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getStoreCartList } from "../Utilities/AddToDb";


const Navbar = () => {

    const location = useLocation()
    // const cartStr = getStoreCartList('cart-list')
    // const [cartCount, setCartCount] = useState(cartStr.length)
    // useEffect(() => {
    //     const cartStr = getStoreCartList('cart-list')
    //     setCartCount(cartStr.length)
    // }, [cartCount])

    return (
        <div className="w-11/12 mx-auto mt-5">
            <div className={`navbar  rounded-tl-xl  rounded-tr-xl pt-5 lg:px-20 ${location.pathname == '/statistics' || location.pathname == '/dashboard' || location.pathname == '/alloffers' || location.pathname == '/dashboard/cartlist' || location.pathname == '/dashboard/wishlist' || location.pathname == '/details/Microsoft%20Surface%20Laptop%20Studio' || location.pathname == '/details/Apple%20iPhone%2015%20Pro%20Max' || location.pathname == '/details/MacBook%20Pro%2016-inch' || location.pathname == '/details/Sony%20Wireless%20Headphones' || location.pathname == '/details/Apple%20AirPods%20Pro%20(2nd)' || location.pathname == '/details/Samsung%20Galaxy%20S23%20Ultra' || location.pathname == '/details/Dell%20XPS%2013%20Plus' || location.pathname == '/details/Bose%20QuietComfort%2045' || location.pathname == '/details/Asus%20ROG%20Zephyrus%20G14' || location.pathname == '/details/Samsung%20Galaxy%20Buds%202%20Pro' || location.pathname == '/details/Google%20Pixel%207%20Pro' || location.pathname == '/details/HP%20Spectre%20x360' || location.pathname == '/details/Lenovo%20ThinkPad%20X1' ? 'bg-white text-black mb-3' : 'bg-[#9538E2] text-white'}`}>
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
                            <NavLink to='/alloffers'>Offers</NavLink>
                        </ul>
                    </div>
                    <NavLink to='/' className="text-xl font-bold">Gadget Heaven</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-12 text-xl font-bold">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/statistics' className={({ isActive }) => `${isActive ? "bg-[#9538E2] text-white py-1 px-2 rounded-xl" : ''}`}>Statistics</NavLink>
                        <NavLink to='/dashboard' className={({ isActive }) => `${isActive ? "bg-[#9538E2] text-white py-1 px-2 rounded-xl" : ''}`}>Dashboard</NavLink>
                        <NavLink to='/alloffers' className={({ isActive }) => `${isActive ? "bg-[#9538E2] text-white py-1 px-2 rounded-xl" : ''}`}>Offers</NavLink>
                    </ul>
                </div>
                <div className="navbar-end gap-4 text-2xl text-black">
                    <span className="bg-white p-5 rounded-full">< FaCartPlus /> <span className="absolute top-9 right-60 text-red-600 "></span></span>
                    <span className="bg-white p-5 rounded-full"><FaRegHeart /></span>
                </div>
            </div>
        </div >
    );
};

export default Navbar;