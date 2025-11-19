import React from 'react';
import { Link, NavLink } from 'react-router';
import { BsGithub } from "react-icons/bs";
import { CiLineHeight } from "react-icons/ci";

const Navbar = () => {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className="navbar bg-base-100  ">
                <div className="navbar-start">


                    <details className="dropdown lg:hidden">
                        <summary className="btn m-1"><CiLineHeight className='font-bold text-lg' />
                        </summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? "text-[#7a44e9] underline" : "text-text-[#7a44e9] -700"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/apps"
                                    className={({ isActive }) =>
                                        isActive ? "text-[#7a44e9] underline" : "text-text-[#7a44e9] -700"
                                    }
                                >
                                    Apps
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/installation"
                                    className={({ isActive }) =>
                                        isActive ? "text-[#7a44e9] underline" : "text-text-[#7a44e9] -700"
                                    }
                                >
                                    Installation
                                </NavLink>
                            </li>
                        </ul>
                    </details>
                    <Link to={"/"}><button className="btn btn-ghost text-xl"><img src="https://i.ibb.co.com/0pYMDpNR/logo.png" alt="Logo" className='w-40px h-[40px]' /><span className='font-semibold text-[#7a44e9]'>HERO.IO</span></button></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">

                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "text-[#7a44e9] underline" : "text-text-[#7a44e9] -700"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/apps"
                                className={({ isActive }) =>
                                    isActive ? "text-[#7a44e9] underline" : "text-text-[#7a44e9] -700"
                                }
                            >
                                Apps
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/installation"
                                className={({ isActive }) =>
                                    isActive ? "text-[#7a44e9] underline" : "text-text-[#7a44e9] -700"
                                }
                            >
                                Installation
                            </NavLink>
                        </li>



                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='https://github.com/Shaifuzzman-Ratul' target="_blank" className="btn bg-gradient-to-r from-[#6832e5] to-[#8f54ee] text-white"><BsGithub />

                        Contribute</a>
                </div>
            </div>
        </div >
    );
};

export default Navbar;