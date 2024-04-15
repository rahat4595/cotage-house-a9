import { Link, NavLink } from "react-router-dom";


const NavBar = () => {


    const links = <>

    <NavLink className={({isActive}) => isActive? 'text-lg font-semibold text-[#23BE0A] border px-1 rounded-md border-[#23BE0A]' : 'text-lg font-semibold'} to="/">Home</NavLink>

    <NavLink className={({isActive}) => isActive? 'text-lg font-semibold text-[#23BE0A] border px-1 rounded-md border-[#23BE0A]' : 'text-lg font-semibold'} to="/listed">Update Profile</NavLink>

    <NavLink className={({isActive}) => isActive? 'text-lg font-semibold text-[#23BE0A] border px-1 rounded-md border-[#23BE0A]' : 'text-lg font-semibold'} to="/pages">User Details</NavLink>

    <NavLink className={({isActive}) => isActive? 'text-lg font-semibold text-[#23BE0A] border px-1 rounded-md border-[#23BE0A]' : 'text-lg font-semibold'} to="/seller">Best Seller</NavLink>
    
    <NavLink className={({isActive}) => isActive? 'text-lg font-semibold text-[#23BE0A] border px-1 rounded-md border-[#23BE0A] ' : 'text-lg font-semibold'} to="/about">Login</NavLink>
</>

    return (
        <div>
        <div className="navbar mt-4 lg:mt-10 bg-base-100 max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            links
                        }
                    </ul>
                </div>
                <h1 className="text-md lg:text-2xl font-bold">Bookish Bliss</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu flex gap-5 menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end flex gap-5">
                <Link >
                <a className="btn bg-[#23BE0A] text-white">Login</a>
                </Link>
               
            </div>
        </div>
    </div>
    );
};

export default NavBar;