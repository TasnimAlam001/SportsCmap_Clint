// import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaBookOpen, FaBookmark, FaHome, FaUserSecret, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";

import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/isAdmin";
import useInstructor from "../Hooks/isInstructor";

import useUser from "../Hooks/isUser";


const Dashboard = () => {
   


   
    const [isInstructor] = useInstructor();
    const [isAdmin] = useAdmin();
    const [isUser] = useUser();
    

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
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content font-semibold">

                        {
                            isAdmin && <>

                               
                           
                                
                                <li><NavLink to="/dashboard/manageClasses"><FaBook></FaBook>Manage Classes</NavLink></li>
                                <li><NavLink to="/dashboard/allUsers"><FaUsers></FaUsers>Manage Users</NavLink></li>
                            </>

                        }
                        {
                            isInstructor && <>

                                
                                <li><NavLink to="/dashboard/addClass"><FaUtensils></FaUtensils>Add Class</NavLink></li>
                                
                                <li><NavLink to="/dashboard/myClasses"><FaBook></FaBook>My Classes</NavLink></li>
                              
                            </>

                        }
                        {
                            isUser && <>

                                <li className=""><NavLink to="/dashboard/mySelectedClasses"><FaBookmark></FaBookmark> My Selected Classes</NavLink></li>
                                <li><NavLink to="/dashboard/enrolledClass"><FaBookOpen></FaBookOpen> My Enrolled Classes</NavLink></li>
                                <li><NavLink to="/dashboard/paymentHistory"><FaWallet></FaWallet> Payment History</NavLink></li>


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
