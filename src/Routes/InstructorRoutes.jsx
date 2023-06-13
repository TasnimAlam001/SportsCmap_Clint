import { Navigate, useLocation } from "react-router-dom";
import useInstructor from "../Hooks/isInstructor";
import useAuth from "../Hooks/useAuth";
import { Children } from "react";


const InstructorRoutes = () => {
    const { user, loading } = useAuth();
    const [isInstructor, isInstructorLoading]=useInstructor();
    const location = useLocation();

    if(loading || isInstructorLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isInstructor) {
        return Children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRoutes;