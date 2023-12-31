import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { FaGoogle } from "react-icons/fa";



const SocialLogin = () => {

    const {googleSignIn} = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";


    const handleGoogleSignIn =()=>{
        googleSignIn()
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            const saveUser = {name: loggedUser.displayName, email: loggedUser.email, role: "user"}
            fetch('https://assignment-12-server-gamma-bice.vercel.app/users',{
                            method: 'POST',
                            headers:{
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(() => {
                                    navigate(from, { replace: true });
                                
                            })


           
        })
    }

    return (
        <div>
            <div className="divider text-black"></div>
            <div className="w-full text-center my-4">
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline font-bold text-blue-950">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
