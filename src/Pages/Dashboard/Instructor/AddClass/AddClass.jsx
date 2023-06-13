import { useForm } from "react-hook-form";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/iseAxiousSecure";
import Swal from "sweetalert2";

const AddClass = () => {
    const { user } = useAuth();
    const [axiosSecure]= useAxiosSecure();
    const { register, handleSubmit,reset, formState: { errors } } = useForm();




    const onSubmit = data => {
        const newData = {class_name:data.class_name, instructor_name: user?.displayName, email:user.email , image: data.class_image, description: data.description, start_date:data.date, available_slots: parseInt(data.slots), duration: data.duration, location: data.location, price: parseFloat(data.price), age_range: data.ageRange}
        
        axiosSecure.post('/newClass', newData)
                .then(data => {
                    console.log('after posting ', data.data)
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
        
        console.log(newData)};












    return (
        <div className="w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full shadow-2xl rounded-lg m-5 ">
                <div className="hero-content w-full flex-col lg:flex-row-reverse">
                    <div className="card w-1/2 ">
                        <div className="card-body w-full">
                            <h1 className="text-center text-3xl font-extrabold">Add a class</h1>
                            <div className="">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Class Name</span>
                                    </label>
                                    <input type="text" placeholder="Class Name"  {...register("class_name", { required: true, maxLength: 24 })} className="input input-bordered" />
                                    {errors.class_name && <span className="text-red-600 ">This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Class Image</span>
                                    </label>
                                    <input type="text" placeholder="Class Image"  {...register("class_image", { required: true })} className="input input-bordered" />
                                    {errors.class_image && <span className="text-red-600">This field is required</span>}
                                </div>

                            </div>
                            <div className="">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold ">Instructor Name</span>
                                    </label>
                                    <input type="email" placeholder={user?.displayName} readOnly className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold ">Instructor Email</span>
                                    </label>
                                    <input type="email" placeholder={user?.email} readOnly className="input input-bordered" />

                                </div>

                            </div>
                            <div className="grid md:grid-cols-2 gap-4">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold ">Start Date</span>
                                    </label>
                                    <input type="date" placeholder="Date" {...register("date", { required: true })} className="input input-bordered" />
                                    {errors.date && <span className="text-red-600">This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold ">Duration</span>
                                    </label>
                                    <input type="text" placeholder="Duration of the class" {...register("duration", { required: true })} className="input input-bordered" />
                                    {errors.duration && <span className="text-red-600">This field is required</span>}
                                </div>

                            </div>
                            <div className="grid md:grid-cols-2  gap-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold ">Available Slots</span>
                                    </label>
                                    <input type="number" placeholder="Available Slots" {...register("slots", { required: true })} className="input input-bordered" />
                                    {errors.slots && <span className="text-red-600">This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold ">Price</span>
                                    </label>
                                    <input type="number" placeholder="Price" {...register("price", { required: true })} className="input input-bordered" />
                                    {errors.price && <span className="text-red-600">This field is required</span>}
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2  gap-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold ">Age Range</span>
                                    </label>
                                    <input type="text" placeholder="Age Range" {...register("ageRange", { required: true })} className="input input-bordered" />
                                    {errors.ageRange && <span className="text-red-600">This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold ">Location</span>
                                    </label>
                                    <input type="text" placeholder="Location" {...register("location", { required: true })} className="input input-bordered" />
                                    {errors.location && <span className="text-red-600">This field is required</span>}
                                </div>

                            </div>



                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold ">Description</span>
                                </label>
                                <textarea type="text" placeholder="Description" {...register("description", { required: true })} className="input input-bordered h-20" />
                                {errors.description && <span className="text-red-600">This field is required</span>}
                            </div>



                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="add class" />
                            </div>


                        </div>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default AddClass;