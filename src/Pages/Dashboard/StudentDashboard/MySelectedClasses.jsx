import { FaCheckCircle, FaTrashAlt, FaWallet } from "react-icons/fa";
import useSelectedClass from "../../../Hooks/useSelectedClass";
import Swal from "sweetalert2";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./Payment/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK);
const MySelectedClasses = () => {
    const [classes, refetch] = useSelectedClass();
    // const [updateCls, setUpdateCls] = useState('');
    const total = classes.reduce((sum, item) => item.price + sum, 0);
    const [isOpen, setIsOpen] = useState(false);

    const handleDelete = cls => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You want to delete ${cls.name} from the Selected Class?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/selectedClass/${cls._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                `${cls.name} has been deleted from the selected class.`,
                                'success'
                            )
                        }
                    })

            }
        })
    }




    function closeModal() {
        setIsOpen(false);
    }


    function openModal() {
        setIsOpen(true);
    }

    console.log(classes)
    return (
        <div className="w-full">
            <div className="p-12  rounded-lg ml-4">

                <div className="text-center pb-5">
                    <p className="text-3xl my-4">Total Selected Classes: {classes.length}</p>
                    <div>
                        <p>Total Amount : ${total}</p>
                        <span> <button className="btn btn-outline" >Pay</button> </span>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="bg-orange-100">
                            <tr>
                                <th>#</th>
                                <th>Class</th>
                                <th>Instructor</th>
                                <th>Class Price</th>
                                <th>Pay</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                classes.map((cls, index) => <tr key={cls._id} className="hover">
                                    {/* {
                                        setUpdateCls(cls)
                                    } */}
                                    <th>{index + 1}</th>
                                    <td>

                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={cls.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{cls.class_name}</div>
                                            </div>
                                        </div>
                                    </td>


                                    <td>{cls.instructor_name}</td>

                                    <td>${cls.price}</td>

                                    <td>
                                        {
                                            cls.payment === "done" ? <span className="text-blue-600 text-2xl "> <FaCheckCircle></FaCheckCircle></span> : <>

                                                <button className="btn btn-ghost text-1xl bg-orange-400 text-white"
                                                    onClick={() => openModal(cls)}><FaWallet></FaWallet></button>

                                                {isOpen && (
                                                    <div className="fixed top-0 left-0 z-10 w-full h-full bg-gray-900 bg-opacity-50">
                                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md p-6 sm:p-8 md:p-10 lg:p-12 w-1/2">
                                                            <p>Total amount: ${cls.price}</p>

                                                            <div>

                                                                <Elements stripe={stripePromise}>

                                                                    <CheckoutForm cls={cls} price={cls.price}></CheckoutForm>


                                                                </Elements>


                                                            </div>


                                                            <button onClick={closeModal} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                                                                Close
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}


                                            </>
                                        }





                                    </td>
                                    <td><button onClick={() => handleDelete(cls)} className="btn btn-ghost text-1xl bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button></td>

                                </tr>)
                            }



                        </tbody>
                    </table>
                </div >
            </div >

        </div >
    );
};

export default MySelectedClasses;