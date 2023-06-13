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
                    Swal.fire(
                        'Done !',
                        `${cls.name} has added approved.`,
                        'success'
                    )

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
                                            cls.status === "rejected" && <button disabled className="btn btn-primary">Approve</button> }
                                        {
                                            cls.status === "approved" && <span className="text-blue-600 text-3xl text-center"> <FaCheckCircle></FaCheckCircle></span>
                                        }
                                        {
                                            cls.status === "pending" &&  <button onClick={() => handleApprove(cls)} className="btn btn-primary">Approve</button>
                                        }
                                        



                                    </td>
                                    <td>
                                        {
                                            cls.status === "rejected" && <span className="text-red-600 text-3xl text-center"> X </span> }
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