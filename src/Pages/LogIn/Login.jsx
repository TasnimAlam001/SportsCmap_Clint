// import { useState } from 'react';
// import { FaUserLock } from "react-icons/fa";
import { Link, useLocation, useNavigate} from 'react-router-dom';
import './Login.css'
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import SocialLogin from '../../Componenets/SocialLogin/SocialLogin';

function Login() {
    const {signIn} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || "/";

    
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    icon: 'success',
                    title: 'Successfully Logged In',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log("Error :", error.message)
                
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: `ERROR: ${error.message} `
                  })
            })
    }

    return (
        <div className='bgImg min-h-screen flex items-center'>


            <form onSubmit={handleLogin} className=" w-1/3 bg-transparent shadow-2xl rounded-lg m-5 ">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    
                    <div className="card flex-shrink-0 w-full ">
                        <div className="card-body">
                            <h1 className="text-center text-3xl font-extrabold">Let`s LogIn</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover font-bold">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <p className='font-bold text-center'><small>New Here ? <Link to="/signUp">SignUp</Link></small></p>

                            <SocialLogin></SocialLogin>
                            
                        </div>
                    </div>

                </div>
            </form>
        </div>
    );
}

export default Login;
