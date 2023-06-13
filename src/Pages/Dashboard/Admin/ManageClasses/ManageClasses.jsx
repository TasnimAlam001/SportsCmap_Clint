import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiousSecure";
import Swal from "sweetalert2";
import { FaCheckCircle } from "react-icons/fa";



const ManageClasses = () => {

    const [axiosSecure] = useAxiosSecure();
    const { data: newClass = [], refetch } = useQuery(['newClass'], async () => {
        const res = await axiosSecure('/newClass')
        return res.data;
    })


    const handleApprove = (cls) => {
        console.log(cls);
        fetch(`http://localhost:5000/newClass/approve/${cls._id}`, {
            method: 'PATCH'
            
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    axiosSecure.post('/classes', cls)
                        .then(data => {
                            console.log('after posting ', data.data)
                            if (data.data.insertedId) {
                                Swal.fire(
                                    'Done !',
                                    `${cls.class_name} has added approved added to the class list.`,
                                    'success'
                                )
                            }
                        })


                }
            })

    }

    const handleReject = (cls) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You want to reject ${cls.class_name} class?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, reject this !'
        }).then((result) => {
            if (result.isConfirmed) {


                Swal.fire({
                    title: 'Please give instructor some feedback',
                    input: 'text',
                    inputAttributes: {
                        autocapitalize: 'off'
                    },
                    showCancelButton: true,
                    confirmButtonText: 'Submit',
                    showLoaderOnConfirm: true,
                   
                    allowOutsideClick: () => !Swal.isLoading()
                }).then((result) => {
                    if (result.isConfirmed) {
                        console.log(result.value)
                        const message = result.value;
                        fetch(`http://localhost:5000/newClass/reject/${cls._id}`, {
                            method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                          },
                          body: JSON.stringify({
                            message: {message}
                          })
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.modifiedCount) {
                                    refetch();
                                    Swal.fire(
                                        'Done !',
                                        `Your feedback is send to the Instructor and ${cls.class_name} has added rejected.`,
                                        'success'
                                    )
                                }
                            })
                    }
                })





            }
        })


    }







    return (
        <div className="w-full">
            <div className="p-12  rounded-lg ml-4">

                <div className="text-center pb-5">
                    <p className="text-3xl my-4">Total  Classes: {newClass.length}</p>

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
                                <th>Status</th>
                                <th>Approve</th>
                                <th>Reject</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                newClass.map((cls, index) => <tr key={cls._id} className="hover">
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

                                    <td>{
                                        cls.status
                                    } </td>

                                    <td>

                                        {
                                            cls.status === "rejected" && <button disabled className="btn btn-primary">Approve</button>}
                                        {
                                            cls.status === "approved" && <span className="text-blue-600 text-3xl text-center"> <FaCheckCircle></FaCheckCircle></span>
                                        }
                                        {
                                            cls.status === "pending" && <button onClick={() => handleApprove(cls)} className="btn btn-primary">Approve</button>
                                        }




                                    </td>
                                    <td>
                                        {
                                            cls.status === "rejected" && <button disabled className="text-red-600 font-bold ">Rejected</button>}
                                        {
                                            cls.status === "approved" && <button disabled className="btn btn-primary">Reject</button>
                                        }
                                        {
                                            cls.status === "pending" && <button onClick={() => handleReject(cls)} className="btn btn-primary">Reject</button>
                                        }


                                    </td>
                                </tr>)
                            }



                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ManageClasses;