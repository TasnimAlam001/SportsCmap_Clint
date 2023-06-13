import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiousSecure";


const ManageClasses = () => {

    const [axiosSecure] = useAxiosSecure();
    const { data: newClass = [], refetch } = useQuery(['newClass'], async () => {
        const res = await axiosSecure('/newClass')
        return res.data;
    })

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
                                        cls.status ? cls.status : "pending"
                                    } </td>

                                    <td>
                                        <button className="btn btn-primary">Approve</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-error">Reject</button>
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