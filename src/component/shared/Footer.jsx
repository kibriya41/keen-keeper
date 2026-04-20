import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoFacebook } from 'react-icons/io';
import { RiInstagramFill } from 'react-icons/ri';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-[#0F4A3F] text-white py-12 border-t border-[#1E6B5A]">
            <div className="max-w-4xl mx-auto px-6">
                {/* Main Content */}
                <div className="text-center">
                    <div className="inline-block rounded-lg px-10 py-4">
                        <h2 className="text-4xl font-semibold mb-3 tracking-wide">KeenKeeper</h2>

                        <p className="text-gray-300 max-w-md mx-auto text-sm ">
                            Your personal vault of meaningful connections.
                            Browse, tend, and nurture the relationships that matter most.
                        </p>
                    </div>

                    <div className="mb-10">
                        <p className="font-semibold text-xl mb-4">Social Links</p>
                        <div className="flex justify-center gap-4">
                            <Link
                                href="#"
                                className="w-10 h-10 bg-white hover:bg-white/20 transition-colors rounded-full flex items-center justify-center text-black"
                                aria-label="Facebook"
                            >
                                <RiInstagramFill />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 bg-white hover:bg-white/20 transition-colors rounded-full flex items-center justify-center text-black"
                                aria-label="Instagram"
                            >
                                <IoLogoFacebook />

                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 bg-white hover:bg-white/20 transition-colors rounded-full flex items-center justify-center text-black"
                                aria-label="Twitter / X"
                            >
                               <FaXTwitter />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
                    <p>© 2026 KeenKeeper. All rights reserved.</p>

                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;