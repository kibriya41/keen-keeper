import React from 'react';
import { BiBarChart, BiHome } from 'react-icons/bi';
import { CgLock } from 'react-icons/cg';
import { IoTimeOutline } from 'react-icons/io5';
import { TfiStatsUp } from 'react-icons/tfi';
import { Link, NavLink } from 'react-router';
import logo from "../../../assets/images/logo.png"

const Navbar = () => {
    return (
        <nav className="">

            {/* Main Navbar */}
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                <Link to="/">
                    <img src={logo} alt="" />
                </Link>

                {/* Navigation Links */}
                <ul className="flex items-center gap-4 text-sm">

                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => `${isActive ? "bg-[#244D3F] text-white rounded-lg px-4 py-3 flex " : ""}flex gap-2  hover:text-green-600 transition-colors`}
                        >
                            <BiHome size={18} />
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/timeline"
                            className="flex items-center gap-2 hover:text-green-600 transition-colors" className={({ isActive }) => `${isActive ? "bg-[#244D3F] text-white rounded-lg px-4 py-3 flex " : ""}flex gap-2  hover:text-green-600 transition-colors`}
                        >
                            <IoTimeOutline size={18} />

                            Timeline
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="stats"
                            className="flex items-center gap-2 hover:text-green-900 transition-colors" className={({ isActive }) => `${isActive ? "bg-[#244D3F] text-white rounded-lg px-4 py-3 flex " : ""}flex gap-2  hover:text-green-600 transition-colors`}
                        >
                            <TfiStatsUp size={18} />

                            Stats
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;