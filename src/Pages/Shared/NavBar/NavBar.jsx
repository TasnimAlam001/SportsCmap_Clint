import { Link } from "react-router-dom";
import logo from '../../../assets/Logo/SportsCampLogo.png'
import useAuth from "../../../Hooks/useAuth";
import useSelectedClass from "../../../Hooks/useSelectedClass";
import useUser from "../../../Hooks/isUser";
import useAdmin from "../../../Hooks/isAdmin";
import useInstructor from "../../../Hooks/isInstructor";

const NavBar = () => {
    const { user, LogOut } = useAuth();
    const [selectedClass] = useSelectedClass();
    const [isUser]= useUser();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();



    const handleLogOut = () => {
        LogOut()
            .then(() => { })
            .then(error => console.log(error))

    }

    const navItems = <>

        <li><Link to="/">Home</Link></li>
        {
            
                user && <li><Link to={
                    isAdmin ? "/dashboard/allUsers" :  isInstructor ?  "/dashboard/myClasses": "/dashboard/mySelectedClasses"
                    
                    
                
                    
                }>Dashboard

             {
                isUser &&
                <small>
                    {
                        selectedClass && <div className="badge badge-secondary subscript">+{selectedClass.length || "0"}</div>
                    }
                </small>

            } </Link></li>
        }
        <li><Link to="/instructor">Instructors</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        <li><Link to="/secret">Secret</Link></li>

    </>

    return (

        <div className="navbar fixed z-10 bg-slate-700 opacity-80 text-white lg:px-48">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black font-bold">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"><img className="w-[150px] bg-white px-1 rounded-2xl" src={logo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>

                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {
                                        user ? <><img src={user?.photoURL} alt="" /></> : <> <img src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} /></>
                                    }

                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black font-bold">
                                <li>
                                    <a className="justify-between">
                                        {user?.displayName}

                                    </a>
                                </li>

                                <li><button onClick={handleLogOut}>Logout</button></li>
                            </ul>
                        </div>
                    </>

                        : <>
                            <button className="btn btn-outline text-white btn-ghost"><Link to="/login" > Login</Link></button>

                        </>
                }

            </div>
        </div>
    );
};

export default NavBar;