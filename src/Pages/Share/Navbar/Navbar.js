import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {


    const menuItems = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        {/* <li><Link to='/contactMe'>Contact Me</Link></li> */}
        <li><a href="https://form.jotform.com/223432902621447">Contact Me</a></li>
        <li><Link to='/aboutMe'>About Me</Link></li>
    </React.Fragment>



    return (
        <div className="navbar bg-base-100 mt-4 flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a href='/' className="text-rose-500 font-semibold normal-case text-2xl">My Portfolio</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;