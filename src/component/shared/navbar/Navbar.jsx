import React, { useState } from 'react';
import { BiBarChart, BiHome, BiMenu, BiX } from 'react-icons/bi';
import { IoTimeOutline } from 'react-icons/io5';
import { TfiStatsUp } from 'react-icons/tfi';
import { Link, NavLink } from 'react-router';
import logo from "../../../assets/images/logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinkClass = ({ isActive }) =>
        `${isActive ? "bg-[#244D3F] text-white" : "text-gray-700"}
         flex items-center gap-2 px-4 py-2 rounded-lg hover:text-green-600 transition-colors`;

    return (
        <nav className="border-b">
            <div className="container mx-auto px-4">

                {/* Top Bar */}
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <Link to="/">
                        <img src={logo} alt="logo" className="h-10" />
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-4 text-sm">

                        <li>
                            <NavLink to="/" className={navLinkClass}>
                                <BiHome size={18} />
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/timeline" className={navLinkClass}>
                                <IoTimeOutline size={18} />
                                Timeline
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/stats" className={navLinkClass}>
                                <TfiStatsUp size={18} />
                                Stats
                            </NavLink>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-2xl"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <BiX /> : <BiMenu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <ul className="md:hidden flex flex-col gap-3 py-4 text-sm">

                        <li>
                            <NavLink to="/" onClick={() => setIsOpen(false)} className={navLinkClass}>
                                <BiHome size={18} />
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/timeline" onClick={() => setIsOpen(false)} className={navLinkClass}>
                                <IoTimeOutline size={18} />
                                Timeline
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/stats" onClick={() => setIsOpen(false)} className={navLinkClass}>
                                <TfiStatsUp size={18} />
                                Stats
                            </NavLink>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;