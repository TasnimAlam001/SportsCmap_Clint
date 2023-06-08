
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';

function SignUp() {
    const { createUser } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
    };

    return (
        <div className='bgImg min-h-screen flex items-center '>


            <form onSubmit={handleSubmit(onSubmit)} className=" w-1/3  shadow-2xl rounded-lg m-5 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm">
                        <div className="card-body">
                            <h1 className="text-center text-3xl font-extrabold">Sign Up</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Name</span>
                                </label>
                                <input type="text" placeholder="Name"  {...register("name", { required: true, maxLength: 14 })} className="input input-bordered" />
                                {errors.name && <span className="text-red-600 font-bold">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">PhotoURL</span>
                                </label>
                                <input type="text" placeholder="PhotoURL"  {...register("photoURL", { required: true })} className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold ">Email</span>
                                </label>
                                <input type="email" placeholder="Email" {...register("email", { required: true })} className="input input-bordered" />
                                {errors.email && <span className="text-red-600">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold ">Password</span>
                                </label>
                                <input type="password" placeholder="password" {...register("password", {
                                    required: true,
                                    maxLength: 20,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600" role="alert">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600" role="alert">Password have to be more then six letters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600 bg-slate-300 p-2 rounded-md" role="alert">Password must have one Upper case, one special character, one number and a lower case</p>}

                            </div>

                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="SignUp" />
                            </div>
                            <p className='text-center font-bold'><small>Already Have an account? <Link to="/login">LogIn</Link></small></p>

                        </div>
                    </div>

                </div>
            </form>
        </div>
    );
}

export default SignUp;
