// import { useState } from 'react';
// import { FaUserLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Login.css'

function Login() {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // handle login logic here
    // };

    return (
        <div className='bgImg min-h-screen flex items-center justify-center'>


            <form className=" w-1/3 bg-transparent shadow-2xl rounded-lg m-5 ">
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
                            
                        </div>
                    </div>

                </div>
            </form>
        </div>
    );
}

export default Login;
