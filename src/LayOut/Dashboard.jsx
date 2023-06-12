// import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaBookOpen, FaBookmark, FaHome, FaUserSecret, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";

import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {


    // TODO:njvljv
    const isAdmin = true;
    const isStudent = false;

    return (
        <div>

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content ">

                        {
                            isAdmin && <>

                                <li><NavLink to="/dashboard/home"><FaHome></FaHome>Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/additem"><FaUtensils></FaUtensils>Add Items</NavLink></li>
                                <li><NavLink to="/dashboard/manageitem"><FaWallet></FaWallet>Manage Items</NavLink></li>
                                <li><NavLink to="/dashboard/history"><FaBook></FaBook>Manage Bookings</NavLink></li>
                                <li><NavLink to="/dashboard/allUsers"><FaUsers></FaUsers>All Users</NavLink></li>
                            </>

                        }
                        {
                            isStudent && <>

                                <li className=""><NavLink to="/dashboard/mySelectedClasses"><FaBookmark></FaBookmark> My Selected Classes</NavLink></li>
                                <li><NavLink to="/dashboard/home"><FaBookOpen></FaBookOpen> My Enrolled Classes</NavLink></li>
                                <li><NavLink to="/dashboard/home"><FaWallet></FaWallet> Payment History</NavLink></li>


                            </>
                        }

                        <div className="divider"></div>
                        <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                        <li><NavLink to="/classes"><FaBookOpen></FaBookOpen> Classes</NavLink></li>
                        <li><NavLink to="/instructor"><FaUserSecret></FaUserSecret> Instructors</NavLink></li>
                        



                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;